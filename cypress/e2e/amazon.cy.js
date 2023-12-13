describe('',()=>{
    it('',()=>{
        cy.visit("https://www.amazon.in/")
        cy.get('#nav-search-dropdown-card').click()
        cy.get("#searchDropdownBox").select('Amazon Devices',{force: true})
    
    })
})