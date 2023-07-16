import React from 'react'
import ContactForm from './ContactForm'

describe('<ContactForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ContactForm />)
  })
})