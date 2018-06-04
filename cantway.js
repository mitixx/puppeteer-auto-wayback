const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true ,// 画面を表示=false
    args:['--proxy-server=socks5://127.0.0.1:9050']/*tor*/
});
    const page = await browser.newPage();
    /*through auth*/
    const user = ''
    const pass = ''
    await page.setExtraHTTPHeaders({
        Authorization:`Basic ${new Buffer(`${user}:${pass}`).toString('base64')}`
        });
    await page.goto('url');
    await page.setViewport({width:1920,height:15000});
    await page.screenshot(({path:'renewal' + new Date() + '.jpg',fullPage:true}));
    console.log('cantway.js completed!')
    await browser.close();
})();

/*args:['--proxy-server="socks5://127.0.0.1:8123"']
""が付いているとエラーが起きる
tor通すと激重
*/