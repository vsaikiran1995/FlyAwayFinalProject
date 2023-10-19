package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {
	WebDriver driver;
	By emai_id = By.xpath("//input[@name='email_id']");
	By password = By.xpath("//input[@name='pwd']");
	By loginBtn = By.xpath("//button[text()='Login']");

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}
	
	public void setEmail(String email) {
		driver.findElement(emai_id).sendKeys(email);
	}
	public void setPwd(String pwd) {
		driver.findElement(password).sendKeys(pwd);
	}
	public void clickLoginBtn() {
		driver.findElement(loginBtn).click();
	}

}
