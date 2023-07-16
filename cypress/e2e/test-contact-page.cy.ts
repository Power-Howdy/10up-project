describe("Contact Page", () => {
    beforeEach(() => {
      cy.visit("/contact") // Assuming the page is served at the root URL
    });

    it("First Section", () => {
      cy.get("div").filter(".italic.text-3xl.my-5").should("contain", "Let's Build Something Great"); //first component
    })
  
    it("Form", () => {
      cy.get("input").should('have.length', 6)
      cy.get("select").should('have.length', 2)
      cy.get("button.text-white.bg-blue-700").should('have.length', 1)
    })  
    
  });
  