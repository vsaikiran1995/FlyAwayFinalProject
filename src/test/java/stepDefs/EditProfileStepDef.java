package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.EditProfilePage;

public class EditProfileStepDef {
	WebDriver driver=Hooks.driver;
	EditProfilePage ep;
	
	@Given("user is on edit profile page {string}")
	public void user_is_on_edit_profile_page(String url) {
	    driver.get(url);
	}

	@When("user enter password as {string} and confirm password as {string}")
	public void user_enter_password_as_and_confirm_password_as(String string, String string2) {
	   ep = new EditProfilePage(driver);
	   ep.setPwd(string);
	   ep.setconfirmPwd(string2);
	}

	@When("click on update button")
	public void click_on_update_button() {
	    ep =new EditProfilePage(driver);
	    ep.clickUpdateBtn();
	}

	@Then("user should navigated to bashboard page {string}")
	public void user_should_navigated_to_bashboard_page(String expectedUrl) {
	  String actualUrl= driver.getCurrentUrl();
	  Assert.assertEquals(expectedUrl, actualUrl);
	}

	@Then("user should see an error message as {string}")
	public void user_should_see_an_error_message_as(String errorMsg) {
	    WebElement bodyElement = driver.findElement(By.tagName("body"));
	    String bodyText = bodyElement.getText();
	    Assert.assertTrue(bodyText.contains(errorMsg));
	}

}
