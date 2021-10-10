describe("Test home page", () => {
  it("homepage opens succesfully", () => {
    // given
    let url = "http://127.0.0.1:4200/";
    // when / then
    cy.visit(url);
  });

  it("Homepage contains the greeting message", () => {
    // given
    let url = "http://127.0.0.1:4200/";
    // when
    cy.visit(url);
    // then
    cy.contains("header works!");
  });

  it("User enters name and presses button, receiving hello {name}", () => {
    // given
    let url = "http://127.0.0.1:4200/";

    // when
    cy.visit(url);
    cy.get("#name_input").type("Mindaugai");
    cy.get("#name_buttom").click();

    // then
    cy.contains("Labas Mindaugai!");
    cy.url().should("include", "127.0.0.1");
  });

  it("User clicks increment button, the value is incremented", () => {
    // given
    let url = "http://127.0.0.1:4200/";
    cy.visit(url);
    cy.contains("The rating is: 0");

    // when
    cy.get("app-header > button").click();

    // then
    cy.contains("The rating is: 1");

    // cy.visit('http://localhost:4200/');
    // cy.get('.vsc-initialized').click();
    // cy.get('#name_input').click();
    // cy.get('#name_input').type('Jonas');
    // cy.get('.vsc-initialized').click();
    // cy.get('#name_buttom').click();

    // cy.get('app-header > button');
  });

  xit("Lrytas tests", () => {
    let url = "https://lrytas.lt";
    cy.visit(url);
  });

  it("Matches snapshot", () => {
    // given
    let url = "http://127.0.0.1:4200/";
    // when
    cy.visit(url);
    // then
    cy.get("body").toMatchImageSnapshot({
      imageConfig: {
        threshold: 0.0001
      }
    });
  });
});
