package StepDefination;

import com.kayak.qa.util.TestBase;



import com.kayak.qa.pages.*;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class kayakStepDefination extends TestBase{
	kayakSearchPage ksp;
	
	@Given("^Go to kayak\\.com$")
	public void go_to_kayak_com() {
		TestBase.initialization();
	}

	@When("^User clicked on Flight Menu$")
	public void user_clicked_on_Flight_Menu() {
		ksp=new kayakSearchPage();
		ksp.clickFlight();
	}

	@And("^User click on cross sign$")
	public void user_click_on_cross_sign(){
		ksp=new kayakSearchPage();
		ksp.crossSign();
	}
	@Then("^User enter \"([^\"]*)\", \"([^\"]*)\" , \"([^\"]*)\", \"([^\"]*)\"$")
	public void user_enter(String Origin_City, String Destination_City, String Deapature_Date, String Return_Date){
		ksp=new kayakSearchPage();
		
		ksp.searchinfo(Origin_City, Destination_City, Deapature_Date, Return_Date);
		

	   
	}

	@And("^User click search buton$")
	public void user_click_search_buton(){
		kayakSearchPage.clickSearch();
	}

	@Then("^validate the search details same as first page$")
	public static void validate_the_search_details_same_as_first_page(){
		System.out.println(SearchPage.verifyOrigin());
		System.out.println(SearchPage.verifyDestination());
		
		
		
	
	}

	@Then("^close the browser$")
	public void close_the_browser() {
		 driver.quit();
	}

}
