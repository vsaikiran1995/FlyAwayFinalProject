package stepDefs;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.RegistrationPage;

public class RegistrationStepDef {
	WebDriver driver = Hooks.driver;
	RegistrationPage rp;

	// *************Successfull Registration******************//
	@Given("user navigated to signup url {string}")
	public void user_navigated_to_signup_url(String url) {
		driver.get(url);
	}

	@When("user enter required details as following below")
	public void user_enter_required_details_as_following_below(io.cucumber.datatable.DataTable table) {
		List<Map<String, String>> data = table.asMaps(String.class, String.class);

		String email = data.get(0).get("email_id");
		String password = data.get(0).get("password");
		String confirm_pwd = data.get(0).get("confirm_pwd");
		String name = data.get(0).get("name");
		String address = data.get(0).get("address");
		String city = data.get(0).get("city");
		rp = new RegistrationPage(driver);
		rp.setEmailInput(email);
		rp.setPwdInput(password);
		rp.setConfirmPwdInput(confirm_pwd);
		rp.setNameInput(name);
		rp.setAddressInput(address);
		rp.setCityInput(city);

	}

	@When("user click on submit button")
	public void user_click_on_submit_button() {
		rp = new RegistrationPage(driver);
		rp.clickSignUpBtn();

	}

	@Then("validate user registration is successfull")
	public void validate_user_registration_is_successfull() {
		rp = new RegistrationPage(driver);
		rp.verifySignUp();

	}

	// **************Registration with existing email*********************//

	@When("user enter existing email for registration and other following requried details")
	public void user_enter_existing_email_for_registration_and_other_following_requried_details(
			io.cucumber.datatable.DataTable table) {
		List<Map<String, String>> data = table.asMaps(String.class, String.class);

		String email = data.get(0).get("email_id");
		String password = data.get(0).get("password");
		String confirm_pwd = data.get(0).get("confirm_pwd");
		String name = data.get(0).get("name");
		String address = data.get(0).get("address");
		String city = data.get(0).get("city");
		rp = new RegistrationPage(driver);
		rp.setEmailInput(email);
		rp.setPwdInput(password);
		rp.setConfirmPwdInput(confirm_pwd);
		rp.setNameInput(name);
		rp.setAddressInput(address);
		rp.setCityInput(city);
	}

	@Then("validate user should see error message as {string}")
	public void validate_user_should_see_error_message_as(String errorMsg) {
		WebElement bodyElement = driver.findElement(By.tagName("body"));
		String bodyText = bodyElement.getText();
		Assert.assertTrue(bodyText.contains(errorMsg));
	}

	// ****************Registration with missing fields********************//

	@When("user enter the registration form with missing details as below")
	public void user_enter_the_registration_form_with_missing_details_as_below(io.cucumber.datatable.DataTable table) {
		List<Map<String, String>> data = table.asMaps(String.class, String.class);

		String email = data.get(0).get("email_id");
		String password = data.get(0).get("password");
		String confirm_pwd = data.get(0).get("confirm_pwd");
		String name = data.get(0).get("name");
		String address = data.get(0).get("address");
		String city = data.get(0).get("city");

		rp = new RegistrationPage(driver);
		rp.setEmailInput(email);
		rp.setPwdInput(password);
		rp.setConfirmPwdInput(confirm_pwd);
		rp.setAddressInput(address);
		rp.setCityInput(city);
	}

	@Then("user should see error message for missing field as {string}")
	public void user_should_see_error_message_for_missing_field_as(String errorMsg) {
		WebElement bodyElement = driver.findElement(By.tagName("body"));
		String bodyText = bodyElement.getText();
		Assert.assertTrue(bodyText.contains(errorMsg));
	}

	// **************Registration with different passwords**********************//

	@When("user enter the registratoinform with different passwords")
	public void user_enter_the_registratoinform_with_different_passwords(io.cucumber.datatable.DataTable table) {
		Map<String, String> data = table.transpose().asMap(String.class, String.class);
		String email = data.get("email_id");
		String password = data.get("password");
		String confirm_pwd = data.get("confirm_pwd");
		String name = data.get("name");
		String address = data.get("address");
		String city = data.get("city");
		
		rp = new RegistrationPage(driver);
		rp.setEmailInput(email);
		rp.setPwdInput(password);
		rp.setConfirmPwdInput(confirm_pwd);
		rp.setNameInput(name);
		rp.setAddressInput(address);
		rp.setCityInput(city);
	}

	@Then("user should see error message as {string}")
	public void user_should_see_error_message_as(String errorMsg) {
		WebElement bodyElement = driver.findElement(By.tagName("body"));
		String bodyText = bodyElement.getText();
		Assert.assertTrue(bodyText.contains(errorMsg));
	}

}
