import {faker} from '@faker-js/faker'

describe('Login with empty email and valid password', ()=> {
  it('login with empty email and valid password', ()=>  {    
    const password = faker.internet.password()

    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('input[name="identification"]').clear()
    cy.get('input[name="password"]').type(password)
    cy.get('button[data-test-button="sign-in"]').click()
    cy.wait(1000)
    cy.get('p[class="main-error"]').should('contain', 'Please fill out the form to sign in.')
  })
})