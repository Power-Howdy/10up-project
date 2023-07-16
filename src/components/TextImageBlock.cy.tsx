import React from 'react'
import TextImageBlock from './TextImageBlock'

describe('<TextImageBlock />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TextImageBlock content='Sample Content goes here. Sample Content goes here. Sample Content goes here Sample Content goes here Sample Content goes here Sample Content goes here Sample Content goes here Sample Content goes here Sample Content goes here Sample Content goes here Sample Content goes here Sample Content goes here Sample Content goes here Sample Content goes here Sample Content goes here Sample Content goes here Sample Content goes here Sample Content goes here Sample Content goes here Sample Content goes here' picture='https://10up.com/uploads/2022/12/Holiday-Gif_Blog.gif' picturePosition='left' title='Sample title here' />)
  })
})