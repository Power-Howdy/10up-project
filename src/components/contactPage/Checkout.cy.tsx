import React from 'react'
import Checkout from './Checkout'

describe('<Checkout />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Checkout />)
  })
})