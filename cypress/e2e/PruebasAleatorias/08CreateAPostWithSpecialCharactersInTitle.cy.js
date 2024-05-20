import {fa, faker} from '@faker-js/faker'

describe('Create a post with special characters in title', ()=> {
  it('create a post with special characters in title', ()=>  {  
    const title = faker.lorem.sentence() + faker.random.alphaNumeric(10)     
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
    cy.get('textarea[placeholder="Post title"]').type(title)
    cy.get('div[class="kg-prose"]').type(description)    

    cy.get('body').then(($body) => {
        if($body.find('#ember47 > header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').length) {
            cy.get('#ember47 > header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click()         
            cy.get('button[class="gh-btn gh-btn-black gh-btn-large"]').click()
            cy.get('button[data-test-button="confirm-publish"]').click()
            cy.wait(2000)
        } else {
            throw new Error('The publish button was not found')
        }
    })
  })
})