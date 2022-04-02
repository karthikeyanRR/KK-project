package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.base.JvmReports;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features", glue="com.stepdefinition", dryRun=false, plugin= {"pretty","junit:src\\test\\resources\\Report\\ada.xml", 
"html:src\\test\\resources\\Report", "json:src\\test\\resources\\Report\\ada.json"}, monochrome=true)
public class TestRunner {

	@AfterClass
	public static void AfterClass() {
		JvmReports.generateJvmReport(System.getProperty("user.dir") + "\\src\\test\\resources\\Report\\ada.json");
	}	
	
}
