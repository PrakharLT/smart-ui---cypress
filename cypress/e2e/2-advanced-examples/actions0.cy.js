describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit("https://lambdatest.com")
    cy.screenshot('my-image')
  })
})
