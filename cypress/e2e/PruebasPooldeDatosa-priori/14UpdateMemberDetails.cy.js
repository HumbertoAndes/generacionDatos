describe('Update member details', ()=> {
  let membersData;    
    beforeEach(() => {
        cy.fixture('Data Pool de Datos a-priori/members_data').then((data) => {
            membersData = data;
        })
    })
  it('update member details', ()=>  {    
    expect(membersData).to.exist    
    const randomIndex = Math.floor(Math.random() * 100)
    const data = membersData[randomIndex]  

    cy.visit('https://ghost-waki.onrender.com/ghost/#/signin')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('h.sosa@uniandes.edu.co')
    cy.get('input[name="password"]').type('Colombia1*')
     cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
    cy.wait(1000)
    cy.url().should('include', '/dashboard')
    cy.get('a[data-test-nav="members"]').click()   
    cy.get('a[class="ember-view gh-list-data"][1]')
    cy.get('textarea[name="note"]').clear()
    cy.get('textarea[name="note"]').type(data.Name_valid)
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()     
  })
})