package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class RegistrationPage {
	WebDriver driver;
	By EmailInput = By.xpath("//*[@name='email_id']");
	By PwdInput = By.xpath("//*[@name='pwd']");
	By CnfrmPwdInput = By.xpath("//*[@name='pwd2']");
	By NameInput = By.xpath("//*[@name='name']");
	By addressInput = By.xpath("//*[@name='address']");
	By cityInput = By.xpath("//*[@name='city']");
	By signUpBtn = By.xpath("//button[text()='Signup']");

	public RegistrationPage(WebDriver driver) {
		this.driver = driver;
	}
	
	public void setEmailInput(String email) {
		driver.findElement(EmailInput).sendKeys(email);
	}
	public void setPwdInput(String pwd) {
		driver.findElement(PwdInput).sendKeys(pwd);
	}
	public void setConfirmPwdInput(String pwd2) {
		driver.findElement(CnfrmPwdInput).sendKeys(pwd2);
	}
	public void setNameInput(String name) {
		driver.findElement(NameInput).sendKeys(name);
	}
	public void setAddressInput(String address) {
		driver.findElement(addressInput).sendKeys(address);
	}
	public void setCityInput(String city) {
		driver.findElement(cityInput).sendKeys(city);
	}
	public void clickSignUpBtn() {
		driver.findElement(signUpBtn).click();
	}
	public void verifySignUp() {
		String acutalUrl = driver.getCurrentUrl();
		String expectedUrl = "http://localhost:9090/FlyAway/registerconfirm";
		Assert.assertEquals(acutalUrl, expectedUrl);
	}
	
	

}
