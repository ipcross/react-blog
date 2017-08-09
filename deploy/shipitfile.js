const package = require('../package.json');
const config = require('./config.json');
const path = require('path');
const chalk = require('chalk');

module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  require('shipit-shared')(shipit);
  require('shipit-assets')(shipit);
  require('shipit-nvm')(shipit);

  const localPath = path.resolve(__dirname, '../');
  const deployTo = config.shipit.default.deployTo;
  const deployToCurrent = deployTo + '/current';

  const appName = config.pm2.apps[0].name;

  shipit.initConfig(config.shipit);

  function buildLocal() {
    shipit.log(chalk.cyan('Build local release'));
    return shipit.local('(cd ' + localPath + ' && npm run build)')
      .then(function () {
        shipit.log(chalk.green('Local release has built.'));
      });
  }

  function npmInstallLocal() {
    shipit.log(chalk.cyan('Local npm install'));
    return shipit.local('(cd ' + localPath + ' && npm i)')
      .then(function () {
        shipit.log(chalk.green('Local npm install has completed.'));
      });
  }

  function buildRemote() {
    shipit.log(chalk.cyan('Build remote release'));
    return shipit.remote('(cd ' + deployToCurrent + ' && npm run build)')
      .then(function () {
        shipit.log(chalk.green('Remote release has built.'));
      });
  }

  function npmInstallRemote() {
    shipit.log(chalk.cyan('Remote npm install'));
    return shipit.remote('(cd ' + deployToCurrent + ' && npm i)')
      .then(function () {
        shipit.log(chalk.green('Remote npm install has completed.'));
      });
  }

  function distRemoteCopy() {
    shipit.log(chalk.cyan('Copy dist to remote server'));
    return shipit.remoteCopy(localPath + '/dist', deployToCurrent)
      .then(function () {
        shipit.log(chalk.green('Finished copy.'));
      });
  }

  function pm2StartOrRestart() {
    shipit.log(chalk.cyan('Pm2 start|restart app'));
    return shipit.remote('pm2 startOrRestart ' + deployToCurrent + '/deploy/ecosystem.config.js --only ' + appName + ' --env production && sleep 2 && pm2 info ' + appName + ' && pm2 save')
      .then(function () {
        shipit.log(chalk.green('Pm2 app started.'));
      });
  }

  function pm2StartOrReload() {
    shipit.log(chalk.cyan('Pm2 start|reload app'));
    return shipit.remote('pm2 startOrReload ' + deployToCurrent + '/deploy/ecosystem.config.js --only ' + appName + '  --env production && sleep 2 && pm2 info ' + appName + ' && pm2 save')
      .then(function () {
        shipit.log(chalk.green('Pm2 app started.'));
      });
  }

  function pm2Stop() {
    shipit.log(chalk.cyan('Pm2 stop app'));
    return shipit.remote('pm2 stop ' + appName)
      .then(function () {
        shipit.log(chalk.green('Pm2 app stoped.'));
      });
  }

  function deployError(error) {
    shipit.log(chalk.red('Failed to deploy: ' + error));
    shipit.stop();
  }

  // Before deploy
  shipit.task('dep', function () {
    shipit.log(chalk.blue.underline('Before deploy'));
    return npmInstallLocal()
      .then(function () {
        shipit.log(chalk.blue.underline('Start deploy'));
        // start deploy
        shipit.start('deploy');
      })
      .catch(deployError);
  });

  // After deploy
  shipit.on('deployed', function () {
    shipit.log(chalk.blue.underline('After deploy'));
    return npmInstallRemote()
      .then(buildRemote)
      .then(pm2StartOrRestart)
      .then(function () {
        shipit.log(chalk.green('Deploy successfully completed.'));
      })
      .catch(deployError);
  });

  // After rollback
  shipit.on('rollbacked', function () {
    shipit.log(chalk.blue.underline('After rollback'));
    return npmInstallRemote()
      .then(buildRemote)
      .then(pm2StartOrRestart)
      .then(function () {
        shipit.log(chalk.green('Rollback successfully completed.'));
      })
      .catch(deployError);
  });

  // Start or restart application via pm2 service
  shipit.task('pm2-start', pm2StartOrRestart);

  // Stop application via pm2 service
  shipit.task('pm2-stop', pm2Stop);

  // Pm2 monit
  shipit.task('pm2-monit', function () {
    return shipit.remote('pm2 monit');
  });

  // pm2 logs
  shipit.task('pm2-logs', function () {
    return shipit.remote('pm2 logs ' + appName);
  });

  // pm2 flush
  shipit.task('pm2-flush', function () {
    return shipit.remote('pm2 flush');
  });

  // Pm2 startup
  shipit.task('pm2-startup', function () {
    return shipit.remote('pm2 startup');
  });

  // Build dist
  shipit.task('remote-build', function () {
    return npmInstallRemote()
      .then(buildRemote);
  });
};
