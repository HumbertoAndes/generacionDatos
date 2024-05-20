import {faker} from '@faker-js/faker'

describe('Login with invalid email format', ()=> {
  it('login with invalid email format', ()=>  {
    const email = faker.lorem.word()
    const password = faker.internet.password()

    cy.visit('https://ghost-waki.onrender.com/ghost/#/signin')
    cy.wait(1000)
    cy.get('input[name="identification"]').type(email)
    cy.get('input[name="password"]').type(password)
     cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()btn-block gh-btn-icon js-login-button ember-view"]').click()btn-block gh-btn-icon js-login-button ember-view"]').click()
    cy.wait(1000)
    cy.get('p[class="main-error"]').should('contain', 'Please fill out the form to sign in.')
  })
})