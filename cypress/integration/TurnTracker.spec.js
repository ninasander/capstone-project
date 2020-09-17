/// <reference types="cypress" />

context('TurnTracker', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('navigates from the first turn to the next one and from the first round to the next one', () => {
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

    cy.get('p').contains('Turn:').contains('1/2')
    cy.get('p').contains('Round').contains('1')

    cy.get('button').contains('Next Turn').click()

    cy.get('p').contains('Turn:').contains('2/2')
    cy.get('p').contains('Round').contains('1')

    cy.get('button').contains('Next Turn').click()

    cy.get('p').contains('Turn:').contains('1/2')
    cy.get('p').contains('Round').contains('2')
  })
})
