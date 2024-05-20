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

    cy.visit('https://ghost-waki.onrender.com/ghost/#/signin')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('h.sosa@uniandes.edu.co')
    cy.get('input[name="password"]').type('Colombia1*')
     cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
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