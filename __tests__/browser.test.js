import nightmare from 'nightmare';

describe('When visit the homepage', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  it('welcomes the user', async () => {
    let page = nightmare().goto('http://192.168.23.148:3000');
    let text = await page.evaluate(() => document.body.textContent).end();
    expect(text).toContain('ReactBlog');
  });

  it('goto about', async () => {
    let page = nightmare().goto('http://192.168.23.148:3000').click('a[href$="/about"]');
    let text = await page.evaluate(() => document.body.textContent).end();
    expect(text).toContain('About page');
  });

  it('goto contacts', async () => {
    let page = nightmare().goto('http://192.168.23.148:3000').click('a[href$="/contacts"]');
    let text = await page.evaluate(() => document.body.textContent).end();
    expect(text).toContain('Message');
  });

});
