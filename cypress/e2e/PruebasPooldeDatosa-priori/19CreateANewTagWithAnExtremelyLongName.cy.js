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

    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('lm.avilas1@uniandes.edu.co')
    cy.get('input[name="password"]').type('Lmas@110101')
    cy.get('button[data-test-button="sign-in"]').click()
    cy.wait(1000)
    cy.url().should('include', '/dashboard')
    cy.get('a[data-test-nav="tags"]').click()   
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click()
    cy.get('input[id="tag-name"]').type(data.Name_long)
    cy.get('textarea[id="tag-description"]').type(data.Description_valid)    
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()     
  })
})