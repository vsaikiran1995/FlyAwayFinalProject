package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class EditProfilePage {
	WebDriver driver;
	By pwd = By.xpath("//input[@name='pwd']");
	By confirmPwd = By.xpath("//input[@name='pwd2']");
	By updateBtn = By.xpath("//button[text()='Update']");
	
	public EditProfilePage(WebDriver driver) {
		this.driver=driver;
	}
	public void setPwd(String password) {
		driver.findElement(pwd).sendKeys(password);
	}
	public void setconfirmPwd(String password2) {
		driver.findElement(confirmPwd).sendKeys(password2);
	}
	public void clickUpdateBtn() {
		driver.findElement(updateBtn).click();
	}

}
