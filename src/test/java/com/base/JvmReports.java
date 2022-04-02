package com.base;


import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReports {
	
	public static void generateJvmReport(String jsonFile) {
		File f=new File(System.getProperty("user.dir")+"\\src\\test\\resources\\Report");
		
		Configuration config=new Configuration(f, "AdactinBooking");
		
		config.addClassifications("platForm Name", "windows");
		config.addClassifications("platForm Name", "7");
		config.addClassifications("sprintNumber", "14");
		config.addClassifications("buildNumber", "28965570");
		
	
		List<String> li=new ArrayList<String>();
		li.add(jsonFile);
		
		
		
		ReportBuilder bulider=new ReportBuilder(li, config);
		bulider.generateReports();

	}

}
