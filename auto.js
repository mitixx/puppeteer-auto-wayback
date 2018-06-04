const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true // 画面を表示=false
});
  const page = await browser.newPage();
  await page.goto('https://archive.org/web/');
  await page.type('input[id="web_save_url"]','url');
  await page.click('#web_save_button');
  await page.waitForNavigation(30000);
  console.log('auto.js completed!');
  await browser.close();
})();

/*waitForNavの最大時間は30000ms
それ以上になるとタイムアウトでエラーが発生し処理が行えない
そのため、waitForへ引き渡し処理を実行させ終了させる*/