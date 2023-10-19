$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/01_Registration.feature");
formatter.feature({
  "name": "User Registration Test Scenario",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigated to signup url \"http://localhost:9090/FlyAway/signup\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.RegistrationStepDef.user_navigated_to_signup_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfull Registration",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter required details as following below",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.RegistrationStepDef.user_enter_required_details_as_following_below(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.RegistrationStepDef.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate user registration is successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.RegistrationStepDef.validate_user_registration_is_successfull()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigated to signup url \"http://localhost:9090/FlyAway/signup\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.RegistrationStepDef.user_navigated_to_signup_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Registration with existing email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter existing email for registration and other following requried details",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.RegistrationStepDef.user_enter_existing_email_for_registration_and_other_following_requried_details(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.RegistrationStepDef.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate user should see error message as \"This email id already exists.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.RegistrationStepDef.validate_user_should_see_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigated to signup url \"http://localhost:9090/FlyAway/signup\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.RegistrationStepDef.user_navigated_to_signup_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Registratoin with missing information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter the registration form with missing details as below",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.RegistrationStepDef.user_enter_the_registration_form_with_missing_details_as_below(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.RegistrationStepDef.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message for missing field as \"Name is required.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.RegistrationStepDef.user_should_see_error_message_for_missing_field_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigated to signup url \"http://localhost:9090/FlyAway/signup\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.RegistrationStepDef.user_navigated_to_signup_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Registration with different passwords",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter the registratoinform with different passwords",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.RegistrationStepDef.user_enter_the_registratoinform_with_different_passwords(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.RegistrationStepDef.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error message as \"Error , Passwords do not match.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.RegistrationStepDef.user_should_see_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/02_Login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Successful Login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on login page \"http://localhost:9090/FlyAway/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_is_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter username as \"user01@user01.com\" and passwrod as \"user01\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_enter_username_as_and_passwrod_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be successful logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.user_should_be_successful_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with incorrect Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on login page \"http://localhost:9090/FlyAway/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_is_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter username as \"user01@user02.com\" and passwrod as \"user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_enter_username_as_and_passwrod_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.user_should_be_see_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with empty fields",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on login page \"http://localhost:9090/FlyAway/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_is_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter username as \" \" and passwrod as \" \"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_enter_username_as_and_passwrod_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.user_should_be_see_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on login page \"http://localhost:9090/FlyAway/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_is_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter username as \"user01@user01.com\" and passwrod as \"user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_enter_username_as_and_passwrod_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.user_should_be_see_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/03_FlightBooking.feature");
formatter.feature({
  "name": "Flight Booking",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on login page \"http://localhost:9090/FlyAway/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_is_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter username as \"user01@user01.com\" and passwrod as \"user01\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_enter_username_as_and_passwrod_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be successful logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.user_should_be_successful_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for available flights",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on  the flight booking page \"http://localhost:9090/FlyAway/home\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.FlightBookingStepDef.the_user_is_on_the_flight_booking_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the departure as \"Bangalore\" and destination as \"Hyderabad\" cities",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.FlightBookingStepDef.user_enter_the_departure_as_and_destination_as_cities(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.FlightBookingStepDef.the_user_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see a list of available flights",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.FlightBookingStepDef.user_should_see_a_list_of_available_flights()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on login page \"http://localhost:9090/FlyAway/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_is_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter username as \"user01@user01.com\" and passwrod as \"user01\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_enter_username_as_and_passwrod_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be successful logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.user_should_be_successful_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Select and book flight",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on  the flight booking page \"http://localhost:9090/FlyAway/home\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.FlightBookingStepDef.the_user_is_on_the_flight_booking_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the departure as \"Bangalore\" and destination as \"Hyderabad\" cities",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.FlightBookingStepDef.user_enter_the_departure_as_and_destination_as_cities(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.FlightBookingStepDef.the_user_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on book flight button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.FlightBookingStepDef.the_user_click_on_book_flight_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigated to confirm booking details page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.FlightBookingStepDef.user_should_navigated_to_confirm_booking_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on login page \"http://localhost:9090/FlyAway/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_is_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter username as \"user01@user01.com\" and passwrod as \"user01\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_enter_username_as_and_passwrod_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be successful logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.user_should_be_successful_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "complete flight booking",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on  the flight booking page \"http://localhost:9090/FlyAway/home\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.FlightBookingStepDef.the_user_is_on_the_flight_booking_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the departure as \"Bangalore\" and destination as \"Hyderabad\" cities",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.FlightBookingStepDef.user_enter_the_departure_as_and_destination_as_cities(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.FlightBookingStepDef.the_user_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on book flight button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.FlightBookingStepDef.the_user_click_on_book_flight_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on complete flight booking button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.FlightBookingStepDef.the_user_click_on_complete_flight_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigated to complete purchase page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.FlightBookingStepDef.user_should_navigated_to_complete_purchase_page()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/04_EditProfile.feature");
formatter.feature({
  "name": "Edit profile functinality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on login page \"http://localhost:9090/FlyAway/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_is_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter username as \"user01@user01.com\" and passwrod as \"user01\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_enter_username_as_and_passwrod_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be successful logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.user_should_be_successful_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "update with invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user is on edit profile page \"http://localhost:9090/FlyAway/editprofile\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.EditProfileStepDef.user_is_on_edit_profile_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as \"test\" and confirm password as \"test2\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.EditProfileStepDef.user_enter_password_as_and_confirm_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on update button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.EditProfileStepDef.click_on_update_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see an error message as \"Error , Passwords do not match.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.EditProfileStepDef.user_should_see_an_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on login page \"http://localhost:9090/FlyAway/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_is_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter username as \"user01@user01.com\" and passwrod as \"user01\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.the_user_enter_username_as_and_passwrod_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be successful logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LoginStepDef.user_should_be_successful_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "update valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user is on edit profile page \"http://localhost:9090/FlyAway/editprofile\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.EditProfileStepDef.user_is_on_edit_profile_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password as \"test\" and confirm password as \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.EditProfileStepDef.user_enter_password_as_and_confirm_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on update button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.EditProfileStepDef.click_on_update_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigated to bashboard page \"http://localhost:9090/FlyAway/dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.EditProfileStepDef.user_should_navigated_to_bashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/05_ReloginwithUpdatedPwd.feature");
formatter.feature({
  "name": "re-login with updated password",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "relogin with updated password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page \"http://localhost:9090/FlyAway/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.ReLoginwithUpdatedPwd_StepDef.user_is_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username as \"user01@user01.com\" and password as \"test\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.ReLoginwithUpdatedPwd_StepDef.user_enter_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login btn",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.ReLoginwithUpdatedPwd_StepDef.click_on_login_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigated to dashboard page \"http://localhost:9090/FlyAway/dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.ReLoginwithUpdatedPwd_StepDef.user_should_navigated_to_dashboard_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});