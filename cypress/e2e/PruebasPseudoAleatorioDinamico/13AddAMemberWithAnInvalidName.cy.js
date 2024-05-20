describe('Add new member with valid data', ()=> {
  let dataLogin = new Array

  before(() => {
    cy.request({
      method: 'GET',
      url: 'https://my.api.mockaroo.com/members_data.json?key=956e1620',
      failOnStatusCode: false
    }).then((response) => {
      if (response.status !== 200) {
        console.error(`Error fetching data: Status code ${response.status}`);
        throw new Error(`Error fetching data: Status code ${response.status}`);
      }

      dataLogin = response.body;

      if (!Array.isArray(dataLogin) || !dataLogin.length || !dataLogin[0].name_invalid || !dataLogin[0].email_valid) {
        console.error('Datos de Mockaroo no están bien formados. Asegúrate de que el JSON contiene un array de objetos con "email" y "password".');
        throw new Error('Datos de Mockaroo no están bien formados. Asegúrate de que el JSON contiene un array de objetos con "email" y "password".');
      }
    });
  })

  function random() {
    return Math.floor(Math.random() * dataLogin.length);
  }  
  it('add new member with valid data', ()=>  {  
    const posicion = random()
    const data = dataLogin[posicion]

    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('lm.avilas1@uniandes.edu.co')
    cy.get('input[name="password"]').type('Lmas@110101')
    cy.get('button[data-test-button="sign-in"]').click()
    cy.wait(1000)
    cy.url().should('include', '/dashboard')
    cy.get('a[data-test-nav="members"]').click()   
    cy.contains('New member').click()
    cy.get('input[id="member-name"]').click()         
    cy.get('input[id="member-name"]').type(data.name_invalid)
    cy.get('input[name="email"]').type(data.email_valid)        
  })
})