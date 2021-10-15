/// <reference types="cypress" />

describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the app", () => {
    cy.get("main").should("contain", "Please fill");
  });

  it("validation errors", () => {
    cy.get("[data-cy=submit]").click();

    cy.get("[data-cy=title-error]").should("contain", "Field is required");
    cy.get("[data-cy=firstName-error]").should("contain", "Field is required");
    cy.get("[data-cy=lastName-error]").should("contain", "Field is required");
    cy.get("[data-cy=email-error]").should("contain", "Field is required");
    cy.get("[data-cy=insuranceNumber-error]").should(
      "contain",
      "Field is required"
    );
    cy.get("[data-cy=nation-error]").should("contain", "Field is required");
  });

  it("sucessful submit", () => {
    cy.get("[data-cy=title]").select("Dr.");

    cy.get("[data-cy=firstName]").type("John");
    cy.get("[data-cy=middleName]").type("K");
    cy.get("[data-cy=lastName]").type("Smith");

    cy.get("[data-cy=email]").type("john.smith@k.de");
    cy.get("[data-cy=confirmEmail]").type("john.smith@k.de");

    cy.get("[data-cy=insuranceNumber]").type("as123456s");

    cy.get("[data-cy=nation]").select("de");

    cy.get("[data-cy=submit]").click();

    cy.wait(200);

    cy.get("main").should("contain", "This is");
  });
});
