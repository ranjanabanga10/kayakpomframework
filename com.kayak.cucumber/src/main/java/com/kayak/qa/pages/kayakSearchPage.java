package com.kayak.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.kayak.qa.util.TestBase;

public class kayakSearchPage extends TestBase {
	
	// Page Factory -- OR:
	//@FindBy(xpath="//div[@id='GLT4-origin-airport-textInputWrapper']//input[@id='GLT4-origin-airport']");
	
	@FindBy(xpath="//a[@id='IlVD']")
	static
	WebElement flights;
	
	@FindBy(xpath="//div[@id='Ti_Y-origin-airport-display-multi-container']//button[@class='Button-No-Standard-Style js-remove-selection _iae _h-Y']//*[local-name()='svg']")
	static
	WebElement crossSign;
	
	@FindBy(xpath="//input[@id='Ti_Y-origin-airport']")
	static
	WebElement origin;
	
	@FindBy(xpath="//div[@id='Ti_Y-destination-airport-display-multi-container']//button[@class='Button-No-Standard-Style js-remove-selection _iae _h-Y']")
	static
	WebElement crossSign1;
	
	@FindBy(xpath="//input[@id='Ti_Y-destination-airport']")
	static
	WebElement destination;
	
	@FindBy(xpath="//div[@id='Ti_Y-dateRangeInput-display-start-inner']")
	static
	WebElement DepartureDate;
	
	@FindBy(xpath="//div[@id='AaOH-dateRangeInput-display-end-inner']")
	static
	WebElement ArrivalDate;
	
	@FindBy(xpath="/button[@id='Ti_Y-submit']")
	static
	WebElement search;
	
	//Initializing the Page Objects:
	public kayakSearchPage() {
		PageFactory.initElements(driver, this);
	}
	
	//Actions
	public String validateLoginPageTitle() {
		return driver.getTitle();
	}
	public void clickFlight() {
		flights.click();
	}
	public void crossSign() {
		crossSign.click();
	}
	public void searchinfo(String Origin_City, String Destination, String Deapature_Date, String Return_Date) {
//		clickFlight();
//		crossSign();
		origin.sendKeys(Origin_City);
		crossSign1.click();
		destination.sendKeys(Destination);
		DepartureDate.sendKeys(Deapature_Date);
		ArrivalDate.sendKeys(Return_Date);
		//search.click();
		
		
	}
//	public static void searchDate(String Deapature_Date, String Return_Date) {
//		DepartureDate.sendKeys(Deapature_Date);
//		ArrivalDate.sendKeys(Return_Date);
//	}
	public static SearchPage clickSearch() {
		search.click();
		return new SearchPage();
	}
	
}
