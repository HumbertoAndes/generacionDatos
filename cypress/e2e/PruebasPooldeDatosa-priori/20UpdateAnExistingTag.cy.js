describe('Update an existing tag', ()=> {
    let tagsData;    
    beforeEach(() => {
        cy.fixture('Data Pool de Datos a-priori/tags_data').then((data) => {
            tagsData = data;
        })
    })
  it('update an existing tag', ()=>  {  
    expect(membersData).to.exist    
    const randomIndex = Math.floor(Math.random() * 100)
    const data = tagsData[randomIndex]      

    cy.visit('https://ghost-waki.onrender.com/ghost/#/signin')om/ghost/#/signin')om/ghost/#/signin')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('h.sosa@uniandes.edu.co')
    cy.get('input[name="password"]').type('Colombia1*')
     cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
    cy.wait(1000)
    cy.url().should('include', '/dashboard')
    cy.get('a[data-test-nav="tags"]').click() 
    cy.get('svg[class="w6 h6 fill-midgrey pa1"][1]').click()    
    cy.get('input[id="tag-name"]').clear()
    cy.get('textarea[id="tag-description"]').clear() 
    cy.get('input[id="tag-name"]').type(data.Name_valid)
    cy.get('textarea[id="tag-description"]').type(data.Description_valid)    
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()     
  })
})