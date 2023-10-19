package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.LoginPage;
import pages.ReloginwithUpdatedPwdPage;

public class ReLoginwithUpdatedPwd_StepDef {
	WebDriver driver = Hooks.driver;
	ReloginwithUpdatedPwdPage rl;
	
	@Given("user is on login page {string}")
	public void user_is_on_login_page(String url) {
	   driver.get(url);
	}

	@When("user enter username as {string} and password as {string}")
	public void user_enter_username_as_and_password_as(String string, String string2) {
	   rl = new ReloginwithUpdatedPwdPage(driver);
	   rl.setEmail(string);
	   rl.setPwd(string2);
	}

	@Then("user should navigated to dashboard page {string}")
	public void user_should_navigated_to_dashboard_page(String expectedUrl) {
		String acutalUrl = driver.getCurrentUrl();
		Assert.assertEquals(expectedUrl, acutalUrl);
		
	}
	
	@When("click on login btn")
	public void click_on_login_btn() {
		rl = new ReloginwithUpdatedPwdPage(driver);
		rl.clicloginBtn();
	}

}
