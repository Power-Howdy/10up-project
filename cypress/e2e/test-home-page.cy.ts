describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/"); // Assuming the page is served at the root URL
  });
  it("Video Background", () => {
    cy.get("#background__video").should("exist"); //check if there is a video
  })

  it("Image Count", () => {
    cy.get("img").should("have.length", 8); //check 7 images for workintro sectoin + prompt section img 1
  })

  it('Client Review', () => {
    cy.get("div.text-5xl.text-white.mb-10").contains("I can unequivocally").should("exist")
    cy.contains("Former Director of Engineering, WIRED")
  })
  
  it('Our Location', () => {
    cy.contains("Google Map Area");
  })

  it("Recent Blogs", () => {
    cy.contains("can integrate with WordPress. The presentation, “You Got Your AI In My WP: WordPress and Artificial Intelligence”, will explore a f")    
  });
});
