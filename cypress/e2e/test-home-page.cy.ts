describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/"); // Assuming the page is served at the root URL
  });
  it("renders all components correctly", () => {
    cy.get("#background__video").should("exist"); //check if there is a video
    cy.get("img").should("have.length", 8); //check 7 images for workintro sectoin + prompt section img 1
    //for
    cy.get(".bg-slate-600").should("exist");
    cy.contains(
      "I can unequivocally say you are one of the best consulting teams I have worked with in 15 years."
    ).should("exist");
    cy.contains("Former Director of Engineering, WIRED");
      //for location section
    cy.contains("Google Map Area");
    //blog section
    cy.contains("can integrate with WordPress. The presentation, “You Got Your AI In My WP: WordPress and Artificial Intelligence”, will explore a f")    
  });
});
