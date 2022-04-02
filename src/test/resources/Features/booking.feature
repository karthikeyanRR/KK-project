	Feature: Validation of Adactin Hotel Web Page
	
	Background:
	   Given User Launch Adactin Web Application
	   Then User Verify Adactin Login Page is Display
	
		Scenario:: TC_ADA_01 Validation of Adactin Hotel Booking 
		When User Enter the Valid Username and Password
		And User Click the Login Button
		Then User Verify Search Hotel Page is Display
		When User Enter Valid Location,Hotels,Room Type,Number of Room,Check in Date,Check Out Date,Adult Per Room and Child Per Room
		And User Click the Search Button
		Then User Verify Select Hotel Page is Dispaly
		And User Click Radio Button
		And User Click Continue Button
		Then User Verify Book A Hotel Page is Display
		When User Enter First Name,Last Name, Build Address
		When User Enter Valid Cerdit Card No,Cerdit Card Type,Expiry No and CVV No
		And User Click Book Now Button
		Then User Verify Book Confirmation Page and Order Id is Display
		
		
		Scenario Outline: TC_ADA_02	Validation of Adactin Hotel Booking
		When User Enter the Valid "<Username>", "<Password>"
		And User Click the Login Button
		Then User Verify Search Hotel Page is Display
		When User Enter Valid "<Location>","<Hotels>","<RoomType>","<NumberofRoom>","<CheckinDate>","<CheckOutDate>","<AdultPerRoom>","<ChildPerRoom>"
		And User Click the Search Button
		Then User Verify Select Hotel Page is Dispaly
		And User Click Radio Button
		And User Click Continue Button
		Then User Verify Book A Hotel Page is Display
		When User Enter "<FirstName>","<LastName>", "<BuildAddress>"
		When User Enter valid "<CCNo>","<CCType>","<ExpiryDate>","<Expiryyear>" ,"<CVVNo>"
		And User Click Book Now Button
		Then User Verify Book Confirmation Page and Order Id is Display	
		
		Examples:
				|Username|Password|Location|Hotels|RoomType|NumberofRoom|CheckinDate|CheckOutDate|AdultPerRoom|ChildPerRoom|FirstName|LastName|BuildAddress|CCNo|CCType|ExpiryDate|Expiryyear|CVVNo|
				
				|KarthikeyanTest|9ROZ5N|Sydney		|Hotel Sunshine	|Standard	|2 - Two|17/03/2022|18/03/2022|2 - Two|0 - None|kar	|key	|21/27 pappanna	|1234567890246891|VISA	|November|2022|420|
				|KarthikeyanTest|9ROZ5N|Melbourne|Hotel Hervey		|Double		|1 - One|18/03/2022|18/03/2022|2 - Two|0 - None|siva|kumar|cbe						|2345678912348904|VISA	|November|2022|411|
				|KarthikeyanTest|9ROZ5N|London|Hotel Cornice|Standard|2 - Two|18/03/2022|19/03/2022|1 - One|1 - One|kumar|muthu|salem|3478901209564367|VISA|November|2022|429|
			|KarthikeyanTest|9ROZ5N|Los Angeles|Hotel Creek|Double|4 - Four|18/03/2022|18/03/2022|1 - One|0 - None|rr|karthi|trichy|0986723561037256|VISA|November|2022|320|
				