package demo;

import com.intuit.karate.testng.KarateRunner;
import cucumber.api.CucumberOptions;



@CucumberOptions(features = "classpath:demo/demo.feature",format={"pretty","html:reports","json:report.json"})

public class DemoTestNGRunner extends KarateRunner {

}
