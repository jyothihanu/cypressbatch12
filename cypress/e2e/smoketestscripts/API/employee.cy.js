describe('api automation',function(){
    it("execute GET method", () => {
        cy.request({
            method: "GET",
            url: "https://dummy.restapiexample.com/api/v1/employees"

        }).then((res)=>{
            expect(res.body.data[0].employee_name).to.equal('Tiger Nixon')
            expect(res.status).to.equal(200)
            expect(res.body.data[0].employee_salary).to.equal(320800)
            expect(res.body.data[0].employee_age).to.equal(61)
            expect(res.body.data[0].profile_image).to.equal("")
            //expect(status).to.equal("success")

          
        }).its("status").should("equal", 200);
        

    })

    it("execute POST method", () => {
        cy.request({
            method: "POST",
            url: "https://dummy.restapiexample.com/api/v1/create"

        }).then((res)=>{
            //expect(res.body.data.id).to.equal(5205)

        }).its("status").should("equal", 200);
    })



})