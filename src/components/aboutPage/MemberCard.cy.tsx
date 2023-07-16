import React from 'react'
import MemberCard from './MemberCard'

describe('<MemberCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MemberCard name='Edmond Vitel' role='Frontend Engineer & QA Engineer' avatar='https://10up.com/uploads/2016/10/Martha-Schmidt_avatar_1475874441-600x600.jpg' />)
  })
})