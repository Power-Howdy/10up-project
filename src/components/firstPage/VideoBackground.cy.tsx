import React from 'react'
import VideoBackground from './VideoBackground'

describe('<VideoBackground />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<VideoBackground />)
  })
})