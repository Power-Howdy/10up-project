import React from 'react'
import TopBanner from './TopBanner'

describe('<TopBanner />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TopBanner title='This banner comes to the top of the page' imageUrl='https://10up.com/wp-content/themes/10up-sept2016/dist/img/header-page-our-work.jpg' />)
  })
})