const puppeteer = require("puppeteer");


(async () => {
    const browser = await puppeteer.launch({ headless : false });
    const page = await browser.newPage();
    await page.goto('https://instagram.com', { waitUntil: "networkidle2"});
    //Change username
    await page.type('#loginForm > div > div:nth-child(1) > div > label > input', "username", { delay: 100 });
    //Change password
    await page.type('#loginForm > div > div:nth-child(2) > div > label > input', "password", { delay: 100 });
    await page.keyboard.press("Enter");
    await page.waitForNavigation({ waitUntil: "networkidle2" });
    let notnowButton = await page.$x('//button[contains(text(), "Ahora no")]');
    await notnowButton[0].click();
    await page.waitForNavigation({ waitUntil: "networkidle2"});
    notnowButton = await page.$x('//button[contains(text(), "Ahora no")]');
    await notnowButton[0].click();
    await page.waitForTimeout(1000);
    await page.type('.XTCLo.x3qfX', "#Mérida", {delay: 100});
    await page.waitForTimeout(1000);
    let aux = await page.$('//a.-qQT3');
    await aux[0].click();
    await page.waitForNavigation({ waitUntil: "networkidle2"});
    let posts = await page.$x('.v1Nh3 kIKUG._bz0w');
    // for(const i=1; i=4; i++){
    //     let post = posts[i];
        
        // await posts[0].click();
        // let likeButton = await post.$x('span._8-yf5 ');
        // await likeButton[0].click();
    // }
    // await browser.close();
})();