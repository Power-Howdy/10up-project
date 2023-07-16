import React from 'react'
import Vacancy from './Vacancy'

describe('<Vacancy />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Vacancy title='Frontend Engineer' />)
  })
})