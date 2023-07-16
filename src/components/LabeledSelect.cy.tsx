import React from 'react'
import LabeledSelect from './LabeledSelect'

describe('<LabeledSelect />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LabeledSelect options={["option1", "option2", "option3"]} label='Customized select'/>)
  })
})