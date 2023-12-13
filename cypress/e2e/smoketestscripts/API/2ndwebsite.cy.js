describe('api automation',function(){
    it("execute GET method", () => {
        cy.request({
            method: "POST",
            url: "https://restful-booker.herokuapp.com/auth",payload:{
                "username" : "admin",
                "password" : "password123"
            }
            
        }).then((res)=>{
            expect(res.status).equal(201);  
          expect(res.body).to.have.property("token","fc7b2e5548acce5")
          

        })
        

        

   })

    it.only("execute POST method", () => {
        cy.request({
            method: "POST",
            url: "https://dummy.restapiexample.com/api/v1/create"

        }).then((res)=>{
            expect(res.body.data.id).to.equal(5205)

        }).its("status").should("equal", 200);
    })

})
