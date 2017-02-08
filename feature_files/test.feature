Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: Create a new computer name
        Given I go to the computers database site
        When I create a new computer name
        #Then the new computer name is shown in the overview
