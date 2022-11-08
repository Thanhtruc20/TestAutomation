describe("Calling a function", function () {
  it("Call the Subtract function and asert the calculation", () => {
    cy.visit("https://moagroup-admin.moaservice.com/");
    // Switch language
    cy.get(".MuiButton-root > img").click();
    cy.get(".popoverlanguage__box--ul > :nth-child(2)").click();
    cy.wait(100);
    cy.get(".MuiButton-root > img").click();
    cy.get(".popoverlanguage__box--ul > :nth-child(3)").click();
    cy.wait(100);
    cy.get(".MuiButton-root > img").click();
    cy.get(".popoverlanguage__box--ul > :nth-child(4)").click();
    cy.wait(1000);
    cy.get(".MuiButton-root > img").click();
    cy.get(".popoverlanguage__box--ul > :nth-child(1)").click();
    cy.wait(100);
    // Login with the correct email and password
    cy.get("#email").type("gautruc180320@gmail.com").type("{enter}");
    cy.wait(1000);
    cy.get("#password").type("gautruc180320");
    cy.wait(1000);
    cy.get("#remember").click();
    cy.get("#btn-login").click();
    // steps to sign out
    cy.get(
      '[style="display: table-cell; vertical-align: middle; white-space: nowrap;"]'
    ).click();
    cy.get(".button-bot").click();
    //log in with the wrong email and correct password
    cy.get("#email").type("gautruc180320gmail.com").type("{enter}");
    cy.wait(1000);
    cy.get("#email").clear(); // delete the data entered in the input
    cy.get("#email").type("gautruc180320@gmail.com").type("{enter}");
    cy.get("#password").type("gautruc180320");
    cy.wait(1000);
    cy.get("#remember").click();
    cy.get("#btn-login").click();
    // steps to sign out
    cy.get(
      '[style="display: table-cell; vertical-align: middle; white-space: nowrap;"]'
    ).click();
    cy.get(".button-bot").click();

    //log in with correct email and the wrong password
    cy.get("#email").type("gautruc180320@gmail.com").type("{enter}");
    cy.wait(1000);
    cy.get("#password").type("gautruc18032");
    cy.get("#password").clear(); // delete the data entered in the input
    cy.get("#password").type("gautruc180320");
    cy.wait(1000);
    cy.get("#remember").click();
    cy.get("#btn-login").click();
    // steps to sign out
    cy.get(
      '[style="display: table-cell; vertical-align: middle; white-space: nowrap;"]'
    ).click();
    cy.get(".button-bot").click();

    // log in with the wrong email and the wrong password
    cy.get("#email").type("gautruc1803@gmail.com").type("{enter}");
    cy.wait(1000);
    cy.get("#password").type("gautruc18032");
    cy.get("#email").clear(); // delete the data entered in the input
    cy.get("#password").clear(); // delete the data entered in the input
    cy.get("#email").type("gautruc180320@gmail.com").type("{enter}");
    cy.wait(100);
    cy.get("#password").type("gautruc180320");
    cy.wait(1000);
    cy.get("#remember").click();
    cy.get("#btn-login").click();
    // steps to sign out
    cy.get(
      '[style="display: table-cell; vertical-align: middle; white-space: nowrap;"]'
    ).click();
    cy.get(".button-bot").click();

    //Leave your email and password blank, just click Stay signed in
    cy.get("#remember").click();
    cy.get("#btn-login").click();
    cy.get("#email").type("gautruc180320@gmail.com").type("{enter}");
    cy.wait(1000);
    cy.get("#password").type("gautruc180320");
    cy.wait(1000);
    cy.get("#remember").click();
    cy.get("#btn-login").click();
 

    // //
    // cy.get("a[href='/check-group/create']").click();
    // cy.get('#mui-1').type("hello").type("{enter}");
    // cy.get('#mui-2').type("hell88121299").type("{enter}");
    // cy.get('.modal-edit__box--text-field--buttons>.MuiButton-root').click();
    // cy.get("a[href='/check-group/create']").click();
    // cy.get('#mui-1').type("hello").type("{enter}");
    // cy.get('#mui-2').type("hell88121299").type("{enter}");
    // cy.get('.modal-edit__box--text-field--buttons>.MuiButton-root').click();


  });
});
