package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.LoginPage;

public class LoginStepDef {
	WebDriver driver = Hooks.driver;
	LoginPage lp;

	@Given("the user is on login page {string}")
	public void the_user_is_on_login_page(String url) {
		driver.get(url);

	}

	@When("the user enter username as {string} and passwrod as {string}")
	public void the_user_enter_username_as_and_passwrod_as(String username, String pwd) {
		lp = new LoginPage(driver);
		lp.setEmail(username);
		lp.setPwd(pwd);
	}

	@When("click on login button")
	public void click_on_login_button() {
		lp = new LoginPage(driver);
		lp.clickLoginBtn();
	}

	@Then("user should be successful logged in")
	public void user_should_be_successful_logged_in() {
		lp = new LoginPage(driver);
		String actualUrl = driver.getCurrentUrl();
		String expectedUrl = "http://localhost:9090/FlyAway/dashboard";
		Assert.assertEquals(expectedUrl, actualUrl);
	}

	// ****************login with incorrect credentials************//
	@Then("user should be see error message")
	public void user_should_be_see_error_message() {
		WebElement bodyElement = driver.findElement(By.tagName("body"));
		String bodyText = bodyElement.getText();
		Assert.assertTrue(bodyText.contains("Login failed"));
	}

}
