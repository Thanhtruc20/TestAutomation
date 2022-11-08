describe("Calling a function", function () {
    it("Call the Subtract function and asert the calculation", () => {
      cy.visit("https://moagroup-admin.moaservice.com/");
      // doi ngon ngu
      cy.get('.header__box--control--language > .MuiButton-root').click();
      cy.wait(1000)
      cy.get('.popoverlanguage__box--ul > :nth-child(4)').click();
      
      // login acc
      cy.get('input[name="userid"]').type("gautruc180320@gmail.com").type("{enter}");
      cy.wait(1000)
      cy.get('input[name="password"]').type("gautruc180320").type("{enter}");
      cy.get("a[href='/check-group/create']").click();

      
    
   
    cy.get('#mui-1').type("hello").type("{enter}");
    cy.get('#mui-2').type("hello14").type("{enter}");
   
    cy.get('.term-of-service__box--submit > .MuiButton-root').click();
    // xoa nhom bug
    // cy.get('.MuiList-root > :nth-child(1)').click();
    // cy.get(':nth-child(1) > .MuiListItemText-root > .MuiListItemText-primary > .MuiTypography-root').click();
    // cy.get('[href="/admin/payment"] > .MuiListItemButton-root').click();
    // cy.get('.management__edit-payment--child--buttons > .MuiButton-root').click();
    // cy.get('.modal-confirm__box--buttons > .primary').click();
    // cy.get('[href="/admin/group"] > .MuiListItemButton-root').click();
    // cy.get('.delete > .MuiTypography-root').click();
    // cy.get('.modal-confirm__box--buttons > .primary').click();

    cy.get(':nth-child(1) > .check-group__box--list-group--menubar > .MuiButton-root > .not-hover').click();
    cy.get('.MuiPaper-root > .MuiList-root > .MuiListItem-root').click();
    cy.get('#mui-3').type("gau").type("{enter}");
  


    
    

    // cy.get('#mui-3').type("hello").type("{enter}");
    // // cy.get('#mui-4').type("hello").type("{enter}");
    // cy.get('.modal-edit__box--text-field--buttons>.MuiButton-root').click();
    // cy.get('.term-of-service__box--submit > .MuiButton-root').click();
    // cy.get('.MuiList-root > :nth-child(1)').click();
    // cy.get('.active > .MuiListItemButton-root').click();
    // cy.get('.management__edit-payment--child--buttons > .MuiButton-root').click();
    // cy.get('.modal-confirm__box--buttons > .primary').click();
    // cy.get('[href="/admin/group"] > .MuiListItemButton-root').click();
    // cy.get('.delete > .MuiTypography-root').click();
    // cy.get('.modal-confirm__box--buttons > .primary').click();

    
    // cy.get('#mui-3').type("hello").type("{enter}");
    // cy.get('#mui-4').type("hell6").type("{enter}");
    // cy.get('.modal-edit__box--text-field--buttons>.MuiButton-root').click();
    // cy.get('.modal-create-group__box--header > img').click();
    // cy.get('[style="display: table-cell; vertical-align: middle; white-space: nowrap;"]').click();
    // cy.get('.header__box--popover--ul > :nth-child(4)').click();
    // cy.get('.check-group__box--exists--button > .MuiButton-root').click();
    
     
    // cy.get('#mui-5').type("hello").type("{enter}");
    // cy.get('#mui-6').type("hell7").type("{enter}");
    // cy.get('.modal-edit__box--text-field--buttons>.MuiButton-root').click();
    // cy.get('.modal-create-group__box--header > img').click();
    // cy.get('[style="display: table-cell; vertical-align: middle; white-space: nowrap;"]').click();
    // cy.get('.header__box--popover--ul > :nth-child(4)').click();
    // cy.get('.check-group__box--exists--button > .MuiButton-root').click();

    // cy.get('#mui-7').type("hello").type("{enter}");
    // cy.get('#mui-8').type("hell8").type("{enter}");
    // cy.get('.modal-edit__box--text-field--buttons>.MuiButton-root').click();
    // cy.get('.modal-create-group__box--header > img').click();
    // cy.get('[style="display: table-cell; vertical-align: middle; white-space: nowrap;"]').click();
    // cy.get('.header__box--popover--ul > :nth-child(4)').click();
    // cy.get('.check-group__box--exists--button > .MuiButton-root').click();

  
    
    // cy.get('#mui-9').type("hello").type("{enter}");
    // cy.get('#mui-10').type("hell10").type("{enter}");
    // cy.get('.modal-edit__box--text-field--buttons>.MuiButton-root').click();
    // cy.get('.modal-create-group__box--header > img').click();
    // cy.get('[href="/admin/payment"] > .MuiListItemButton-root').click();
    // cy.get('.management__edit-payment--child--buttons > .MuiButton-root').click();
    // cy.get('.modal-confirm__box--buttons > .primary').click();
    // cy.get('[href="/admin/group"] > .MuiListItemButton-root').click();
    // cy.get('.delete > .MuiTypography-root').click();
    // cy.get('.check-group__box--exists--button > .MuiButton-root').click();

    // cy.get('#mui-11').type("hello").type("{enter}");
    // cy.get('#mui-12').type("hell10").type("{enter}");
    // cy.get('.modal-edit__box--text-field--buttons>.MuiButton-root').click()

    // truong hop 10 nhom
    // cy.get("a[href='/check-group/create']").click();
    // cy.get('#mui-1').type("helloo").type("{enter}");
    // cy.get('#mui-2').type("hell88121299").type("{enter}");
    // cy.get('.modal-edit__box--text-field--buttons>.MuiButton-root').click();
    });
});