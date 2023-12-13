describe('api automation',function(){
    it('api automation',function(){
        cy.request({'method':'GET',
        'url':'https://reqres.in/api/users?page=2',
        
 }).then((res)=>{
    expect(res.status).to.equal(200)
 })

    })
})