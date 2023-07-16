import React from 'react'
import NavLink from './NavLink'

describe('<NavLink />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NavLink pathname={"/home"} title={"home"} />)
  })
})