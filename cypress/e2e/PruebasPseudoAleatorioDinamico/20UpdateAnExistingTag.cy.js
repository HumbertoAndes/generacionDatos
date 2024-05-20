describe('Update an existing tag', ()=> {
  let dataLogin = new Array

  before(() => {
    cy.request({
      method: 'GET',
      url: 'https://my.api.mockaroo.com/tags_data.json?key=956e1620',
      failOnStatusCode: false
    }).then((response) => {
      if (response.status !== 200) {
        console.error(`Error fetching data: Status code ${response.status}`);
        throw new Error(`Error fetching data: Status code ${response.status}`);
      }

      dataLogin = response.body;

      if (!Array.isArray(dataLogin) || !dataLogin.length || !dataLogin[0].name_valid || !dataLogin[0].description_valid) {
        console.error('Datos de Mockaroo no están bien formados. Asegúrate de que el JSON contiene un array de objetos con "email" y "password".');
        throw new Error('Datos de Mockaroo no están bien formados. Asegúrate de que el JSON contiene un array de objetos con "email" y "password".');
      }
    });
  })

  function random() {
    return Math.floor(Math.random() * dataLogin.length);
  } 
  it('update an existing tag', ()=>  {  
    const posicion = random()
    const data = dataLogin[posicion]      

    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('lm.avilas1@uniandes.edu.co')
    cy.get('input[name="password"]').type('Lmas@110101')
    cy.get('button[data-test-button="sign-in"]').click()
    cy.wait(1000)
    cy.url().should('include', '/dashboard')
    cy.get('a[data-test-nav="tags"]').click() 
    cy.get('svg[class="w6 h6 fill-midgrey pa1"][1]').click()    
    cy.get('input[id="tag-name"]').clear()
    cy.get('textarea[id="tag-description"]').clear() 
    cy.get('input[id="tag-name"]').type(data.name_valid)
    cy.get('textarea[id="tag-description"]').type(data.description_valid)    
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()     
  })
})