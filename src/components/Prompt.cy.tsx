import React from 'react'
import Prompt from './Prompt'

describe('<Prompt />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Prompt />)
  })
})