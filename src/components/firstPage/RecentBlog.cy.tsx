import React from 'react'
import RecentBlog from './RecentBlog'

describe('<RecentBlog />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RecentBlog />)
  })
})