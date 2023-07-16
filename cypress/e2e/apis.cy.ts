describe('API Tests', () => {
    it('blogs', () => {
      cy.request('POST', '/api/get-blogs')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.data.data).to.have.length(10);
        });
    });
    it('members', () => {
        cy.request('POST', '/api/get-members')
          .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.data).to.have.length(287);
          });
      });
  });