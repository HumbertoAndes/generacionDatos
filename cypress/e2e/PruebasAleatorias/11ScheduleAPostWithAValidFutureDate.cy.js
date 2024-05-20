import {faker} from '@faker-js/faker'

describe('Scheduled  a post with a valid future date', ()=> {
  it('scheduled  a post with a valid future date', ()=>  {    
    const title = faker.lorem.sentence()   
    const description = faker.lorem.paragraphs(2)        

    cy.visit('https://ghost-waki.onrender.com/ghost/#/signin')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('h.sosa@uniandes.edu.co')
    cy.get('input[name="password"]').type('Colombia1*')
     cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()btn-block gh-btn-icon js-login-button ember-view"]').click()btn-block gh-btn-icon js-login-button ember-view"]').click()btn-block gh-btn-icon js-login-button ember-view"]').click()
    cy.wait(1000)
    cy.url().should('include', '/dashboard')
    cy.get('a[title="Scheduled"]').click()   
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click()     
    cy.get('textarea[placeholder="Post title"]').type(title)
    cy.get('div[class="kg-prose"]').type(description)
    cy.get('#ember73 > header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click()         
    cy.get('button[class="gh-publish-setting-title "]').click()
    cy.contains('Schedule for later').click()
    cy.get('button[class="gh-btn gh-btn-black gh-btn-large"]').click()    
    cy.get('button[data-test-button="confirm-publish"]').click()
    cy.wait(2000)
  })
})