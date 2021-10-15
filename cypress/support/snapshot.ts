export const snapshot = (name: string): void => {
  cy.compareSnapshot(name, 0.06);
};

Cypress.Commands.add("snapshot", snapshot);
