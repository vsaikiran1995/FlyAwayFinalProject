@smoke
Feature: Login Functionality

  Scenario: Successful Login
    Given the user is on login page "http://localhost:9090/FlyAway/login"
    When the user enter username as "user01@user01.com" and passwrod as "user01"
    And click on login button
    Then user should be successful logged in

  Scenario: Login with incorrect Credentials
    Given the user is on login page "http://localhost:9090/FlyAway/login"
    When the user enter username as "user01@user02.com" and passwrod as "user"
    And click on login button
    Then user should be see error message

  Scenario: Login with empty fields
    Given the user is on login page "http://localhost:9090/FlyAway/login"
    When the user enter username as " " and passwrod as " "
    And click on login button
    Then user should be see error message

  Scenario: Login with valid username and invalid password
    Given the user is on login page "http://localhost:9090/FlyAway/login"
    When the user enter username as "user01@user01.com" and passwrod as "user"
    And click on login button
    Then user should be see error message
