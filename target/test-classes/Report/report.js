$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/booking.feature");
formatter.feature({
  "name": "Validation of Adactin Hotel Web Page",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Launch Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.user_Launch_Adactin_Web_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Adactin Login Page is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Adactin_Login_Page_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": ": TC_ADA_01 Validation of Adactin Hotel Booking",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Enter the Valid Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter_the_Valid_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Search Hotel Page is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Search_Hotel_Page_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Valid Location,Hotels,Room Type,Number of Room,Check in Date,Check Out Date,Adult Per Room and Child Per Room",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter_Valid_Location_Hotels_Room_Type_Number_of_Room_Check_in_Date_Check_Out_Date_Adult_Per_Room_and_Child_Per_Room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_the_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Select Hotel Page is Dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Select_Hotel_Page_is_Dispaly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Radio Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_Radio_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Continue Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Book A Hotel Page is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Book_A_Hotel_Page_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter First Name,Last Name, Build Address",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter_First_Name_Last_Name_Build_Address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Valid Cerdit Card No,Cerdit Card Type,Expiry No and CVV No",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter_Valid_Cerdit_Card_No_Cerdit_Card_Type_Expiry_No_and_CVV_No()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Book Now Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_Book_Now_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Book Confirmation Page and Order Id is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Book_Confirmation_Page_and_Order_Id_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC_ADA_02\tValidation of Adactin Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Enter the Valid \"\u003cUsername\u003e\", \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Click the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Verify Search Hotel Page is Display",
  "keyword": "Then "
});
formatter.step({
  "name": "User Enter Valid \"\u003cLocation\u003e\",\"\u003cHotels\u003e\",\"\u003cRoomType\u003e\",\"\u003cNumberofRoom\u003e\",\"\u003cCheckinDate\u003e\",\"\u003cCheckOutDate\u003e\",\"\u003cAdultPerRoom\u003e\",\"\u003cChildPerRoom\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Click the Search Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Verify Select Hotel Page is Dispaly",
  "keyword": "Then "
});
formatter.step({
  "name": "User Click Radio Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Click Continue Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Verify Book A Hotel Page is Display",
  "keyword": "Then "
});
formatter.step({
  "name": "User Enter \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\", \"\u003cBuildAddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter valid \"\u003cCCNo\u003e\",\"\u003cCCType\u003e\",\"\u003cExpiryDate\u003e\",\"\u003cExpiryyear\u003e\" ,\"\u003cCVVNo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Click Book Now Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Verify Book Confirmation Page and Order Id is Display",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Location",
        "Hotels",
        "RoomType",
        "NumberofRoom",
        "CheckinDate",
        "CheckOutDate",
        "AdultPerRoom",
        "ChildPerRoom",
        "FirstName",
        "LastName",
        "BuildAddress",
        "CCNo",
        "CCType",
        "ExpiryDate",
        "Expiryyear",
        "CVVNo"
      ]
    },
    {
      "cells": [
        "KarthikeyanTest",
        "9ROZ5N",
        "Sydney",
        "Hotel Sunshine",
        "Standard",
        "2 - Two",
        "17/03/2022",
        "18/03/2022",
        "2 - Two",
        "0 - None",
        "kar",
        "key",
        "21/27 pappanna",
        "1234567890246891",
        "VISA",
        "November",
        "2022",
        "420"
      ]
    },
    {
      "cells": [
        "KarthikeyanTest",
        "9ROZ5N",
        "Melbourne",
        "Hotel Hervey",
        "Double",
        "1 - One",
        "18/03/2022",
        "18/03/2022",
        "2 - Two",
        "0 - None",
        "siva",
        "kumar",
        "cbe",
        "2345678912348904",
        "VISA",
        "November",
        "2022",
        "411"
      ]
    },
    {
      "cells": [
        "KarthikeyanTest",
        "9ROZ5N",
        "London",
        "Hotel Cornice",
        "Standard",
        "2 - Two",
        "18/03/2022",
        "19/03/2022",
        "1 - One",
        "1 - One",
        "kumar",
        "muthu",
        "salem",
        "3478901209564367",
        "VISA",
        "November",
        "2022",
        "429"
      ]
    },
    {
      "cells": [
        "KarthikeyanTest",
        "9ROZ5N",
        "Los Angeles",
        "Hotel Creek",
        "Double",
        "4 - Four",
        "18/03/2022",
        "18/03/2022",
        "1 - One",
        "0 - None",
        "rr",
        "karthi",
        "trichy",
        "0986723561037256",
        "VISA",
        "November",
        "2022",
        "320"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Launch Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.user_Launch_Adactin_Web_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Adactin Login Page is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Adactin_Login_Page_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_ADA_02\tValidation of Adactin Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Enter the Valid \"KarthikeyanTest\", \"9ROZ5N\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter_the_Valid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Search Hotel Page is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Search_Hotel_Page_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Valid \"Sydney\",\"Hotel Sunshine\",\"Standard\",\"2 - Two\",\"17/03/2022\",\"18/03/2022\",\"2 - Two\",\"0 - None\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter_Valid(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_the_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Select Hotel Page is Dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Select_Hotel_Page_is_Dispaly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Radio Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_Radio_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Continue Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Book A Hotel Page is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Book_A_Hotel_Page_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter \"kar\",\"key\", \"21/27 pappanna\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter valid \"1234567890246891\",\"VISA\",\"November\",\"2022\" ,\"420\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter_valid(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Book Now Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_Book_Now_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Book Confirmation Page and Order Id is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Book_Confirmation_Page_and_Order_Id_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Launch Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.user_Launch_Adactin_Web_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Adactin Login Page is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Adactin_Login_Page_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_ADA_02\tValidation of Adactin Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Enter the Valid \"KarthikeyanTest\", \"9ROZ5N\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter_the_Valid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Search Hotel Page is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Search_Hotel_Page_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Valid \"Melbourne\",\"Hotel Hervey\",\"Double\",\"1 - One\",\"18/03/2022\",\"18/03/2022\",\"2 - Two\",\"0 - None\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter_Valid(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_the_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Select Hotel Page is Dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Select_Hotel_Page_is_Dispaly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Radio Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_Radio_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Continue Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Book A Hotel Page is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Book_A_Hotel_Page_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter \"siva\",\"kumar\", \"cbe\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter valid \"2345678912348904\",\"VISA\",\"November\",\"2022\" ,\"411\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter_valid(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Book Now Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_Book_Now_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Book Confirmation Page and Order Id is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Book_Confirmation_Page_and_Order_Id_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Launch Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.user_Launch_Adactin_Web_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Adactin Login Page is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Adactin_Login_Page_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_ADA_02\tValidation of Adactin Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Enter the Valid \"KarthikeyanTest\", \"9ROZ5N\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter_the_Valid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Search Hotel Page is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Search_Hotel_Page_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Valid \"London\",\"Hotel Cornice\",\"Standard\",\"2 - Two\",\"18/03/2022\",\"19/03/2022\",\"1 - One\",\"1 - One\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter_Valid(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_the_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Select Hotel Page is Dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Select_Hotel_Page_is_Dispaly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Radio Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_Radio_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Continue Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Book A Hotel Page is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Book_A_Hotel_Page_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter \"kumar\",\"muthu\", \"salem\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter valid \"3478901209564367\",\"VISA\",\"November\",\"2022\" ,\"429\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter_valid(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Book Now Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_Book_Now_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Book Confirmation Page and Order Id is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Book_Confirmation_Page_and_Order_Id_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Launch Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionClass.user_Launch_Adactin_Web_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Adactin Login Page is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Adactin_Login_Page_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_ADA_02\tValidation of Adactin Hotel Booking",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Enter the Valid \"KarthikeyanTest\", \"9ROZ5N\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter_the_Valid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Search Hotel Page is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Search_Hotel_Page_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Valid \"Los Angeles\",\"Hotel Creek\",\"Double\",\"4 - Four\",\"18/03/2022\",\"18/03/2022\",\"1 - One\",\"0 - None\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter_Valid(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_the_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Select Hotel Page is Dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Select_Hotel_Page_is_Dispaly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Radio Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_Radio_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Continue Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Book A Hotel Page is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Book_A_Hotel_Page_is_Display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter \"rr\",\"karthi\", \"trichy\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter valid \"0986723561037256\",\"VISA\",\"November\",\"2022\" ,\"320\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionClass.user_Enter_valid(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Book Now Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionClass.user_Click_Book_Now_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify Book Confirmation Page and Order Id is Display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionClass.user_Verify_Book_Confirmation_Page_and_Order_Id_is_Display()"
});
formatter.result({
  "status": "passed"
});
});