describe('api automation',function(){
    it("execute DELETE method", () => {
        cy.request({
            method: "DELETE",
            url: "https://httpbin.org/#/HTTP_Methods/delete_delete"

        }).its("status").should("equal", 405);
    })

    it.only("execute GET method", () => {
        cy.request({
            method: "GET",
            url: "https://dummy.restapiexample.com/"

        }).its("status").should("equal", 200);
    })



})
///it('api automation',function(){
    // cy.request({method: "DELETE",url:'https://httpbin.org/#/HTTP_Methods/delete_delete',}).then((res)=>{
    //     expext(res.status).to.equal(405)
    // })
    
