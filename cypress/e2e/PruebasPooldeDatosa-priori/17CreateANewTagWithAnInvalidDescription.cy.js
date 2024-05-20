describe('Create a new tag with valid data', ()=> {
    let tagsData;    
    beforeEach(() => {
        cy.fixture('Data Pool de Datos a-priori/tags_data').then((data) => {
            tagsData = data;
        })
    })
  it('create a new tag with valid data', ()=>  { 
    expect(membersData).to.exist    
    const randomIndex = Math.floor(Math.random() * 100)
    const data = tagsData[randomIndex]     

    cy.visit('https://ghost-waki.onrender.com/ghost/#/signin')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('h.sosa@uniandes.edu.co')
    cy.get('input[name="password"]').type('Colombia1*')
     cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
    cy.wait(1000)
    cy.url().should('include', '/dashboard')
    cy.get('a[data-test-nav="tags"]').click()   
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click()
    cy.get('input[id="tag-name"]').type(data.Name_valid)
    cy.get('textarea[id="tag-description"]').type(data.Description_invalid)    
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()     
  })
})