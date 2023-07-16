import React from 'react'
import LabeledInput from './LabeledInput'
describe('<LabeledInput />', () => { 
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LabeledInput label='Text input'  />)
  })
})