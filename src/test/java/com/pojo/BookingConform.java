package com.pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.base.BaseClass;

public class BookingConform extends BaseClass {
	public BookingConform() {
		PageFactory.initElements(driver, this);
	}

	@FindAll({@FindBy(id="order_no"),@FindBy(xpath="//input[@name='order_no']")})
	private WebElement txtorderid;
	
	
	
	public WebElement getTxtorderid() {
		return txtorderid;
	}


}
