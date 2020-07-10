package com.kayak.qa.pages;

import com.kayak.qa.util.TestBase;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class SearchPage extends TestBase {

	@FindBy(xpath="//div[@class='js-selection _iaf _idA _idj _iai _ia4 _iiM _ibc _ia2 _ia- _ia7 _im4 _kaF _iac _idf _idG _iej _ixV _ixW _irF _iVK _ic2 _ibH _igO _kaG _kaH _ia3 _Hl _ia6 _j0 _ibb _jT _jU _ia9 _jZ _jY']//div[@class='js-selection-display _id7 _ii0 _iir _iQe _kaM _ic2 _ic3'][contains(text(),'San Francisco (SFO)')]")
	static
	WebElement origin;
	@FindBy(xpath="//div[@class='js-selection _iaf _idA _idj _iai _ia4 _iiM _ibc _ia2 _ia- _ia7 _im4 _kaF _iac _idf _idG _iej _ixV _ixW _irF _iVK _ic2 _ibH _igO _kaG _kaH _ia3 _Hl _ia6 _j0 _ibb _jT _jU _ia9 _jZ _jY']//div[@class='js-selection-display _id7 _ii0 _iir _iQe _kaM _ic2 _ic3'][contains(text(),'New York (JFK)')]")
	static
	WebElement destination;

	//Initializing the Page Objects:
	public SearchPage() {
		PageFactory.initElements(driver, this);
	}
	//Actions
	public String validateLoginPageTitle() {
		return driver.getTitle();
	}
	public static boolean verifyOrigin() {
		return origin.isDisplayed();
	}
	public static boolean verifyDestination() {
		return destination.isDisplayed();
	}

}
