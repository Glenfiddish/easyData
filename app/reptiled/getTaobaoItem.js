'use strict';
// const path = require('path');
const puppeteer = require('puppeteer');

const itemList = [ '衣服', '鞋子', '帽子' ];

const readDomData = () => {
  console.log(1);
  const dom = document.getElementById('mq');
  console.log(dom);
  dom.value = itemList[0];
  dom.parentElement.submit();
  const imgDom = document.querySelectorAll('.pic img');
  console.log(imgDom);
};

const read = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.taobao.com', { waitUntil: 'networkidle2' });
  readDomData();
};

read();
