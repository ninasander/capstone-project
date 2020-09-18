/// <reference types="cypress" />

context('CreatePage', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('has 7 inputs and 3 buttons', () => {
    cy.get('input').should('have.length', '7')
    cy.get('button').should('have.length', '3')
  })
  it('creates an enemy and a player entry and starts an encounter', () => {
    cy.get('input[name="enemyName"]').type('Test Enemy')

    cy.get('input[name="HP"]').type('234')

    cy.get('input[name="armorClass"]').type('17')

    cy.get('input[name="initiative"]').type('20')

    cy.get('button').contains('Add Enemy').click()

    cy.get('input[name="playerName"]').type('Test Player')

    cy.get('input[name="playerArmorClass"]').type('19')

    cy.get('input[name="playerInitiative"]').type('13')

    cy.get('button').contains('Add Player').click()

    cy.get('button').contains('Start Encounter').click()
  })
})
