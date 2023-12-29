class LoginPage {
  async navigateToLoginScreen() {
    await page.goto("https://www.saucedemo.com/");
  }

  async login(username = "standard_user", password = "secret_sauce") {
    await page.type("#user-name", username);
    await page.type("#password", password);
    await page.click("#login-button");
  }

  async assertUserIsLoggedIn() {
    await page.waitForSelector(".inventory_list");
  }

  async pause() {
    await page.waitForTimeout(3000);
  }
}

module.exports = LoginPage;
