@smoke
Feature: User Registration Test Scenario

  Background: 
    Given user navigated to signup url "http://localhost:9090/FlyAway/signup"
  
  Scenario: Successfull Registration
    When user enter required details as following below
      | email_id        | password | confirm_pwd | name   | address | city   |
      | user01@user01.com | user01   | user01      | user01 | user01  | user01 |
    And user click on submit button
    Then validate user registration is successfull

  Scenario: Registration with existing email
    When user enter existing email for registration and other following requried details
      | email_id        | password | confirm_pwd | name   | address | city   |
      | user01@user01.com | user01   | user01      | user01 | user01  | user01 |
    And user click on submit button
    Then validate user should see error message as "This email id already exists."

  Scenario: Registratoin with missing information 
    When user enter the registration form with missing details as below
      | email_id        | password | confirm_pwd | name | address | city   |
      | user02@user02.com | user02   | user02      |      | user02  | user02 |
    And user click on submit button
    Then user should see error message for missing field as "Name is required."

  Scenario: Registration with different passwords
    When user enter the registratoinform with different passwords
      | email_id        | password | confirm_pwd | name   | address | city   |
      | user01@user01.com | user02   | user03      | user02 | user02  | user02 |
    And user click on submit button
    Then user should see error message as "Error , Passwords do not match."
