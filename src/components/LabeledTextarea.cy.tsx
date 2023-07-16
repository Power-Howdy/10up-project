import React from 'react'
import LabeledTextarea from './LabeledTextarea'

describe('<LabeledTextarea />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LabeledTextarea label='sample label' placeholder='I am a placeholder' />)
  })
})