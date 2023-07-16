import React from 'react'
import Boundary from './boundary'

describe('<Boundary />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Boundary />)
  })
})