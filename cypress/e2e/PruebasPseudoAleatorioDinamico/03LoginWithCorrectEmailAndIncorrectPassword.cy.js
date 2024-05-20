describe('Login with invalid email format', () => {
  let dataLogin = new Array

  before(() => {
    cy.request({
      method: 'GET',
      url: 'https://my.api.mockaroo.com/users.json?key=956e1620',
      failOnStatusCode: false
    }).then((response) => {
      if (response.status !== 200) {
        console.error(`Error fetching data: Status code ${response.status}`);
        throw new Error(`Error fetching data: Status code ${response.status}`);
      }

      dataLogin = response.body;

      if (!Array.isArray(dataLogin) || !dataLogin.length || !dataLogin[0].email_valid || !dataLogin[0].password_invalid) {
        console.error('Datos de Mockaroo no están bien formados. Asegúrate de que el JSON contiene un array de objetos con "email" y "password".');
        throw new Error('Datos de Mockaroo no están bien formados. Asegúrate de que el JSON contiene un array de objetos con "email" y "password".');
      }
    });
  })

  function random() {
    return Math.floor(Math.random() * dataLogin.length);
  }
  it('Login with invalid email format', () => {
    const posicion = random()
    const credentials = dataLogin[posicion]
    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('input[name="identification"]').type(credentials.email_valid)
    cy.get('input[name="password"]').type(credentials.password_invalid)
    cy.get('button[data-test-button="sign-in"]').click()
    cy.wait(1000)
    cy.get('p[class="main-error"]').should('contain', 'There is no user with that email address.')
  })
})