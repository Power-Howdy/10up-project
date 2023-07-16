import React from 'react'
import Achievements from './Achievements'

describe('<Achievements />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Achievements />)
  })
})