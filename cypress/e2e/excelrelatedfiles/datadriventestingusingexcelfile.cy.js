import exceldata from '../../fixtures/CONVERTINGEXCELTOJSON/user_data.json'


describe('Automation Test Suite - Fixtures', function () {
    //loop through both the fixtues 
    exceldata.forEach((exceldata) => {
        

            it('Cypress Test Case - Understanding Fixtures', function () {

                Cypress.on("uncaught:exception", (err, runnable) => {
  
                    return false;
                  });
                //Calling
                cy.visit('https://the-internet.herokuapp.com/login');
                cy.get('#username').type(exceldata.username);
                cy.get('#password').type(exceldata.password);
                cy.get('button[type="submit"]').click()
                cy.get('#flash').should('be.visible')
                

                //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior

              
    })
})
})