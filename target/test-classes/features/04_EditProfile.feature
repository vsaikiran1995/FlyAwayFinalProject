@smoke
Feature: Edit profile functinality

  Background: 
    Given the user is on login page "http://localhost:9090/FlyAway/login"
    When the user enter username as "user01@user01.com" and passwrod as "user01"
    And click on login button
    Then user should be successful logged in

  
  Scenario: update with invalid password
    Given user is on edit profile page "http://localhost:9090/FlyAway/editprofile"
    When user enter password as "test" and confirm password as "test2"
    And click on update button
    Then user should see an error message as "Error , Passwords do not match."

  
  Scenario: update valid password
    Given user is on edit profile page "http://localhost:9090/FlyAway/editprofile"
    When user enter password as "test" and confirm password as "test"
    And click on update button
    Then user should navigated to bashboard page "http://localhost:9090/FlyAway/dashboard"
    
    
