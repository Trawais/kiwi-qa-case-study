Feature: US nationality insurance has limited options for insurance

  Background:
    Given I open Booking page
    Given I accept cookies

  @skip
  Scenario: can select 'Travel Plus'
    When I select "United States" nationality
    When I click Travel Plus insurance
    Then I can see text "Travel Plus successfully added"

  @skip
  Scenario: can select 'No insurance'
    When I select "United States" nationality
    When I click No insurance
    Then I am still able to continue with the booking

  Scenario: can not select 'Travel Basic'
    When I select "United States" nationality
    Then I can not select Travel Plus insurance

  @skip
  Scenario: Travel Basic insurance is removed from calculation when US nationality is selected
    When I click Travel Basic insurance
    When I select "United States" nationality
    Then I "Travel Basic" insurance is no more presented in the calculation
