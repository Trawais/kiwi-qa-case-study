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

When('I open Comparision and terms pop-up window', () => {
  cy.get('a[data-test="ReservationPassengerInsurance-head-infoButton"]').click();
});

When('I add Travel Plus insurance', () => {
  cy.get('div.CommonInsurance button[data-test="plus-modalButton"]').first().click();
});

When('I fill in customer data', () => {
  cy.fixture("customer").then((customer) => {
    cy.get('input[name="firstname"').type(customer.firstName);
    cy.get('input[name="lastname"').type(customer.surName);
    cy.get('select[name="title"]').select(customer.gender);
    cy.get('input[data-testid="day"]').type(customer.birthDay);
    cy.get('select[data-testid="month"]').select(customer.birthMonth);
    cy.get('input[data-testid="year"]').type(customer.birthYear);
    cy.get('input[name="email"]').type(customer.email);
    cy.get('input[data-test="contact-phone"]').type(customer.phone);
    // Select some baggage option - it's not relevant for this test
    cy.get('div[data-test="Baggage-Option-0"]').click();
    cy.get('input[data-test="Baggage-NoBagsToCheckIn"]').click({ force: true });
  })
});

When('I continue to Ticket fare page', () => {
  cy.get('button[data-test="StepControls-passengers-next"]').click();
});


Then('I can see text {string}', (text: string) => {
  cy.contains(text);
});

Then('I can not select Travel Plus insurance', () => {
  cy.get('input[value="basic"]').should('not.exist');
});

Then('I see insurance is reflected in the price calculation', () => {
  cy.get('div[data-test="bookingBillInsurance"]').contains("Travel insurance");
  // TODO: I know this could be done better with checking also the price for the insurance
});
