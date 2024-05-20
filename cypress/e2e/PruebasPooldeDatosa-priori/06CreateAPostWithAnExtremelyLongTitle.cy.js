describe('Create a post with an extremely long title', ()=> {
    let postData;    
    beforeEach(() => {
        cy.fixture('Data Pool de Datos a-priori/post_data').then((data) => {
            postData = data;
        })
    })
    it('create a post with an extremely long title', ()=>  {  
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
      cy.get('a[title="New post"]').click()        
      cy.wait(1000)
      cy.get('textarea[placeholder="Post title"]').type(data.Title_long)
      cy.get('div[class="kg-prose"]').type(data.Description_valid)  
      cy.get('#ember47 > header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click()         
      cy.get('button[class="gh-btn gh-btn-black gh-btn-large"]').click()
      cy.get('button[data-test-button="confirm-publish"]').click()
      cy.wait(2000)
      
    })
  })