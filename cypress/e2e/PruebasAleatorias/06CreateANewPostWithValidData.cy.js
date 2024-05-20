import {faker} from '@faker-js/faker'

describe('Create a new post with valid data', ()=> {
  it('create a new post with valid data', ()=>  {  
    const title = faker.lorem.sentence()      
    const description = faker.lorem.paragraphs(3)

    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('lm.avilas1@uniandes.edu.co')
    cy.get('input[name="password"]').type('Lmas@110101')
    cy.get('button[data-test-button="sign-in"]').click()
    cy.wait(1000)
    cy.url().should('include', '/dashboard')
    cy.get('a[title="New post"]').click()        
    cy.wait(1000)
    cy.get('textarea[placeholder="Post title"]').type(title)
    cy.get('div[class="kg-prose"]').type(description)    
    cy.get('#ember47 > header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click()         
    cy.get('button[class="gh-btn gh-btn-black gh-btn-large"]').click()
    cy.get('button[data-test-button="confirm-publish"]').click()
    cy.wait(2000)
    
  })
})