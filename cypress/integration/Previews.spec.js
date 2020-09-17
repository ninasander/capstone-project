/// <reference types="cypress" />

context('Previews', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('creates an enemy and a player preview', () => {
    cy.get('input[name="enemyName"]').type('Test Enemy')

    cy.get('input[name="HP"]').type('234')

    cy.get('input[name="armorClass"]').type('17')

    cy.get('input[name="initiative"]').type('20')

    cy.get('button').contains('Add Enemy').click()

    cy.get('input[name="playerName"]').type('Test Player')

    cy.get('input[name="playerArmorClass"]').type('19')

    cy.get('input[name="playerInitiative"]').type('13')

    cy.get('button').contains('Add Player').click()

    cy.get('button').contains('Show Created Enemies').click()

    cy.get('button').contains('Show Created Players').click()

    cy.get('h1').eq(1).contains('20')
    cy.get('h2').eq(0).contains('Test Enemy')

    cy.get('h1').eq(3).contains('13')
    cy.get('h2').eq(1).contains('Test Player')
  })
})
