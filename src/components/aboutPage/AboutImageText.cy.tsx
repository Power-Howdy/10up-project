import React from 'react'
import AboutImageText from './AboutImageText'

describe('<AboutImageText />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AboutImageText imageUrl={"https://10up.com/wp-content/themes/10up-sept2016/assets/img/icon-strategy.png"} title="Strategy" content={"Should I build an app or a responsive website? Am I maximizing my ad revenue? Why don’t my visitors click “sign up”? How many 10uppers does it take to screw in a website? We don’t just build: we figure out the plan."}/>)
  })
})