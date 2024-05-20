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

    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('lm.avilas1@uniandes.edu.co')
    cy.get('input[name="password"]').type('Lmas@110101')
    cy.get('button[data-test-button="sign-in"]').click()
    cy.wait(1000)
    cy.url().should('include', '/dashboard')
    cy.get('a[data-test-nav="members"]').click()   
    cy.contains('New member').click()
    cy.get('input[id="member-name"]').click()         
    cy.get('input[id="member-name"]').type(data.Name_Invalid)
    cy.get('input[name="email"]').type(data.Email_valid)        
  })
})