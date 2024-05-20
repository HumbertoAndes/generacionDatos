import {faker} from '@faker-js/faker'

describe('Login with valid email and empty password', ()=> {
  it('login with valid email and empty password', ()=>  {  
    const email = faker.internet.email()      

    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('input[name="identification"]').type(email)
    cy.get('input[name="password"]').clear()
    cy.get('button[data-test-button="sign-in"]').click()
    cy.wait(1000)
    cy.get('p[class="main-error"]').should('contain', 'Please fill out the form to sign in.')
  })
})