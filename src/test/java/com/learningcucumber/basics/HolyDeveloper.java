package com.learningcucumber.basics;

import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by THOODI on 12/16/2016.
 */
public class HolyDeveloper {
    @Given("^I work in \"([^\"]*)\"$")
    public void i_work_in(String company){
        System.out.println("******************************");
        System.out.println("I work in " + company);
    }
    @When("^I meet \"([^\"]*)\"$")
    public void i_meet(String person){
        System.out.println("I meet " + person);
    }
    @Then("^I \"([^\"]*)\"$")
    public void i(String reaction) {
        System.out.println("I " + reaction);
    }
    @But("^he is a \"([^\"]*)\" person$")
    public void he_is_a_person(String personality) {
        System.out.println("He is a "+ personality +" person" );
    }
}

