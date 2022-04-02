package com.pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.base.BaseClass;

public class SelectHotel extends BaseClass{
	public SelectHotel() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(xpath="//input[@type='radio']")
	private WebElement radio;
	@FindBy(id="continue")
	private WebElement con;
	public WebElement getRadio() {
		return radio;
	}
	public WebElement getCon() {
		return con;
	}
}
