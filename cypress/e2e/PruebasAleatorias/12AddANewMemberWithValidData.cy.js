import {faker} from '@faker-js/faker'

describe('Create a post with empty title and valid description', ()=> {
  it('create a post with empty title and valid description', ()=>  {    
    const name = faker.name.firstName()
    const email = faker.internet.email()

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
    cy.get('input[id="member-name"]').type(name)
    cy.get('input[name="email"]').type(email)
    cy.get('#ember608').click()         
  })
})