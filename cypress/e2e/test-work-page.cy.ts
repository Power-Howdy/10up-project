describe('Work page', () => {
  beforeEach(() => {
    cy.visit('/work')
  })
  it('Banner Section', () => {
    cy.get("div").filter(".absolute").should("contain", "Our Work"); //first component
  })

  it('Image Count', () => {
    cy.get("img").should("have.length", 9)
  })

  it('Client Review', () => {
    cy.get("div.text-5xl.text-white.mb-10").contains("I can unequivocally")
  })

  it("Prompt Section", () => {
    cy.get("button").should("have.length.at.least", 2);
    cy.get("div").contains("Let's build something")
  })
  
})