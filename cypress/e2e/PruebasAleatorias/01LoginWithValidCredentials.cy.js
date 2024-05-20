import {faker} from '@faker-js/faker'

describe('Login with valid credentials', ()=> {
  it('login with valid credentials', ()=>  {
    const email = faker.internet.email()
    const password = faker.internet.password()

    cy.visit('https://ghost-waki.onrender.com/ghost/#/signin')
    cy.wait(1000)
    cy.get('input[name="identification"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
    cy.wait(1000)
    cy.get('p[class="main-error"]').should('contain', 'There is no user with that email address.')
  })
})


