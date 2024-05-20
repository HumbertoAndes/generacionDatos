import {fa, faker} from '@faker-js/faker'

describe('Update an existing post with new content', ()=> {
  it('update an existing post with new content', ()=>  {    
    const title = faker.lorem.sentence()   
    const description = faker.lorem.paragraphs(2)

    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('lm.avilas1@uniandes.edu.co')
    cy.get('input[name="password"]').type('Lmas@110101')
    cy.get('button[data-test-button="sign-in"]').click()
    cy.wait(1000)
    cy.url().should('include', '/dashboard')
    cy.get('a[title="Published"]').click()        
    cy.get('body > div.gh-app > div > main > section > section > div.posts-list.gh-list.feature-memberAttribution > div:nth-child(1) > li').click()
    cy.wait(1000)
    cy.get('textarea[placeholder="Post title"]').clear()
    cy.get('div[class="kg-prose"]').clear()   
    cy.get('textarea[placeholder="Post title"]').type(title)
    cy.get('div[class="kg-prose"]').type(description)
    cy.get('#ember109').click()
    cy.get('span[class="gh-notification-title"]').should('contain', 'Updated')
  })
})