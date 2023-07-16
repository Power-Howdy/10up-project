describe("About Page", () => {
    beforeEach(() => {
      cy.visit("/about"); // Assuming the page is served at the root URL
    });
    it("renders all components correctly", () => {
      cy.get("h1").contains("We make a better web with finely crafted websites and tools for content creators"); //first component
      cy.get("button").contains("Hire us"); //check button
      //about section 
      cy.get("div").filter(".px-5.text-center").should("have.length.at.least", 3);
      //boundary section
      cy.get('div.text-left.mt-5 > p').should("exist").and("contain", " in a single zip code, and an international clientele requires a global perspective. From New York City, to the wilds of Idaho, to a dozen countries across Europe, our model empowers us to bring in the best strategists, designers, and engineers, wherever they may live. Veterans of commercial agencies, universities, start ups, nonprofits, and internatio");
      //filter button for team section
      cy.get("button.mx-3").should("have.length.at.least", 5)
      
      //last member of team, so it doesn't render at first
      //cy.contains("TYLER LAL").should('be.visible')
    });
  });
  