describe('api',function(){
    it('api',function(){
        cy.request({method:'PUT',url:'https://reqres.in/api/users/2',body:{
            "name": "morpheus",
            "job": "zion resident"},}).then((update)=>{
                expect(update.status).to.equal(200)
                cy.log(update.body)
            })
    })

    it('patch',function(){
        cy.request({
            method:'PATCH',
            url:'https://reqres.in/api/users/2',
            body:{name: "morpheus"},
            headers:{
                'Referer':'https://reqres.in/'
            },
        }).then((patchreq)=>{
            expect(patchreq.status).to.equal(200)
            cy.log(patchreq.body)
            cy.writeFile('cypress/fixtures/patchrequest.text',patchreq.body)
        })
    })
})

//Tip to get only the remote URL:

//git config --get remote.origin.url

////In order to get more details about a particular remote, use the

//git remote show [remote-name] command