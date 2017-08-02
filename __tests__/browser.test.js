import nightmare from 'nightmare';

describe('When visit the homepage', () => {

  it('welcomes the user', async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    let page = nightmare().goto('http://192.168.23.148:3000');
    let text = await page.evaluate(() => document.body.textContent).end();
    expect(text).toContain('ReactBlog');
  });
});
