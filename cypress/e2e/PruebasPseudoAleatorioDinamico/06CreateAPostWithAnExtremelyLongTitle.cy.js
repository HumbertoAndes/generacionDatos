describe('Create a post with an extremely long title', ()=> {
  let dataLogin = new Array

  before(() => {
    cy.request({
      method: 'GET',
      url: 'https://my.api.mockaroo.com/post_data.json?key=956e1620',
      failOnStatusCode: false
    }).then((response) => {
      if (response.status !== 200) {
        console.error(`Error fetching data: Status code ${response.status}`);
        throw new Error(`Error fetching data: Status code ${response.status}`);
      }

      dataLogin = response.body;

      if (!Array.isArray(dataLogin) || !dataLogin.length || !dataLogin[0].title_long || !dataLogin[0].description_valid) {
        console.error('Datos de Mockaroo no están bien formados. Asegúrate de que el JSON contiene un array de objetos con "email" y "password".');
        throw new Error('Datos de Mockaroo no están bien formados. Asegúrate de que el JSON contiene un array de objetos con "email" y "password".');
      }
    });
  })

  function random() {
    return Math.floor(Math.random() * dataLogin.length);
  } 
   
    it('create a post with an extremely long title', ()=>  {  
      const posicion = random()
      const data = dataLogin[posicion]
  
      cy.visit('http://localhost:2368/ghost')
      cy.wait(1000)
      cy.get('input[name="identification"]').type('lm.avilas1@uniandes.edu.co')
      cy.get('input[name="password"]').type('Lmas@110101')
      cy.get('button[data-test-button="sign-in"]').click()
      cy.wait(1000)
      cy.url().should('include', '/dashboard')
      cy.get('a[title="New post"]').click()        
      cy.wait(1000)
      cy.get('textarea[placeholder="Post title"]').type(data.title_long)
      cy.get('div[class="kg-prose"]').type(data.description_valid)  
      cy.get('#ember47 > header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click()         
      cy.get('button[class="gh-btn gh-btn-black gh-btn-large"]').click()
      cy.get('button[data-test-button="confirm-publish"]').click()
      cy.wait(2000)
      
    })
  })