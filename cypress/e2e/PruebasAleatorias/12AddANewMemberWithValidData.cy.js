import {faker} from '@faker-js/faker'

describe('Create a post with empty title and valid description', ()=> {
  it('create a post with empty title and valid description', ()=>  {    
    const name = faker.name.firstName()
    const email = faker.internet.email()

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
    cy.get('input[id="member-name"]').type(name)
    cy.get('input[name="email"]').type(email)
    cy.get('#ember608').click()         
  })
})