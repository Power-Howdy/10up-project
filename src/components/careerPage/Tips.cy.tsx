import React from 'react'
import Tips from './Tips'

describe('<Tips />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Tips />)
  })
})