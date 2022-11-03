import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open Booking page", () => {
  cy.request('https://api.skypicker.com/flights?partner=cypress&fly_from=VIE&fly_to=ZAG').then(
    (response) => {
      const bookingToken = response.body.data[0].booking_token;
      cy.visit(`https://www.kiwi.com/en/booking?token=${bookingToken}`)
    }
  )
});

Given('I accept cookies', () => {
  cy.get('#cookies_accept').click();
})

When("I select {string} nationality", (nationality: string) => {
  cy.get('select[name="nationality"]').select(nationality);
});

When('I click Travel Plus insurance', () => {
  cy.get('input[value="plus"]').click({ force: true });
});

When('I click Travel Basic insurance', () => {
  cy.get('input[value="basic"]').click({ force: true });
});

Then('I can see text {string}', (text: string) => {
  cy.contains(text);
});
