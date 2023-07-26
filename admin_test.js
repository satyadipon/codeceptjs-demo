Feature('Admin');

Scenario('Add user',  ({ I }) => {
    I.selectOption
    I.amOnPage('/');
    I.waitForText("Login", 5)
    I.fillField("input[name='username']", "Admin")
    I.fillField("input[name='password']", "admin123")
    I.click("button[type='submit']")
    I.waitForText("Dashboard", 5);
    I.click("//span[text()='Admin']")
    I.waitForText("Add", 5);
    I.click("//button[text()=' Add ']")
    I.waitForText("Add User", 5);
    I.click("(//*[text()='-- Select --'])[1]")
    // I.waitForElement("div[role='listbox']", 5)
    // I.waitForText("ESS", 5);
    I.click("//span[text()='ESS']")
    
    I.fillField("input[placeholder='Type for hints...']", 'Odis Adalwin')
    I.wait(3)
    I.waitForElement("(//div[@role='option'])[1]")
    I.click("(//div[@role='option'])[1]")
    I.click("(//*[text()='-- Select --'])[1]")
    I.click("//span[text()='Enabled']")

    let user = 'test_'+Date.now();
    I.fillField("//label[text()='Username']/../following-sibling::div//input", user)
    I.fillField("//label[text()='Password']/../following-sibling::div//input", user)
    I.fillField("//label[text()='Confirm Password']/../following-sibling::div//input", user)

    I.click("button[type='submit']")

    I.waitForText("System Users", 15);

    I.fillField("//label[text()='Username']/../following-sibling::div//input", user)
    I.click("button[type='submit']")

    I.waitForText('ESS', 5);
    I.see(user)
    I.see('ESS')

    I.wait(5)
});


