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

    it('api POST method',function(){
        cy.request({
            method:''
        })
    })
})