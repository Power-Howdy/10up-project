describe("About Page", () => {
    beforeEach(() => {
      cy.visit("/about"); // Assuming the page is served at the root URL
    });
    it('Banner Section', () => {
      cy.get("h1").contains("We make a better web with finely crafted websites and tools for content creators"); //first component
      cy.get("button").contains("Hire us"); //check button
    })
  
    it('About Section', () => {
      cy.get("img").should("have.length.above", 3)
      cy.get("div").filter(".px-5.text-center").should("have.length.at.least", 3)
    })
    
  
    it('Boundary Section', () => {
      cy.get('div.text-left.mt-5 > p').should("exist").and("contain", " in a single zip code, and an international clientele requires a global perspective. From New York City, to the wilds of Idaho, to a dozen countries across Europe, our model empowers us to bring in the best strategists, designers, and engineers, wherever they may live. Veterans of commercial agencies, universities, start ups, nonprofits, and internatio")
    })
  
    it("Filer Button for Team Memebrs", () => {
      //filter button for team section
      cy.get("button.mx-3").should("have.length.at.least", 5)
    })
  });
  