package com.learningcucumber.basics;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by THOODI on 12/16/2016.
 */

// This is a runner Class
@RunWith(Cucumber.class)
@CucumberOptions(
        /*plugin = { "html:target/cucumber-html-report",
                "json:target/cucumber.json", "pretty:target/cucumber-pretty.txt",
                "usage:target/cucumber-usage.json", "junit:target/cucumber-results.xml" },
      */
        monochrome = true,
        dryRun = true,
        format = {"pretty","html:target/reports"},
        features = "src/test/resources", //Used to give the feature file you want to test.
        glue = {"com.learningcucumber.basics"} //Used to give the steps defination path of the file
        //tags = "@goodtester,@javadeveloper",  //Used to run a particular scenario. Because we mentioned each scenario with tags.
        // plugin = "html:target/Cucumber-reports",
        // strict = true
)
//System.getProperty("user.dir")+ "\\ ......configuration.properties";
public class TestRunner {

}
