import {faker} from '@faker-js/faker'

describe('Create a tag with a very long name', ()=> {
  it('create a tag with a very long name', ()=>  {    
    const name = faker.lorem.words() + faker.random.alphaNumeric(10)
    const description =  faker.lorem.sentences(2)

    cy.visit('https://ghost-waki.onrender.com/ghost/#/signin')
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
    cy.get('input[id="tag-name"]').type(name)
    cy.get('textarea[id="tag-description"]').type(description)    
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()     
  })
})