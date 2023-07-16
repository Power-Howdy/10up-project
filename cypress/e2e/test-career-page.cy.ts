describe("Career Page", () => {
    beforeEach(() => {
      cy.visit("/career") // Assuming the page is served at the root URL
    });
    it("Video Background", () => {
      cy.get("#background__video").should("exist") //check if there is a video
    })
  
    it("Focus on", () => {
      cy.get("img").should("have.length", 3)
      cy.get("div").contains("he most important user experience at 10up is the way others experience us. We are motivated by helping our clients, colleagues, and community achi")
    })
  
    it('Tips', () => {
      cy.get("h1.text-4xl.my-5").contains("Help us make a better web").should("exist")
    })
    
    it('Benefits', () => {
      cy.get("p").contains("Bonus opportunities")
    })
  
    it("Vacancy Section", () => {
      cy.get("div.bg-gray-50.p-10.border-gray-300.border-2").should('have.class', 'hover:border-green-300')
    });
  });
  