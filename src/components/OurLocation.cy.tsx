import React from 'react'
import OurLocation from './OurLocation'

describe('<OurLocation />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<OurLocation />)
  })
})