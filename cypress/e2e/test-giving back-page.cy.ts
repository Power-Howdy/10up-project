describe("Giving back Page", () => {
    beforeEach(() => {
      cy.visit("/giving") // Assuming the page is served at the root URL
    });

    it("Banner Section", () => {
      cy.get("div").filter(".absolute").should("contain", "Giving Back"); //first component
    })
  
    it("Representing", () => {
      cy.get("div").filter(".text-2xl.italic.my-8").should('have.length', 4)
    })
  
    it('What we believe', () => {
      cy.get("button").contains("HIRE US").should("exist")
    })
    
    it('Achievements', () => {
      cy.get("div").contains("of the 18 people who hold the keys to WordPress work at 10up. We've contri").should("exist")
    })
  
    
  });
  