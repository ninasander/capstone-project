/// <reference types="cypress" />

context('Previews', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('edits an enemy entry', () => {
    cy.get('input[name="enemyName"]').type('Test Enemy')

    cy.get('input[name="HP"]').type('234')

    cy.get('input[name="armorClass"]').type('17')

    cy.get('input[name="initiative"]').type('20')

    cy.get('button').contains('Add Enemy').click()

    cy.get('button').contains('Show Created Enemies').click()

    cy.get('h1').eq(1).contains('20')
    cy.get('h2').eq(0).contains('Test Enemy')

    cy.get('button').contains('Edit').click()

    cy.get('input[name="enemyName"]').clear().type('Edited Enemy')

    cy.get('button').contains('Save Enemy').click()

    cy.get('h2').eq(0).contains('Edited Enemy')
  })
  it('deletes an entry', () => {
    cy.get('input[name="enemyName"]').type('Test Enemy')

    cy.get('input[name="HP"]').type('234')

    cy.get('input[name="armorClass"]').type('17')

    cy.get('input[name="initiative"]').type('20')

    cy.get('button').contains('Add Enemy').click()

    cy.get('button').contains('Show Created Enemies').click()

    cy.get('h1').eq(1).contains('20')
    cy.get('h2').eq(0).contains('Test Enemy')

    cy.get('button').contains('Edit').click()

    cy.get('input[name="enemyName"]').clear().type('Edited Enemy')

    cy.get('button').contains('Save Enemy').click()

    cy.get('button').contains('✕').click()
    cy.contains('Edited Enemy').should('not.be.visible')
  })
})
