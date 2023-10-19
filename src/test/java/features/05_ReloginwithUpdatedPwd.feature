@smoke
Feature: re-login with updated password

  
  Scenario: relogin with updated password
    Given user is on login page "http://localhost:9090/FlyAway/login"
    When user enter username as "user01@user01.com" and password as "test"
    And click on login btn
    Then user should navigated to dashboard page "http://localhost:9090/FlyAway/dashboard"
