describe('api automation',function(){
    it('api',function(){
        cy.request({
            method:'GET',
            url:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
             headers:{
                'Cookie':'orangehrm=522848dadc44816b0a30e56a8022b678',
                'Host' :'opensource-demo.orangehrmlive.com',
                'Referer':'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
                
             },
             body:{}
        }).then((re)=>{
            expect(re.status).to.equal(200)
            cy.log(re.body)
        })
    })

    it.only('api PUT method',function(){
        cy.request({
            method:'PUT',
            url:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/53/personal-details',
          headers:{
            'Cookie':'orangehrm=57b8cf38aa875823f1b017a5f3e34ca9',
            'Host':'opensource-demo.orangehrmlive.com',
            'Referer':'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/53',
                       
          },
          body:{firstName
            : 
            "aniket s"}

        }).then((putreq)=>{
            expect(putreq.status).to.equal(200)
            cy.log(putreq.body)
        })
    })
})