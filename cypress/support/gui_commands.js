Cypress.Commands.add('login', () =>{
        let user = Cypress.env('user_name'),
        password = Cypress.env('user_password')

    cy.get("input[data-testid='email']").type(user)
    cy.get("input[data-testid='senha']").type(password)
    cy.get("button[data-testid='entrar']").click()


})