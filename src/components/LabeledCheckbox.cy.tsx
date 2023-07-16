import React from 'react'
import LabeledCheckbox from './LabeledCheckbox'

describe('<LabeledCheckbox />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LabeledCheckbox label='I am a label that can be checked' />)
  })
})