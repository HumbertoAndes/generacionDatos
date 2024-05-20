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
    cy.visit('https://ghost-waki.onrender.com/ghost/#/signin')
    cy.wait(1000)
    cy.get('input[name="identification"]').type(credentials.email)
    cy.get('input[name="password"]').type(credentials.password)
     cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
    cy.wait(1000)
    cy.get('p[class="main-error"]').should('contain', 'There is no user with that email address.')
  })
})

