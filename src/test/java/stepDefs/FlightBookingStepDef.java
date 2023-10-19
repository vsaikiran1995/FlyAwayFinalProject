package stepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.FlightBookingPage;

public class FlightBookingStepDef {
	WebDriver driver = Hooks.driver;
	FlightBookingPage fp;

	@Given("the user is on  the flight booking page {string}")
	public void the_user_is_on_the_flight_booking_page(String url) {
		driver.get(url);
	}

	@When("user enter the departure as {string} and destination as {string} cities")
	public void user_enter_the_departure_as_and_destination_as_cities(String source, String destination) {
		fp = new FlightBookingPage(driver);
		fp.setSourceDD(source);
		fp.setDestDD(destination);
	}

	@When("the user click on search button")
	public void the_user_click_on_search_button() {
		fp = new FlightBookingPage(driver);
		fp.clickSubmitBtn();
	}

	@Then("user should see a list of available flights")
	public void user_should_see_a_list_of_available_flights() throws InterruptedException {
		WebElement bodyElement = driver.findElement(By.tagName("body"));
		String bodyText = bodyElement.getText();
		Assert.assertTrue(bodyText.contains("Dep.8 AM Arr.10:30 AMx (2.5 HOURS)"));

	}

	// ***************Select and book flight**********************//

	@When("the user click on book flight button")
	public void the_user_click_on_book_flight_button() {
		fp = new FlightBookingPage(driver);
		fp.clickbookFlightBtn();
	}

	@Then("user should navigated to confirm booking details page")
	public void user_should_navigated_to_confirm_booking_details_page() {
		WebElement bodyElement = driver.findElement(By.tagName("body"));
		String bodyText = bodyElement.getText();
		Assert.assertTrue(bodyText.contains("Please confirm your flight details below:"));
	}

	// *************complete flight booking*******************//
	
	@When("the user click on complete flight booking button")
	public void the_user_click_on_complete_flight_booking_button() {
		fp = new FlightBookingPage(driver);
		fp.clickToCompleteBookingBtn();
	}

	@Then("user should navigated to complete purchase page")
	public void user_should_navigated_to_complete_purchase_page() {
		WebElement bodyElement = driver.findElement(By.tagName("body"));
		String bodyText = bodyElement.getText();
		Assert.assertTrue(bodyText.contains("has been booked for 2500.00."));
	}

}
