describe("Given the sign up page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("When navigating to the root url", () => {
    it("Should display all information related to the sign up page", () => {
      cy.contains("Welcome to my-todo-list app").should("be.visible");
      cy.contains("Username").should("be.visible");
      cy.contains("Password").should("be.visible");
      cy.contains("You already have an account?").should("be.visible");

      cy.getByDataCy("username")
        .should("have.attr", "placeholder")
        .should("contain", "Just pick a cool username ;)");

      cy.getByDataCy("password")
        .should("have.attr", "placeholder")
        .should("contain", "Choose anything you want");

      cy.get("button").should("contain", "Register").should("be.disabled");
      cy.get("a")
        .should("contain", "Go to sign in page")
        .should("have.attr", "href")
        .should("equal", "/sign-in");
    });
  });

  describe("When no username nor password are given", () => {
    it.only("Should keep register button disabled", () => {
      cy.getByDataCy("username").type("laza");
      cy.getByDataCy("password").type("test");
      cy.get("button").should("not.be.disabled");
    });
  });
});
