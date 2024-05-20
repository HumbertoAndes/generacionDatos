describe('Update an existing post with new content', ()=> {
    let postData;    
    beforeEach(() => {
        cy.fixture('Data Pool de Datos a-priori/post_data').then((data) => {
            postData = data;
        })
    })
  it('update an existing post with new content', ()=>  {    
    expect(postData).to.exist    
    const randomIndex = Math.floor(Math.random() * 100)
    const data = postData[randomIndex]  

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
    cy.get('textarea[placeholder="Post title"]').type(data.Title_valid)
    cy.get('div[class="kg-prose"]').type(data.Description_valid)
    cy.get('#ember109').click()
    cy.get('span[class="gh-notification-title"]').should('contain', 'Updated')
  })
})