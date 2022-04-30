describe("Signup and SignIn", () => {
  it("should signup and login successfully", () => {
    cy.visit("http://localhost:3000/signup");

    cy.intercept("POST", "/signup").as("signUp");

    cy.get("#email").type("usuario@email.com");
    cy.get("#password").type("senha_super_secreta");
    cy.get("#passwordConfirm").type("senha_super_secreta");
    cy.contains("Confirmar").click();

    cy.wait("@signUp");

    cy.url().should("equal", "http://localhost:3000/");

    cy.visit("http://localhost:3000/");

    cy.get("#email").type("usuario@email.com");
    cy.get("#password").type("senha_super_secreta");

    cy.url().should("equal", "http://localhost:3000/home");
  });
});
