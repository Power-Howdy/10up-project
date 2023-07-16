import React from 'react'
import ImageHover from './ImageHover'

describe('<ImageHover />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ImageHover src='https://10up.com/uploads/2022/12/Holiday-Gif_Blog.gif' text="I am a text appearing when the image is hovered" />)
  })
})