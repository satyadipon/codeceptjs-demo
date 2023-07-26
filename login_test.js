Feature('login');

Scenario('Verify Login',  ({ I }) => {
    I.amOnPage('/');
    I.waitForText("Login", 5)
    I.see("Login")
});

Scenario('Login into application',  ({ I }) => {
    I.amOnPage('/');
    I.waitForText("Login", 5)
    I.fillField("input[name='username']", "Admin")
    I.fillField("input[name='password']", "admin123")
    I.click("button[type='submit']")
    I.waitForText("Dashboard", 5);
});
