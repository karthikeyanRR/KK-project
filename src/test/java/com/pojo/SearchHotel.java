package com.pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.base.BaseClass;

public class SearchHotel extends BaseClass {
	public SearchHotel() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="location")
	private WebElement location;
	@FindBy(id="hotels")
	private WebElement hotels;
	@FindBy(id="room_type")
	private WebElement room_Type;
	@FindBy(id="room_nos")
	private WebElement room_Nos;
	@FindBy(id="datepick_in")
	private WebElement datepick_In;
	@FindBy(id="datepick_out")
	private WebElement datepick_Out;
	@FindBy(id="adult_room")
	private WebElement adult_Room;
	@FindBy(id="child_room")
	private WebElement child_Room;
	@FindBy(id="Submit")
	private WebElement submit;
	public WebElement getLocation() {
		return location;
	}
	public WebElement getHotels() {
		return hotels;
	}
	public WebElement getRoom_Type() {
		return room_Type;
	}
	public WebElement getRoom_Nos() {
		return room_Nos;
	}
	public WebElement getDatepick_In() {
		return datepick_In;
	}
	public WebElement getDatepick_Out() {
		return datepick_Out;
	}
	public WebElement getAdult_Room() {
		return adult_Room;
	}
	public WebElement getChild_Room() {
		return child_Room;
	}
	public WebElement getSubmit() {
		return submit;
	}
}
