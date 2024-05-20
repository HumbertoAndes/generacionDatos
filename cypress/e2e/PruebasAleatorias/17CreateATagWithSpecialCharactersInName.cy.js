import {faker} from '@faker-js/faker'

describe('Create a tag with a very long name', ()=> {
  it('create a tag with a very long name', ()=>  {    
    const name = faker.lorem.words() + faker.random.alphaNumeric(10)
    const description =  faker.lorem.sentences(2)

    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('lm.avilas1@uniandes.edu.co')
    cy.get('input[name="password"]').type('Lmas@110101')
    cy.get('button[data-test-button="sign-in"]').click()
    cy.wait(1000)
    cy.url().should('include', '/dashboard')
    cy.get('a[data-test-nav="tags"]').click()   
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click()
    cy.get('input[id="tag-name"]').type(name)
    cy.get('textarea[id="tag-description"]').type(description)    
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()     
  })
})