describe('Add new member with valid data', ()=> {
    let membersData;    
    beforeEach(() => {
        cy.fixture('Data Pool de Datos a-priori/members_data').then((data) => {
            membersData = data;
        })
    })
  it('add new member with valid data', ()=>  {  
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
    cy.contains('New member').click()
    cy.get('input[id="member-name"]').click()         
    cy.get('input[id="member-name"]').type(data.Name_Invalid)
    cy.get('input[name="email"]').type(data.Email_valid)        
  })
})