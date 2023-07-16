import React from 'react'
import BlogComponent from './BlogComponent'

describe('<BlogComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BlogComponent title="10up Turns 12" author='Jake Goldman' avatar='https://10up.com/uploads/2014/09/Jake-Goldman_avatar_1410997004-600x600.jpg' picture='https://10up.com/uploads/2022/12/Holiday-Gif_Blog.gif' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac tortor tincidunt, pulvinar tellus eget, pharetra sem. Fusce sit amet erat a quam aliquam feugiat laoreet nec lectus. Morbi enim arcu, convallis id scelerisque condimentum, tempus et nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sit amet elit eu velit euismod posuere a vitae arcu. Aenean vestibulum ullamcorper nisl at dapibus. Suspendisse ac finibus libero. In non lobortis urna. In felis odio, tempus id turpis eu, vehicula pellentesque enim. '/>)
  })
})