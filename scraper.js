const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = "https://slides.com/leonnoel/alumni-class01#/1"
    await page.goto(url);

    const titles = await page.evaluate(() => {
        document.querySelectorAll("section.future").forEach(banana => {
            banana.innerText;
        })
    })

    console.log(titles)
    // await page.screenshot({path: "example.png"})

    await browser.close();
})();

//let futureSlide = document.querySelectorAll("section.future");



