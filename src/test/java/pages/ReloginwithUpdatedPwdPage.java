package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ReloginwithUpdatedPwdPage {
	WebDriver driver;
	By email = By.xpath("//input[@name='email_id']");
	By pwd = By.xpath("//input[@name='pwd']");
	By loginBtn = By.xpath("//*[text()='Login']");
	
	public ReloginwithUpdatedPwdPage(WebDriver driver) {
		this.driver=driver;
	}
	public void setEmail(String Email) {
		driver.findElement(email).sendKeys(Email);
	}
	public void setPwd(String password) {
		driver.findElement(pwd).sendKeys(password);
	}
	public void clicloginBtn() {
		driver.findElement(loginBtn).click();
	}

}
