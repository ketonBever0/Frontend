describe('Oldal betöltés', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    // cy.get('p').should('contains.text', 'alkoholos-e');
    cy.get('.navbar').find('.btn').should('have.text', 'Főoldal');
    cy.get('.menu > li:nth-child(1) > a:nth-child(1)').should('have.text','Kezdőbetű');
    cy.get('.menu > li:nth-child(2) > a:nth-child(1)').should('have.text','Összetevő');
    cy.get('.menu > li:nth-child(3) > a:nth-child(1)').should('have.text','Név');
  })
})