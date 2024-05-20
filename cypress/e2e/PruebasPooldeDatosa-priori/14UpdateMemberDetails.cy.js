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

    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('lm.avilas1@uniandes.edu.co')
    cy.get('input[name="password"]').type('Lmas@110101')
    cy.get('button[data-test-button="sign-in"]').click()
    cy.wait(1000)
    cy.url().should('include', '/dashboard')
    cy.get('a[data-test-nav="members"]').click()   
    cy.get('a[class="ember-view gh-list-data"][1]')
    cy.get('textarea[name="note"]').clear()
    cy.get('textarea[name="note"]').type(data.Name_valid)
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()     
  })
})