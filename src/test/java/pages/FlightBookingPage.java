package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class FlightBookingPage {
	WebDriver driver;
	By sourceDD = By.xpath("//select[@name='source']");
	By destDD = By.xpath("//select[@name='destination']");
	By submitBtn = By.xpath("//button[text()='Submit']");

	By bookFlightBtn = By.xpath("//a[text()='Book Flight']");
	By completeBookingBtn = By.xpath("//a[text()='Click to complete booking']");

	public FlightBookingPage(WebDriver driver) {
		this.driver = driver;
	}

	public void setSourceDD(String source) {
		WebElement src = driver.findElement(sourceDD);
		Select s = new Select(src);
		s.selectByVisibleText(source);
	}

	public void setDestDD(String destination) {
		WebElement dst = driver.findElement(destDD);
		Select s = new Select(dst);
		s.selectByVisibleText(destination);
	}

	public void clickSubmitBtn() {
		driver.findElement(submitBtn).click();
	}

	public void clickbookFlightBtn() {
		driver.findElement(bookFlightBtn).click();
	}

	public void clickToCompleteBookingBtn() {
		driver.findElement(completeBookingBtn).click();
	}
}
