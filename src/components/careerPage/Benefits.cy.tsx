import React from 'react'
import Benefits from './Benefits'

describe('<Benefits />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Benefits />)
  })
})