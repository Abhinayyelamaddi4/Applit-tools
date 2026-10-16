const { Eyes, Classicrunner, Target } = require('@applitools/eyes-webdriverio');

test('Applitools Test', async ()=> {

    const runner= new Classicrunner();
    const eyes = new Eyes(runner);
    await eyes.setApiKey('YOUR_API_KEY'); // add api key here
   
    await eyes.open(browser, 'Applitools Test', 'Test 1'); // {width: 800, height: 600}
    await eyes.check("https://www.google.com/");
    await eyes.check('Google page', Target.window().fully());
    await eyes.close();


})