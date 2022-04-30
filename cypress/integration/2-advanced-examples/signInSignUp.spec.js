describe("Signup and SignIn", () => {
  cy.request("POST", "http://localhost:4000/resetDatabase").as("resetDatabase");
  cy.wait("@resetDatabase");

  it("should signup and login successfully", () => {
    cy.visit("http://localhost:4000/signup");

    cy.intercept("POST", "/signup").as("signUp");

    cy.get("#email").type("usuario@email.com");
    cy.get("#password").type("senha_super_secreta");
    cy.get("#passwordConfirm").type("senha_super_secreta");
    cy.contains("Cadastrar").click();

    cy.wait("signUp");

    cy.url().should("equal", "http://localhost:3000/");

    cy.visit("http://localhost:4000/");

    cy.get("#email").type("usuario@email.com");
    cy.get("#password").type("senha_super_secreta");

    cy.url().should("equal", "http://localhost:3000/home");
  });
});
