@smoke
Feature: Flight Booking

  Background: 
    Given the user is on login page "http://localhost:9090/FlyAway/login"
    When the user enter username as "user01@user01.com" and passwrod as "user01"
    And click on login button
    Then user should be successful logged in

  
  Scenario: Search for available flights
    Given the user is on  the flight booking page "http://localhost:9090/FlyAway/home"
    When user enter the departure as "Bangalore" and destination as "Hyderabad" cities
    And the user click on search button
    Then user should see a list of available flights

  
  Scenario: Select and book flight
    Given the user is on  the flight booking page "http://localhost:9090/FlyAway/home"
    When user enter the departure as "Bangalore" and destination as "Hyderabad" cities
    And the user click on search button
    And the user click on book flight button
    Then user should navigated to confirm booking details page

  
  Scenario: complete flight booking
    Given the user is on  the flight booking page "http://localhost:9090/FlyAway/home"
    When user enter the departure as "Bangalore" and destination as "Hyderabad" cities
    And the user click on search button
    And the user click on book flight button
    And the user click on complete flight booking button
    Then user should navigated to complete purchase page
