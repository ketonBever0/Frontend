describe('Menü működés teszt', () => {
  beforeEach('', () => {
    cy.visit('http://localhost:5173')
  })


  it('passes', () => {
    cy.get('.menu > li:nth-child(1) > a:nth-child(1)').should('have.text', 'Kezdőbetű').click;

  })
})