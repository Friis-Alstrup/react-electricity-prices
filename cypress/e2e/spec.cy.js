describe('My first test', () => {
  it('Visits my electric prices site and change region', () => {
    cy.visit('http://localhost:5173')
    cy.get('.MuiFormControl-root')
      .click()
    cy.get('#menu-')
      .get('.MuiList-root')
      .find('li[data-value="DK1"]')
      .click()
  })
})