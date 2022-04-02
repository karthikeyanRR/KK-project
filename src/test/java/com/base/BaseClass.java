package com.base;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.time.Duration;
import java.util.List;
import java.util.Set;

import org.apache.commons.io.FileUtils;

import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	
	public static WebDriver driver;
	public WebDriver launchBrowser() {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		return driver;
	}
	public void launchUrl(String url) {
		driver.get(url);
		
	}
	public void sendText(WebElement we,String text) {
		we.sendKeys(text);
	}
	public void buttonClick(WebElement we) {
		we.click();
		
	}
	public String urll() {
		String url = driver.getCurrentUrl();
		return url;
	}
	
	public String titleName() {
		String t = driver.getTitle();
		return t;
	}
		
	public String text(WebElement we) {
			String text = we.getText();
			return text;

	}
	
	public void closeBrowser() {
		driver.close();

	}
	
	public void quitBrowser() {
		driver.quit();

	}
	
	public String getTgname(WebElement we) {
		String tagName = we.getTagName();
		return tagName;
		
	}
	
	public String attributeValue(WebElement we) {
		String attribute = we.getAttribute("value");
		return attribute;

	}
	public void mouseAction(WebElement we) {
		Actions a=new Actions(driver);
		a.moveToElement(we).perform();
	
	}
	
	public void dragDropAction(WebElement we, WebElement we1) {
		Actions a=new Actions(driver);
		a.dragAndDrop(we, we1).perform();

	}
	public void conClickAction(WebElement we) {
		Actions a=new Actions(driver);
		a.contextClick(we).perform();
		

	}
	public void douclick(WebElement we) {
		Actions a=new Actions(driver);
		a.doubleClick(we).perform();
	}
	
	public void keyboardDown() throws AWTException {
		Robot r=new Robot();
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyRelease(KeyEvent.VK_DOWN);
	}
	
	public void keyboardUp() throws AWTException {
		Robot r=new Robot();
		r.keyPress(KeyEvent.VK_UP);
		r.keyRelease(KeyEvent.VK_UP);
	
	}
	public void enterKey() throws AWTException {
		Robot r=new Robot();
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
	}
	public void leftKey() throws AWTException {
		Robot r=new Robot();
		r.keyPress(KeyEvent.VK_LEFT);
		r.keyRelease(KeyEvent.VK_LEFT);
	}
	public void rightkey() throws AWTException {
		Robot r=new Robot();
		r.keyPress(KeyEvent.VK_RIGHT);
		r.keyRelease(KeyEvent.VK_RIGHT);

	}
	
	public void acceptAlert() {
		Alert a = driver.switchTo().alert();
		a.accept();
	}
	public void disAlert() {
		Alert a = driver.switchTo().alert();
		a.dismiss();

	}
	
	public void sendkeyAlerts(String s) {
		Alert a = driver.switchTo().alert();
		a.sendKeys(s);
	}
	
	public String getTextAlert() {
		Alert a = driver.switchTo().alert();
		String text = a.getText();
		return text;

	}
	public File takePic(String s) throws IOException {
		TakesScreenshot ts=(TakesScreenshot)driver;
		File screenshotAs = ts.getScreenshotAs(OutputType.FILE);
		File f=new File(s);
		FileUtils.copyFile(screenshotAs, f);
		return screenshotAs;

	}
	//switch frame by index
	public void frameId(int i) {
		driver.switchTo().frame(i);

	}
	//switch frame by name or id
	public void frameName(String s) {
		driver.switchTo().frame(s);

	}

	//switch frame by element
	public void frameElement(WebElement e) {
		driver.switchTo().frame(e);

	}
	//switch to parent frame
	
	public void pFrame() {
		driver.switchTo().parentFrame();

	}
	//switch to main frame
	public void mFrame() {
		driver.switchTo().defaultContent();

	}
//dropdown selection
	//select by visibletext
	public void SltVisibleText(WebElement we,String sr) {
		Select s=new Select(we);
		s.selectByVisibleText(sr);

	}
	//select by index
	public void sltIndex(WebElement we,int i) {
		Select s=new Select(we);
		s.selectByIndex(i);

	}
	//select by value
	public void sltValue(WebElement we,String sr) {
		Select s=new Select(we);
		s.selectByValue(sr);
	}	
	//javascript executor insert,click and attributes
		public void jsInsert(String s,WebElement e) {
			JavascriptExecutor js=(JavascriptExecutor)driver;
			js.executeScript("arguments[0].setAttribute('value','"+s+"')", e);			
		}
		//javascript executor click 
		public void jsClick(WebElement we) {
			JavascriptExecutor js=(JavascriptExecutor)driver;
			js.executeScript("arguments[0].click()", we);
		}		
		//javascript get attributes
		public String jsgetatt(WebElement we) {
			JavascriptExecutor js=(JavascriptExecutor)driver;
			Object obj = js.executeScript("result arguments[0].getAttribute('value')", we);
			String s=(String)obj;
			System.out.println(s);
			return s;
		}
		
	//get all option in a list
	public String allOptionGet(WebElement we) {
		Select s=new Select(we);
		List<WebElement> l = s.getOptions();
		for (int i = 0; i < l.size(); i++) {
			WebElement element = l.get(i);
			String text = element.getText();
			System.out.println(text);
		}
		return null;
	}
	//check multiple optioncan select
	public boolean mulOption(WebElement we) {
		Select s=new Select(we);
		boolean multiple = s.isMultiple();
		return multiple;
	}
	//list the all selected options
	public String sltAllOption(WebElement we) {
		Select s=new Select(we);
		List<WebElement> l = s.getAllSelectedOptions();
		for (int i = 0; i < l.size(); i++) {
			WebElement element = l.get(i);
			String text = element.getText();
			System.out.println(text);
		}
		return null;
	}
	// get first selected option in dropdown
	public String frstSelected(WebElement we) {
		Select s=new Select(we);
		WebElement e = s.getFirstSelectedOption();
		String text = e.getText();
		System.out.println(text);
		return text;
	}
	//deselect by indx
	public void deSltIndex(WebElement we,int i) {
		Select s=new Select(we);
		s.deselectByIndex(i);
	}
	//deselect by value
	public void deSltValue(WebElement we,String sr) {
		Select s=new Select(we);
		s.deselectByValue(sr);
	}
	//deselect by visibleText
	public void deSltText(WebElement we,String sr) {
		Select s=new Select(we);
		s.deselectByVisibleText(sr);
	}
	//deselect all
	public void deSltAll(WebElement we) {
		Select s=new Select(we);
		s.deselectAll();
	}
	//windows handles all windows id get
	public void allWindows() {
		Set<String> s = driver.getWindowHandles();
		int count=0;
		for (String all : s) {
			if (count==1) {
				driver.switchTo().window(all);
			}
			count++;
		}
	}
	
	
	//nevigate to next website
	public void nevigate(String s) {
		driver.navigate().to(s);
	}
	//back 
	public void back() {
		driver.navigate().back();
	}
	//forward
	public void forward() {
		driver.navigate().forward();
	}
	//refersh
	public void ref() {
		driver.navigate().refresh();
	}
	//displayed and enabled
	public void disEna(WebElement we,String s) {
		boolean b = we.isDisplayed();
		boolean b1 = we.isEnabled();
		if (b==true && b1==true) {
			we.sendKeys(s);
		}
	}
	//selected
	public void Selt(WebElement we) {
		boolean b = we.isSelected();
		System.out.println(b);

	}
	
	
	
	//static wait
	public void slep() throws InterruptedException {
		Thread.sleep(3000);

	}
	//js scroll
	public  void scrollPage(WebElement we) {
		JavascriptExecutor js=(JavascriptExecutor)driver;
		js.executeScript("arguments[0].scrollInto(true)",we);
	}
	
	//implict wait
	public void implictpage() {
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(100));

	}
	
	//fluent wait
	
	public void fluentPage() {
		Wait w=new FluentWait(driver)
				.withTimeout(Duration.ofSeconds(100))
				.pollingEvery(Duration.ofSeconds(5))
				.ignoring(Throwable.class); 
		

	}
}
	
	