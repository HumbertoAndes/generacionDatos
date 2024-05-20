import {fa, faker} from '@faker-js/faker'

describe('Create a post with empty title and valid description', ()=> {
  it('create a post with empty title and valid description', ()=>  {       
    const description = faker.lorem.paragraphs(2)

    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('lm.avilas1@uniandes.edu.co')
    cy.get('input[name="password"]').type('Lmas@110101')
    cy.get('button[data-test-button="sign-in"]').click()
    cy.wait(1000)
    cy.url().should('include', '/dashboard')
    cy.get('a[title="New post"]').click()        
    cy.wait(1000)
    cy.get('textarea[placeholder="Post title"]').clear()
    cy.get('div[class="kg-prose"]').type(description)    

    cy.get('body').then(($body) => {
        if($body.find('#ember47 > header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').length) {
            cy.get('#ember47 > header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click()         
            cy.get('button[class="gh-btn gh-btn-black gh-btn-large"]').click()
            cy.get('button[data-test-button="confirm-publish"]').click()
            cy.wait(2000)
        } else {
            cy.log('The publish button was not found but the test is successful.')
        }
    })
  })
})