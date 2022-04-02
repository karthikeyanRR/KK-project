package com.pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.base.BaseClass;

public class BookHotel extends BaseClass {
	
	public BookHotel() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="final_price_dis")
	private WebElement billedprice;
	
	@FindAll({@FindBy(id="first_name"),@FindBy(name="first_name")})
	private WebElement txtfname;
	@FindBy(id="last_name")
	private WebElement txtlname;
	@FindBy(id="address")
	private WebElement txtaddress;
	@FindBy(id="cc_num")
	private WebElement txtccno;
	@FindBy(id="cc_type")
	private WebElement dropdowncctype;
	@FindBy(id="cc_exp_month")
	private WebElement dropdowmccexpmonth;
	@FindBy(id="cc_exp_year")
	private WebElement dropdownccexpyear;
	@FindBy(id="cc_cvv")
	private WebElement txtcvvno;
	@FindBy(id="book_now")
	private WebElement btnbook;
	
	public WebElement getBilledprice() {
		return billedprice;
	}
	
	public WebElement getTxtfname() {
		return txtfname;
	}
	public WebElement getTxtlname() {
		return txtlname;
	}
	public WebElement getTxtaddress() {
		return txtaddress;
	}
	public WebElement getTxtccno() {
		return txtccno;
	}
	public WebElement getDropdowncctype() {
		return dropdowncctype;
	}
	public WebElement getDropdowmccexpmonth() {
		return dropdowmccexpmonth;
	}
	public WebElement getDropdownccexpyear() {
		return dropdownccexpyear;
	}
	public WebElement getTxtcvvno() {
		return txtcvvno;
	}
	public WebElement getBtnbook() {
		return btnbook;
	}
	

}
