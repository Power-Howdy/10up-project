import React from 'react'
import Comment from './Comment'

describe('<Comment />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Comment />)
  })
})