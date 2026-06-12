const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function capture() {
  const screenshotDir = path.join(__dirname, 'assets', 'screenshots');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  console.log('Launching browser to capture Black Cafe & Restaurant mockups...');
  const browser = await puppeteer.launch({ 
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  
  const page = await browser.newPage();

  // --- 1. CAPTURE PC MOCKUPS (1440x900) ---
  console.log('--- Capturing PC Mockups ---');
  await page.setViewport({ width: 1440, height: 900 });
  
  // Go to home
  console.log('Navigating to http://localhost:8000/...');
  await page.goto('http://localhost:8000/', { waitUntil: 'networkidle2', timeout: 15000 });
  await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for particles/animations

  // Capture Hero Section
  console.log('Capturing PC Hero area...');
  await page.screenshot({ path: path.join(screenshotDir, 'pc-home.png') });

  // Scroll to About
  console.log('Scrolling to About section...');
  await page.evaluate(() => {
    document.getElementById('about').scrollIntoView();
  });
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({ path: path.join(screenshotDir, 'pc-about.png') });

  // Scroll to Menu (Coffee tab)
  console.log('Scrolling to Menu section (Coffee tab)...');
  await page.evaluate(() => {
    document.getElementById('menu').scrollIntoView();
  });
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({ path: path.join(screenshotDir, 'pc-menu-coffee.png') });

  // Switch to Smoothie tab
  console.log('Clicking Smoothie tab...');
  await page.click('#tab-smoothie');
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({ path: path.join(screenshotDir, 'pc-menu-smoothie.png') });

  // Switch to Pasta & Pizza tab
  console.log('Clicking Pasta & Pizza tab...');
  await page.click('#tab-pizza');
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({ path: path.join(screenshotDir, 'pc-menu-pizza.png') });

  // Switch back to Coffee and toggle to EN
  console.log('Clicking Coffee tab and switching to EN language...');
  await page.click('#tab-coffee');
  await page.click('#btn-lang-en');
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({ path: path.join(screenshotDir, 'pc-menu-coffee-en.png') });

  // Switch back to TH
  await page.click('#btn-lang-th');
  await new Promise(resolve => setTimeout(resolve, 500));

  // Scroll to Booking
  console.log('Scrolling to Booking/Contact section...');
  await page.evaluate(() => {
    document.getElementById('contact').scrollIntoView();
  });
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({ path: path.join(screenshotDir, 'pc-booking.png') });


  // --- 2. CAPTURE MOBILE MOCKUPS (375x812 - iPhone X size) ---
  console.log('--- Capturing Mobile Mockups ---');
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  
  // Reload to ensure mobile layout adjustments applied properly
  console.log('Reloading page for mobile viewport...');
  await page.goto('http://localhost:8000/', { waitUntil: 'networkidle2', timeout: 15000 });
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Capture Hero Section Mobile
  console.log('Capturing Mobile Hero area...');
  await page.screenshot({ path: path.join(screenshotDir, 'mobile-home.png') });

  // Scroll to Menu
  console.log('Scrolling to Menu (Mobile)...');
  await page.evaluate(() => {
    document.getElementById('menu').scrollIntoView();
  });
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Capture Mobile Menu (2-column layout, descriptions hidden, tabs centered)
  console.log('Capturing Mobile Menu...');
  await page.screenshot({ path: path.join(screenshotDir, 'mobile-menu-coffee.png') });

  // Switch to Smoothie on Mobile
  console.log('Clicking Smoothie tab on Mobile...');
  await page.click('#tab-smoothie');
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({ path: path.join(screenshotDir, 'mobile-menu-smoothie.png') });

  // Scroll to Booking Mobile
  console.log('Scrolling to Booking (Mobile)...');
  await page.evaluate(() => {
    document.getElementById('contact').scrollIntoView();
  });
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({ path: path.join(screenshotDir, 'mobile-booking.png') });

  await browser.close();
  console.log('All mockups captured successfully! Saved in assets/screenshots/');
}

capture().catch(err => {
  console.error('Error in capture script:', err);
  process.exit(1);
});
