describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.get('nav > a').contains('About').click()
    cy.url().should('equal', 'http://localhost:3000/about')
    cy.wait(1000)


    cy.get('nav > a').contains('Our work').click()
    cy.url().should('equal', 'http://localhost:3000/work')
    cy.wait(1000)

    cy.get('nav > a').contains('Blog').click()
    cy.url().should('equal', 'http://localhost:3000/blog')
    cy.wait(1000)

    cy.get('nav > a').contains('Career').click()
    cy.url().should('equal', 'http://localhost:3000/career')
    cy.wait(1000)

    cy.get('nav > a').contains('Giving back').click()
    cy.url().should('equal', 'http://localhost:3000/giving')    
    cy.wait(1000)

    cy.get('nav > a').contains('Contact').click()
    cy.url().should('equal', 'http://localhost:3000/contact')
    cy.wait(1000)

  })
})

