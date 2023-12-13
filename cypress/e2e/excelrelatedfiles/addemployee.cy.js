import employeedata from "../../fixtures/addemployee.json"

describe('orangehrm',function(){
    employeedata.forEach((employeedata)=>{
        
        it('addemployee ddt',function(){
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.login("Admin",'admin123')
         cy.contains('PIM').click()
         cy.contains('Add Employee').click()
         cy.get('input[name="firstName"]').type(employeedata.employeename)
         cy.get('[name="middleName"]').type(employeedata.middlename)
         cy.get('[name="lastName"]').type(employeedata.lastname)
         cy.xpath('//input[@class="oxd-input oxd-input--active"]').last().type(employeedata.employeeid)
         cy.get('button[type="submit"]').click()
        })
    })
    
})