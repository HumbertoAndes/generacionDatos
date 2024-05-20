describe('Login with valid credentials', ()=> {
    let dataLogin;
    beforeEach(() => {
        cy.fixture('Data Pool de Datos a-priori/login_data').then((data) => {
            dataLogin = data;
        })
    })
  it('login with valid credentials', ()=>  {
    expect(dataLogin).to.exist
    const randomIndex = Math.floor(Math.random() * 100)
    const credentials = dataLogin[randomIndex]
    cy.visit('http://localhost:2368/ghost')
    cy.wait(1000)
    cy.get('input[name="identification"]').type(credentials.email)
    cy.get('input[name="password"]').type(credentials.password)
    cy.get('button[data-test-button="sign-in"]').click()
    cy.wait(1000)
    cy.get('p[class="main-error"]').should('contain', 'There is no user with that email address.')
  })
})

