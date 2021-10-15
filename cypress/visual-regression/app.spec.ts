/// <reference types="cypress"/>

describe("Visual test", () => {
  it("should render page correctly", () => {
    cy.visit("/");
    cy.wait(100);
    cy.snapshot("aboutme");
  });
});
