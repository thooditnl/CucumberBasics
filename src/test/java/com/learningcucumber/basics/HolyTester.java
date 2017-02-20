package com.learningcucumber.basics;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;
import org.apache.log4j.Logger;

import java.util.List;
import java.util.Map;


/**
 * Created by THOODI on 12/16/2016.
 */
public class HolyTester {
     Logger logger = Logger.getLogger(getClass());
    //  PropertyConfigurator.configure("log4j.properties");
   // [Given]

    @Given("^I am a \"(.*)\" Tester$")
    public void i_am_a_bad_tester(String testertype, DataTable table){
        List<Map<String,String>> data=table.asMaps(String.class,String.class);
        logger.debug("@Given -- I am a "+testertype+" Tester in " + data.get(0).get("industry") + " industry in country " + data.get(0).get("country"));
        logger.debug("@Given -- I am a "+testertype+" Tester in " + data.get(1).get("industry") + " industry in country " + data.get(1).get("country"));
        logger.debug("****************************");
   //     System.out.println("@Given -- I am a "+testertype+" Tester");
    }
   @When("^I go to work$")
    public void i_go_to_work(){
       logger.debug("@When -- I go to work");
      }
    @Then("^I \"(.*)\" it$")
    public void i_mess_it(String workOutput){
        logger.debug("@Then -- I "+workOutput+" it");
      }
    @And("^My boss \"(.*)\" me$")
    public void my_boss_fire_me(String boss, DataTable table){
        //Write the code to handle Data Table
        //List<List<String>> data = table.raw();
        //This is to get the first data of the set (First Row + Second Column)
        List<Map<String,String>> data=table.asMaps(String.class,String.class);
        logger.debug("@And -- My boss in country "+data.get(0).get("country")+" "+boss+" me");
        logger.debug("@And -- My boss in country "+data.get(0).get("country")+" "+boss+" me");
      }
   // @But("^The developer \"([a-zA-Z]{1,})\" me$")
    @But("^The developer \"(.*)\" me$")
    public void the_developer_likes_me(String dev ){
        logger.debug("@But -- The developer "+dev+" me");
    }
}
