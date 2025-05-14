describe('Pesquisa no google', () => {
  beforeEach(() => {
    cy.visit('https://br.search.yahoo.com/')
  })

  it('Pesquisar a palavra Bebe reborn', () => {
    cy.get('[name="p"]').type('Bebe reborn{enter}')

  })
})
