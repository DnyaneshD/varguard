declare namespace Cypress {
  interface Chainable {
    compareSnapshot(value: string, errorThreshold?: number): null;
    snapshot(name: string): null;
    auth(): null;
  }
}
