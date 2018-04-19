'use strict';
const path = require('path');
const puppeteer = require('puppeteer');

console.log(__dirname);
console.log(path.resolve('./'));
const target = [
  'baidu',
  'taobao',
  'tmall',
  'jd',
  'douyu',
  'zhihu',
];

const screenshot = async (s, b) => {
  const page = await b.newPage();
  await page.goto(`http://www.${s}.com`);
  await page.screenshot({ path: path.resolve(__dirname, `./screenshot/${s}.png`) });
  console.log(`get 【${s}】 done`);
  Promise.resolve();
};

const run = async () => {
  const browser = await puppeteer.launch();
  await Promise.all(target.forEach(str => {
    screenshot(str, browser);
  }));
  await browser.close();
};

run();
