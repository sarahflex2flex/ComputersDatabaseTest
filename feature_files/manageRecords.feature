Feature: Manage database records
    As a user
    I should be able to manage records
    So that the database stays up to date

    Scenario: Create a new record
        Given I am on the computer database site
        When I create a new computer name
        Then the new computer name is shown in the overview

    Scenario: Edit a existing record
    	Given I am on the computer database site
    	When I open a computer record
    	Then the record can be edited

    Scenario: Delete a record
    	Given I am on the computer database site
    	When I delete a computer record
    	Then the record is removed from the database
