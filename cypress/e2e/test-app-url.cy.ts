describe('Navigation Check', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Go to About Page', () => {
    cy.visit('/')
    cy.get('nav > a').contains('About').click()
    cy.url().should('equal', 'http://localhost:3000/about')
  })
  it('Go to Our Work Page', () => {

    cy.get('nav > a').contains('Our work').click()
    cy.url().should('equal', 'http://localhost:3000/work')
  })
  it('Go to Blog Page', () => {
    cy.get('nav > a').contains('Blog').click()
    cy.url().should('equal', 'http://localhost:3000/blog')
  })
  it('Go to Career Page', () => {
    cy.get('nav > a').contains('Career').click()
    cy.url().should('equal', 'http://localhost:3000/career')
  })
  it('Go to Giving back Page', () => {
    cy.get('nav > a').contains('Giving back').click()
    cy.url().should('equal', 'http://localhost:3000/giving')    
  })
  it('Go to Contact Page', () => {
    cy.get('nav > a').contains('Contact').click()
    cy.url().should('equal', 'http://localhost:3000/contact')
  })
})

