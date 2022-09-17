import puppeteer from "puppeteer";
import { createFile } from "./import/createFile.js";

const start = async () => {
  console.log("start");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const joblist = "https://jobb.tu.no/sok?industries[]=IT&q=frontend";
  await page.goto(joblist);
  await page.screenshot({ path: "screenshots/joblist.png" });

  // console.group('jobAdLinksEVALUATE');
  // const jobAdLinksEVALUATE = await page.evaluate(() => {
  //   // evaluate er generic for generell, catch all, client side js
  //   // console log vil logge til chrome console
  //   return Array.from(
  //     document.querySelectorAll("div.search-result-list h3 a")
  //   ).map((x) => {
  //     console.log(x);
  //     return x.href;
  //   });
  // });
  // console.groupEnd()

  // console.log(jobAdLinksEVALUATE);

  console.group("jobAdLinks");
  const jobAdLinks = await page.$$eval("div.search-result-list h3 a", (e) => {
    console.log(e);
    return e.map((i) => i.href);
  });
  console.groupEnd();

  console.log(jobAdLinks[0]);

  // console.log(jobAdLinks);

  // console.log('dingenligngeling');

  // await page.goto(jobAdLinksEVALUATE[0]);
  await page.goto(jobAdLinks[0]);
  await page.screenshot({ path: "screenshots/job.png" });

  // create file from job advertisement page
  // createFile(page);

  console.log("end");
  await browser.close();
};

start();
