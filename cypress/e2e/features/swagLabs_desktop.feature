Feature: Buy product at saucedemo.com on desktop
    As a user of saucedemo.com
    I enter saucedemo.com
    To buy a product

    Background: Login to page saucedemo
        Given That the user enters the the saucelabs login page site on desktop

    @Successful_Purchase
    Scenario Outline: Validate successful purchase of a product
        When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        And Buy a product
            | product   | firstname   | lastname   | postalCode   |
            | <product> | <firstname> | <lastname> | <postalCode> |
        Then Verify that the purchase successful "Thank you for your order!"
        Examples:
            | product                                   | firstname | lastname  | postalCode |
            | sauce-labs-backpack,sauce-labs-bike-light | Cristian  | Hernandez | 55450      |


    @YourInformationFormMandatoryFields
    Scenario Outline: Validate missing mandatory fields
        When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        And I enter checkout product
            | product |
            | <product> |
        And I enter the firstName, lastName and postalCode "<firstName>" , "<lastName>", "<postalCode>" and to continue
        Then I should see the error message "<errorMessage>"
        Examples:
            | product                                   | firstName | lastName | postalCode | errorMessage                   |
            | sauce-labs-backpack,sauce-labs-bike-light |           | Doe      | 12345      | Error: First Name is required  |
            | sauce-labs-backpack,sauce-labs-bike-light | John      |          | 12345      | Error: Last Name is required   |
            | sauce-labs-backpack,sauce-labs-bike-light | John      | Doe      |            | Error: Postal Code is required |


    @LoginWithIncorrectCredentials
    Scenario Outline: Validate Incorrect Login        
        When A user provides incorrect credentials, and clicks on the login button
            | username   | password   |
            | <username> | <password> |
        Then The error message "<errorMessage>" is displayed
        Examples:
            | username        | password     | errorMessage                                                              |
            | testName        | secret_sauce | Epic sadface: Username and password do not match any user in this service |
            | standard_user   | testPassword | Epic sadface: Username and password do not match any user in this service |
            | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |         