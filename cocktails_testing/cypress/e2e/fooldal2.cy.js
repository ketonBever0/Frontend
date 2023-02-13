describe('template spec', () => {

  beforeEach('', () => {
    cy.visit('http://localhost:5173')
  })

  it('Fejléc teszt', () => {
    cy.get('h1').should('contain.text', 'Koktél kereső')
  })

  it('Navbar megjelenik', () => {
    cy.get('.navbar').find('.btn').should('have.text', 'Főoldal');
    cy.get('.menu > li:nth-child(1) > a:nth-child(1)').should('have.text', 'Kezdőbetű');
    cy.get('.menu > li:nth-child(2) > a:nth-child(1)').should('have.text', 'Összetevő');
    cy.get('.menu > li:nth-child(3) > a:nth-child(1)').should('have.text', 'Név');
  })

  it('Kép megjelenik', () => {
    cy.get('img').should('have.attr','src');
  })

  it('Címszöveg jó', () => {
    cy.get('.hero-content > div:nth-child(2) > h1:nth-child(1)').should('have.text','Cocktail Kereső');
  })

})