Feature: non-US nationality Insurance

  Background:
    Given I open Booking page
    Given I accept cookies

  Scenario: can select 'Travel Plus'
    When I select "Czech Republic" nationality
    When I click Travel Plus insurance
    Then I can see text "Travel Plus successfully added"

  Scenario: can select 'Travel Basic'
    When I select "Czech Republic" nationality
    When I click Travel Basic insurance
    Then I can see text "Travel Basic successfully added"

  @skip
  Scenario: can select 'No insurance'
    When I select "Czech Republic" nationality
    When I click No insurance
    Then I am still able to continue with the booking
