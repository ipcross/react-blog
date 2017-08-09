# Deploy

## Расположение

* __Имя контейнера__ - name.app.ru
* __Пользователь__ - deploy
* __Пароль__ - стандартный xxxx
* __Директория проекта__ - /var/www/sites/app

## Используемые инструменты

* [shipit](https://github.com/shipitjs/shipit) - библиотека для деплоя и таск менеджмента.
* [pm2](http://pm2.keymetrics.io/) - сервис для мониторинга, авто запуска приложений и т.п.

## Описание процесса
Общая схема деплоя похожа на _capistrano_. Имеется папка _release_, где хранятся последнии релизы проекта, и папка _current_, которая указывает (symlink) на текущий активный релиз. Также есть папка _shared_ в которой хранятся общие для всех релизов файлы:
* *node_modules* - папка с _npm_ пакетами (для того, чтобы каждый раз для нового релиза не ставить все пакеты заново)
* *logs* - общая папка для логов приложения

Деплой состоит из 3 этапов:
1. __Before deploy__. Для того чтобы уменьшить время неактивности приложения (пока идет деплой в продакшен), перед непосредственно деплом происходит процесс сборки всех _assets_ файлов приложения на локальном компьютере пользователя.
2.  __Start deploy__. Сам деплой происходит по логике библиотеки [shipit-deploy](https://github.com/shipitjs/shipit-deploy#workflow-tasks).
3. __After deploy__. После деплоя происходит установка возможно отсутсвующих _npm_ пакетов на удаленном контейнере и копирования посредством _ssh_ созднанных раннее на локальном компьютере _assets_ в папку _dist_ текущего релиза на контейнере. И в конце происходит перезапуск сервера приложения посредством сервиса _pm2_.

## Подготовка к деплою

1. Установить все необходимые модули с проектом и установить глобально _pm2_
```bash
$ npm i
$ npm -g i pm2
```
2. Сгенерировать ключ на локальном компьютере с помощью _ssh-keygen_
```bash
$ ssh-keygen
```
3. Перейти в папку с ssh-ключами и скопировать публичный ключ _id_rsa.pub_ на контейнер с помощью утилиты _ssh-copy-id_
```bash
$ cd ~/.ssh
$ ssh-copy-id -i id_rsa.pub deploy@ncs2.vgg.ru
```
  * В случаи если возникла ошибка "Agent admitted failure to sign using the key.", то [возможное решение](https://help.github.com/articles/error-agent-admitted-failure-to-sign/):
  ```bash
  $ # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  $ ssh-add
  ```
4. _Уже настроено, можно пропустить._  
Необходимо убедиться, что контейнер может выполнять _git pull_ и _git clone_ - должен быть доступ контейнера через ssh к _gitlab_ (аналогично пункту №2 и №3 но теперь локальным компьютером выступает контейнер, а удаленным _gitlab_. Можно использовать специальные deploy ключи _gitlab_)

## Список команд

Все команды запускаются из корня проекта на локальном компьютере через _npm_. Доступны следующие команды:
* Запуск деплоя в продакшен
```bash
$ npm run deploy
```
* Откат к предыдущей версии
```bash
$ npm run rollback
```
* Принудительная сборка _assets_ проекта на контейнере. (Не рекомендуется использовать, так как предыдущие файлы сборки будут удалены и приложение на время будет недоступно!)
```bash
$ npm run remote-build
```
* Принудительный запуск/перезапуск приложения на контейнере.
```bash
$ npm run remote-start
```
* Принудительная остановка приложения на контейнере.
```bash
$ npm run remote-stop
```
* Просмотр логов приложения на контейнере.
```bash
$ npm run remote-logs
```
* Очистить все логи приложения на контейнере.
```bash
$ npm run remote-clear-logs
```
* Мониторинг приложения в реальном времени на контейнере ([подробнее](http://pm2.keymetrics.io/docs/usage/monitoring/)).
```bash
$ npm run remote-monit
```
* Автозапуск приложения на контейнера ([подробнее](http://pm2.keymetrics.io/docs/usage/startup/)).
```bash
$ npm run remote-startup
```