import React from 'react'
import Header from './Header'

describe('<Header />', () => {
  it('Fejléc teszt', () => {
    // see: https://on.cypress.io/mounting-react

    cy.mount(<Header cim={"Koktél kereső"} />)
    cy.get('h1').should('have.text', 'Koktél kereső')

  })
})