import React from 'react'
import { Nav } from './Nav'

describe('<Nav />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Nav />)
  })
})