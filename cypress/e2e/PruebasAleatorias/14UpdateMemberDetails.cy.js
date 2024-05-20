import {faker} from '@faker-js/faker'

describe('Update member details', ()=> {
  it('update member details', ()=>  {    
    const name = faker.name.firstName()
    const email = faker.lorem.word()
    const note = faker.lorem.sentence()

    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('lm.avilas1@uniandes.edu.co')
    cy.get('input[name="password"]').type('Lmas@110101')
    cy.get('button[data-test-button="sign-in"]').click()
    cy.wait(1000)
    cy.url().should('include', '/dashboard')
    cy.get('a[data-test-nav="members"]').click()   
    cy.get('a[class="ember-view gh-list-data"][1]')
    cy.get('textarea[name="note"]').clear()
    cy.get('textarea[name="note"]').type(note)
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()     
  })
})