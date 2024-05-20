describe('Update an existing post with new content', ()=> {
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

      if (!Array.isArray(dataLogin) || !dataLogin.length || !dataLogin[0].title_valid || !dataLogin[0].description_valid) {
        console.error('Datos de Mockaroo no están bien formados. Asegúrate de que el JSON contiene un array de objetos con "email" y "password".');
        throw new Error('Datos de Mockaroo no están bien formados. Asegúrate de que el JSON contiene un array de objetos con "email" y "password".');
      }
    });
  })

  function random() {
    return Math.floor(Math.random() * dataLogin.length);
  }  
  it('update an existing post with new content', ()=>  {    
    const posicion = random()
    const data = dataLogin[posicion]  

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
    cy.get('textarea[placeholder="Post title"]').type(data.title_valid)
    cy.get('div[class="kg-prose"]').type(data.description_valid)
    cy.get('#ember109').click()
    cy.get('span[class="gh-notification-title"]').should('contain', 'Updated')
  })
})