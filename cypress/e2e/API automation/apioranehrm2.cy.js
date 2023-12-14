describe('orangehrm',function(){
    it('api automation',function(){
       cy.request({

        method:'GET',
        url:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
        headers:{
            'Cookie':'orangehrm=9c6b2866e397ceb5ee664607e938cfbd',
            'Host':'opensource-demo.orangehrmlive.com',
            'Referer':'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'
        },
        body:{}
       }).then((respo)=>{
        expect(respo.status).to.equal(200)
        cy.log(respo.body)
        cy.writeFile('cypress/fixtures/respo.txt',respo.body)
       })

    })

    it.only('Cypress Test Case - Understanding DELTE Method', function () {
      
        failOnStatusCode: false

      cy.request({
  
        method:'DELETE', 
        url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
        headers:{
  
          "Cookie":"orangehrm=9acb1f811e1f35d72774fd54ba66c8ed",
          "Host":"opensource-demo.orangehrmlive.com",
          "Referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
        },
        body:{"ids":[18]}
        
  
      }).then((response) => {
  
        expect(response.status).equal(200);
        cy.log(response.body)
  
        cy.writeFile("cypress/fixtures/res.txt", response.body)
  
       
      })
  
    })

})