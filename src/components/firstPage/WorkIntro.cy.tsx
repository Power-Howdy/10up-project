import React from 'react'
import WorkIntro from './WorkIntro'

describe('<WorkIntro />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<WorkIntro />)
  })
})