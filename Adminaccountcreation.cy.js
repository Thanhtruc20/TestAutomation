describe("empty spec", () => {
    it("passes", () => {
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
      // login Admin account creation(created account tafi khoản đã tạo)
      cy.get('.admin__login--bottom--redirect').click();
      // email
      cy.get("#mui-1").type("gautruc180320@gmail.com").type("{enter}");
      cy.get(".admin__register--box--form--inputs > .MuiButton-root").click();
      cy.get(".term-of-service__box--submit > .MuiButton-root").click();
      // pass
      cy.get("#mui-2").type("gautruc180320").type("{enter}");
      // confirm the pw
      cy.get("#mui-3").type("gautruc180320").type("{enter}");
      // nickname
      cy.get("#mui-4").type("gautruc180320").type("{enter}");
      // phone number
      cy.get("#mui-6").type("012345678").type("{enter}");
      // lỗi khi vẫn tạo thành công tài khoản
      //Accept the terms and
      cy.get(".term-of-service__box--parent > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input").click();
      cy.get(".term-of-service__box--submit > .MuiButton-root").click();
      cy.get(".popup-notification__box > .term-of-service__box--submit > .MuiButton-root").click();
  
    });
  });
  