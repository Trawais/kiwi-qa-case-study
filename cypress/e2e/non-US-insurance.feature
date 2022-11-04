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

  Scenario: 'Travel Plus' insurance can be added via Comparision pop-up window
    When I select "Czech Republic" nationality
    When I open Comparision and terms pop-up window
    When I add Travel Plus insurance
    Then I can see text "Travel Plus successfully added"

  @skip
  Scenario: 'Travel Basic' insurance can be added via Comparision pop-up window
    When I select "Czech Republic" nationality
    When I open Comparision and terms pop-up window
    When I add Travel Basic insurance
    Then I can see text "Travel Basic successfully added"

  @skip
  Scenario: No insurance is added when Comparision pop-up window is opened and closed
    When I select "Czech Republic" nationality
    When I open Comparision and terms pop-up window
    When I close Comparison and terms pop-up window
    Then I can see no insurance is added

  Scenario: Insurance is properly reflected on next page calculation
    When I select "Czech Republic" nationality
    When I fill in customer data
    When I click Travel Basic insurance
    When I continue to Ticket fare page
    Then I see insurance is reflected in the price calculation
