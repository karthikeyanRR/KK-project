package com.stepdefinition;

import org.openqa.selenium.WebElement;

import com.base.BaseClass;
import com.pojo.AdaLogin;
import com.pojo.BookHotel;
import com.pojo.BookingConform;
import com.pojo.SearchHotel;
import com.pojo.SelectHotel;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

public class StepDefinitionClass extends BaseClass{
	AdaLogin al;
	SearchHotel sh;
	SelectHotel sl;
	BookHotel bh;
	BookingConform bc;
	
	@Given("User Launch Adactin Web Application")
	public void user_Launch_Adactin_Web_Application() {
		launchBrowser();
		launchUrl("http://adactinhotelapp.com/");
	    
	}

	@Then("User Verify Adactin Login Page is Display")
	public void user_Verify_Adactin_Login_Page_is_Display() {
		System.out.println(titleName());
	    
	}

	@When("User Enter the Valid Username and Password")
	public void user_Enter_the_Valid_Username_and_Password() {
		al=new AdaLogin();
		WebElement txtusername = al.getTxtusername();
		sendText(txtusername, "KarthikeyanTest");
		WebElement txtpassword = al.getTxtpassword();
		sendText(txtpassword, "9ROZ5N");
	    
	}

	@When("User Click the Login Button")
	public void user_Click_the_Login_Button() {
		al=new AdaLogin();
		al.getBtnlogin().click();
	   
	}

	@Then("User Verify Search Hotel Page is Display")
	public void user_Verify_Search_Hotel_Page_is_Display() {
		
		System.out.println(titleName());
	    
	}

	@When("User Enter Valid Location,Hotels,Room Type,Number of Room,Check in Date,Check Out Date,Adult Per Room and Child Per Room")
	public void user_Enter_Valid_Location_Hotels_Room_Type_Number_of_Room_Check_in_Date_Check_Out_Date_Adult_Per_Room_and_Child_Per_Room() {
	   sh=new SearchHotel();
	   WebElement location = sh.getLocation();
	   SltVisibleText(location, "Paris");
	   WebElement hotels = sh.getHotels();
	   SltVisibleText(hotels, "Hotel Cornice");
	   WebElement room_Type = sh.getRoom_Type();
	   SltVisibleText(room_Type, "Super Deluxe");
	   WebElement room_Nos = sh.getRoom_Nos();
	   SltVisibleText(room_Nos, "1 - One");
	   WebElement datepick_In = sh.getDatepick_In();
	   jsInsert("19/03/2022", datepick_In);
	   WebElement datepick_Out = sh.getDatepick_Out();
	   jsInsert("20/03/2022",datepick_Out);
	   WebElement adult_Room = sh.getAdult_Room();
	   SltVisibleText(adult_Room, "1 - One");
	   WebElement child_Room = sh.getChild_Room();
	   SltVisibleText(child_Room, "0 - None");
	}

	@When("User Click the Search Button")
	public void user_Click_the_Search_Button() {
		sh=new SearchHotel();
		WebElement submit = sh.getSubmit();
		submit.click();
		
	    
	}

	@Then("User Verify Select Hotel Page is Dispaly")
	public void user_Verify_Select_Hotel_Page_is_Dispaly() {
		System.out.println(titleName());
		
	   
	}

	@Then("User Click Radio Button")
	public void user_Click_Radio_Button() {
		sl=new SelectHotel();
		sl.getRadio().click();
		
	   
	}

	@Then("User Click Continue Button")
	public void user_Click_Continue_Button() {
		sl=new SelectHotel();
		sl.getCon().click();
	    
	}

	@Then("User Verify Book A Hotel Page is Display")
	public void user_Verify_Book_A_Hotel_Page_is_Display() {
		System.out.println(titleName());
	   
	}

	@When("User Enter First Name,Last Name, Build Address")
	public void user_Enter_First_Name_Last_Name_Build_Address() {
		bh=new BookHotel();
		WebElement txtfname = bh.getTxtfname();
		sendText(txtfname, "balck");
		WebElement txtlname = bh.getTxtlname();
		sendText(txtlname, "levi");
		WebElement txtaddress = bh.getTxtaddress();
		sendText(txtaddress, "Russia");
		
	    
	}

	@When("User Enter Valid Cerdit Card No,Cerdit Card Type,Expiry No and CVV No")
	public void user_Enter_Valid_Cerdit_Card_No_Cerdit_Card_Type_Expiry_No_and_CVV_No() {
		bh=new BookHotel();
		WebElement txtccno = bh.getTxtccno();
		sendText(txtccno, "5678912456098346");
		WebElement dropdowncctype = bh.getDropdowncctype();
		SltVisibleText(dropdowncctype, "VISA");
		WebElement dropdowmccexpmonth = bh.getDropdowmccexpmonth();
		SltVisibleText(dropdowmccexpmonth, "June");
		WebElement dropdownccexpyear = bh.getDropdownccexpyear();
		sltValue(dropdownccexpyear, "2022");
		WebElement txtcvvno = bh.getTxtcvvno();
		sendText(txtcvvno, "809");
		
	   
	}

	@When("User Click Book Now Button")
	public void user_Click_Book_Now_Button() {
		bh=new BookHotel();
		bh.getBtnbook().click();
	    
	}

	@Then("User Verify Book Confirmation Page and Order Id is Display")
	public void user_Verify_Book_Confirmation_Page_and_Order_Id_is_Display() throws InterruptedException {
		bc=new BookingConform();
		Thread.sleep(5000);
		System.out.println(titleName());
		WebElement txtorderid = bc.getTxtorderid();
		String attributeValue = attributeValue(txtorderid);
		System.out.println(attributeValue);
		
	    
	}

	@When("User Enter the Valid {string}, {string}")
	public void user_Enter_the_Valid(String string, String string2) {
		al=new AdaLogin();
		WebElement txtusername = al.getTxtusername();
		sendText(txtusername, string);
		WebElement txtpassword = al.getTxtpassword();
		sendText(txtpassword, string2);
		
	    
	}

	@When("User Enter Valid {string},{string},{string},{string},{string},{string},{string},{string}")
	public void user_Enter_Valid(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {
	  sh=new SearchHotel();
	  WebElement location = sh.getLocation();
	  SltVisibleText(location, string);
	  WebElement hotels = sh.getHotels();
	  SltVisibleText(hotels, string2);
	  WebElement room_Type = sh.getRoom_Type();
	  SltVisibleText(room_Type, string3);
	  WebElement room_Nos = sh.getRoom_Nos();
	  SltVisibleText(room_Nos, string4);
	  WebElement datepick_In = sh.getDatepick_In();
	  jsInsert(string5, datepick_In);
	  WebElement datepick_Out = sh.getDatepick_Out();
	  jsInsert(string6, datepick_Out);
	  WebElement adult_Room = sh.getAdult_Room();
	  SltVisibleText(adult_Room, string7);
	  WebElement child_Room = sh.getChild_Room();
	  SltVisibleText(child_Room, string8);
	}

	@When("User Enter {string},{string}, {string}")
	public void user_Enter(String string, String string2, String string3) {
		bh=new BookHotel();
		WebElement txtfname = bh.getTxtfname();
		sendText(txtfname, string);
		WebElement txtlname = bh.getTxtlname();
		sendText(txtlname, string2);
		WebElement txtaddress = bh.getTxtaddress();
		sendText(txtaddress, string3);    
	}
	@When("User Enter valid {string},{string},{string},{string} ,{string}")
	public void user_Enter_valid(String string, String string2, String string3, String string4, String string5) {
		bh=new BookHotel();
		WebElement txtccno = bh.getTxtccno();
		sendText(txtccno, string);
		WebElement dropdowncctype = bh.getDropdowncctype();
		sendText(dropdowncctype, string2);
		WebElement dropdowmccexpmonth = bh.getDropdowmccexpmonth();
		sendText(dropdowmccexpmonth, string3);
		WebElement dropdownccexpyear = bh.getDropdownccexpyear();
		sendText(dropdownccexpyear, string4);
		WebElement txtcvvno = bh.getTxtcvvno();
		sendText(txtcvvno, string5);   
	}

}
