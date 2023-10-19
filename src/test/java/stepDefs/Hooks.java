package stepDefs;

import java.time.Duration;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks {
	static WebDriver driver;

	@Before
	public void BrowserSetUp() {
		ChromeOptions co = new ChromeOptions();
		co.setBrowserVersion("115");
		driver = new ChromeDriver(co);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
	}

	@Before
	public void beforeScenario() {
		System.out.println("This will run before the scenario");
	}

	@After
	public void afterScenario(io.cucumber.java.Scenario sc) {
		System.out.println("This will run after the scenario");
		if (sc.isFailed()) {
			TakesScreenshot ts = (TakesScreenshot) driver;
			byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
			sc.embed(screenshot, "image/png");
		} else {
			TakesScreenshot ts = (TakesScreenshot) driver;
			byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
			sc.embed(screenshot, "image/png");
		}
	}

	@After
	public void BrowserTearDown() {
		driver.quit();
	}

}
