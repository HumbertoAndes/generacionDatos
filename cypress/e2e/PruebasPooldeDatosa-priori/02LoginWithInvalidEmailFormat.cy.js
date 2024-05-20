describe('Login with invalid email format', ()=> {
    let dataLoginPassword;
    let dataLoginEmail;
    beforeEach(() => {
        cy.fixture('Data Pool de Datos a-priori/login_data').then((data) => {
            dataLoginPassword = data;
        }),
        cy.fixture('Data Pool de Datos a-priori/email_invalid').then((data) => {
            dataLoginEmail = data;
        })
    })
  it('Login with invalid email format', ()=>  {
    expect(dataLoginPassword).to.exist
    expect(dataLoginEmail).to.exist
    const randomIndex = Math.floor(Math.random() * 100)
    const credentialsEmail = dataLoginEmail[randomIndex]
    const credentialsPassword = dataLoginPassword[randomIndex]
    cy.visit('https://ghost-waki.onrender.com/ghost/#/signin')
    cy.wait(1000)
    cy.get('input[name="identification"]').type(credentialsEmail.email)
    cy.get('input[name="password"]').type(credentialsPassword.password)
     cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
    cy.wait(1000)
    cy.get('p[class="main-error"]').should('contain', 'Please fill out the form to sign in.')
  })
})