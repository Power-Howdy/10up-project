import React from 'react'
import ButtonCustomized from './ButtonCustomized'

describe('<ButtonCustomized />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ButtonCustomized type='yellow' label='yellow button' handleClick={() => alert("look! I am clicked!")}/>)
  })
})