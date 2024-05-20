import {faker} from '@faker-js/faker'

describe('Update member details', ()=> {
  it('update member details', ()=>  {    
    const name = faker.name.firstName()
    const email = faker.lorem.word()
    const note = faker.lorem.sentence()

    cy.visit('https://ghost-waki.onrender.com/ghost/#/signin')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('h.sosa@uniandes.edu.co')
    cy.get('input[name="password"]').type('Colombia1*')
     cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
    cy.wait(1000)
    cy.url().should('include', '/dashboard')
    cy.get('a[data-test-nav="members"]').click()   
    cy.get('a[class="ember-view gh-list-data"][1]')
    cy.get('textarea[name="note"]').clear()
    cy.get('textarea[name="note"]').type(note)
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()     
  })
})