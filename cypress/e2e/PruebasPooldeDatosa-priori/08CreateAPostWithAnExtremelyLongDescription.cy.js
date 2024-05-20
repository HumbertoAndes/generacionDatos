describe('Create a post with an extremely long description', ()=> {
    let postData;    
    beforeEach(() => {
        cy.fixture('Data Pool de Datos a-priori/post_data').then((data) => {
            postData = data;
        })
    })
    it('create a post with an extremely long description', ()=>  {  
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
      cy.get('a[title="New post"]').click()        
      cy.wait(1000)
      cy.get('textarea[placeholder="Post title"]').type(data.Title_valid)
      cy.get('div[class="kg-prose"]').type(data.Description_long)  
      cy.get('#ember47 > header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click()         
      cy.get('button[class="gh-btn gh-btn-black gh-btn-large"]').click()
      cy.get('button[data-test-button="confirm-publish"]').click()
      cy.wait(2000)
      
    })
  })