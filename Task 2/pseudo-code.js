describe("Kiwi page check - desktop", () => {
  before(() => { // This runs only once for all it() test blocks down there
    cy.visit("https://kiwi.com/en/")
    cy.log("Accept cookies") // You can probably use some better logical abstraction, so such commands are not necessary to do
    cy.contains("Accept").click() // I would not rely on visible text for the customer; it's valid only for one localization
  })
  // I would use beforeEach if I want to define some common steps for all tests.
  // This seems to me like there is dependency between these two tests down there.
  // That is I believe anti-pattern. The single test should always be possible to launch separetely.
  // If you really want to have (or must have) your tets organazied like that with the dependencies,
  // I believe it could be achieved with 'mocha-steps' library - the second is not then launched when the first one fails.

  it("should check filters", () => {
    cy.get("[data-test=FilterA]").as("modeFilter") // The defined alias is used only once. I would not define it. It makes no sense to me.
    cy.get("@modeFilter").click()
    cy.get("[data-test=FilterB]").as("baggageFilter")
    cy.get("@baggageFilter").should("exist").click() // Same here with the unnecessary usage of alias
    // Plus the 'should("exist")' is redundant here. It's build-in assertion of get() method already."
    cy.contains("Search").click() // Ending test with 'click()' and no other assertions looks little bit strange to me for the first sight.
  })

  it("should be redirected to search/results page", () => {
    cy.get("[data-test=FlightResults]").should("exist") // Again redundant 'should("exist")'; I do not why but I would specify at least element what I expect to be matched.
      .should("be.visible")
    cy.log("Book button should be on the page") // This shows me again some better abstraction of test logic should be used when you have need for such explicit logging.
    cy.contains("Book") // I'm not sure if this is sufficient assertion for presence of the Book button. The world "Book" can be found anywhere else on the page.
  })
})
