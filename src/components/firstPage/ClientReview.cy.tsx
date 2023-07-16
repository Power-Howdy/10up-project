import React from 'react'
import ClientReview from './ClientReview'

describe('<ClientReview />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ClientReview />)
  })
})