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
    // login sai email
    // cy.get('input[name="userid"]').type("gautruc1800320@gmail.com").type("{enter}");
    // cy.wait(1000)
    // cy.get('input[name="password"]').type("gautruc180320").type("{enter}");
    // // login sai pass
    // cy.get('input[name="userid"]').type("gautruc180320@gmail.com").type("{enter}");
    // cy.wait(1000)
    // cy.get('input[name="password"]').type("gautruc1803200").type("{enter}");
    // // thiếu pass
    // cy.get('input[name="userid"]').type("gautruc180320@gmail.com").type("{enter}");
    // cy.get('input[name="password"]').type("{enter}");
    // // thiếu email
    // y.get('input[name="userid"]').type("{enter}");
    // cy.get('input[name="password"]').type("gautruc180320").type("{enter}");



    cy.get("a[href='/check-group/create']").click();
    cy.get('#mui-1').type("hello").type("{enter}");
    cy.get('#mui-2').type("hell88121299").type("{enter}");
    cy.get('.modal-edit__box--text-field--buttons>.MuiButton-root').click();
    // truong hop 10 nhom
    // cy.get("a[href='/check-group/create']").click();
    // cy.get('#mui-1').type("helloo").type("{enter}");
    // cy.get('#mui-2').type("hell88121299").type("{enter}");
    // cy.get('.modal-edit__box--text-field--buttons>.MuiButton-root').click();





    cy.get('.modal-create-group__box--footer > .MuiButton-root').click();
    cy.get('#mui-3').type("hehe hehe").type("{enter}");
    cy.get('.modal-register__box--list--nouser > .MuiButton-root').click();
    cy.get('[type="radio"]').check('direct-input');
    cy.wait(1000)
    cy.get('.modal-register__box--content--form-register--textarea').click();
    cy.get('.textarea-field__textfield').type('truc,05133512');
    cy.get('.modal-register__box--upload-buttons > .primary').click();
    cy.get('.modal-success__box--buttons > .MuiButton-root').click();
    cy.get('.buttons > :nth-child(2) > .primary').click();
    //moi thanh vien
    cy.get('.modal-register__box--list--nouser > .MuiButton-root').click();
    cy.get('[type="radio"]').check('direct-input');
    cy.wait(1000)
    cy.get('.modal-register__box--content--form-register--textarea').click();
    // trung ten voi nhan vien
    cy.get('.textarea-field__textfield').type('truc,05133512');
    cy.get('.modal-register__box--upload-buttons > .primary').click();
    cy.get('.modal-success__box--buttons > .MuiButton-root').click();
    cy.get('.buttons > :nth-child(2) > .primary').click();
    // hoàn thành tạo kênh
   
    // truong hơp hủy dăng ký tạo kênh
    cy.get('.modal-review-channel__box--footer--submit > .secondary').click();
    cy.get('.modal-confirm__box--buttons > .primary').click();
    //group
    cy.get("a[href='/admin/group']").click();
    cy.get('.form-information > .group__box--form > .group__box--form--form-info > :nth-child(1) > .MuiTypography-root').click();
    cy.get('#mui-4').type("gautruc180320").type("{enter}");
    
    // Delete group
    cy.get('.delete > .MuiTypography-root').click();
    cy.get('.term-of-service__box--submit > .MuiButton-root').click();
    // //Member
    // cy.get("a[href='/admin/member']").click();
    // cy.get('.filters-group__box--right--add > .MuiButton-root').click();
    // cy.get('[type="radio"]').check('direct-input');
    // cy.wait(1000)
    // cy.get('.modal-register__box--content--form-register--textarea').click();
    // cy.get('.textarea-field__textfield').type('truc,0335145212');
    // cy.get('.modal-register__box--upload-buttons > .primary').click();
    // cy.get('.modal-success__box--buttons > .MuiButton-root').click();
    // cy.get('.term-of-service__box--submit > .MuiButton-root').click();
    // //search
    // cy.get('#mui-5').type("t").type("{enter}");
    // cy.get('[style="display: block;"]').click();
   
    // // sort bug
    // cy.get('.select-option > .MuiButton-root > svg').click();
    // cy.get('.select-option > ul > :nth-child(3)').click();
    // // cai ngay ket thuc
    // cy.get('.content__choose-datea > .MuiButton-root > .not-hover').click();
    // cy.get('.react-datepicker > .dropdown-icon > svg').click();
    // cy.get('.react-datepicker__year-read-view').click();
    // cy.get('.react-datepicker__year-dropdown > :nth-child(4)').click();
    // cy.get('.react-datepicker__month-read-view').click();
    // cy.get('.react-datepicker__day-names > :nth-child(6)').click();//chon ngay
    // cy.get('.react-datepicker__day--019').click();
    // cy.get('.content__choose-date--buttons > .primary').click();
    // cy.get('.content__choose-date--buttons > .secondary').click()
    // .click()
    // .click(); //huy bo dk ket thuc
    // cy.get(':nth-child(8) > .MuiTypography-root').click(); // xóa thanh viên
    // cy.get('.modal-confirm__box--buttons > .secondary').click();

    // //  xem trang chi thiet
    
    // cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(1) > .MuiBox-root').click();
    // cy.get('.switch__container > label').click();
    // cy.get('.admin-profile-member__box--basic-information--buttons > .MuiButton-root').click();
    // cy.get('.right > .MuiTypography-root').click();
    // cy.get('.modal-confirm__box--buttons > .primary').click();
    // // kênh
    cy.get("a[href='/admin/channel']").click();
  cy.wait(3000)
    cy.get('.table tbody tr:nth-child(1)').click();
    cy.get('.modal-register__box--form > :nth-child(1) > .MuiTypography-root').type("hello");
    cy.get('.modal-register__box--form > :nth-child(2) > .MuiTypography-root').type("hello");
    cy.get('.custom-upload > .input-field__textfield').click();
    cy.get('.modal-register__box--form--buttons > .MuiButton-root').click();
    // nhan vien phan kenh
    cy.get('#simple-tab-1').click();
    cy.get(':nth-child(2) > .radio-custom').click();
    cy.get('.filters-group__box--right--add > .MuiButton-root').click();
    cy.get('li > .radio-custom > .outline').click();
    cy.get('.buttons > :nth-child(2) > .primary').click();
    // delete staff
    cy.get(':nth-child(5) > .MuiTypography-root').click();
    cy.get('.modal-confirm__box--buttons > .primary').click();
    cy.get('.term-of-service__box--submit > .MuiButton-root').click();
    // member
    cy.get('#simple-tab-2').click();
    cy.get('[style="display: block;"]').click();
    cy.get('.select-option > .MuiButton-root > svg').click();
    cy.get('ul > .active').click();


    // setting
    cy.get('#simple-tab-3').click();
    cy.get(':nth-child(1) > .content__switch-buttons--button > .switch__container > label').click();
    cy.get(':nth-child(2) > .content__switch-buttons--button > .switch__container > label').click();
    cy.get('[style="display: block;"]').click();
    cy.get('.select-option > .MuiButton-root > svg').click();
    cy.get('ul > :nth-child(3)').click();


  });
});
