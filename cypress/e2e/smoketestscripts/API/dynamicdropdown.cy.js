describe("verify dropDown",()=>{
    it.skip("verify dropDown using select command",()=>{
    cy.visit("https://www.zoho.com/commerce/free-demo.html")
    cy.get("#zcf_address_country").select("Algeria")
    })
} )


//dynamic dropdown
it('verify dynamic dropdown',()=>{
    cy.visit('https://www.google.co.in/')
    cy.get('[name="q"]').type('cypress automation tool')
    cy.get('div.wM6W7d>span').each(($ele)=>{
cy.log($ele.text())
        if($ele.text()=='cypress automation tool'){
            cy.wrap($ele).click
        } 
    })
    // cy.get('[name="q"]').contains('cypress automation tool')
})