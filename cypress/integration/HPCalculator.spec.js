/// <reference types="cypress" />

context('HPCalculator', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('input[name="enemyName"]').type('Test Enemy')

    cy.get('input[name="HP"]').type('50')

    cy.get('input[name="armorClass"]').eq(0).type('17')

    cy.get('input[name="initiative"]').eq(0).type('20')

    cy.get('button').contains('Add Enemy').click()

    cy.get('input[name="playerName"]').type('Test Player')

    cy.get('input[name="armorClass"]').eq(1).type('19')

    cy.get('input[name="initiative"]').eq(1).type('13')

    cy.get('button').contains('Add Player').click()

    cy.get('button').contains('Start Encounter').click()
  })
  it('gets an input', () => {
    cy.get('[name=HPInput]').type('5').should('have.value', '5')
  })

  it('calculates current HP based on HP input', () => {
    cy.get('[name=HPInput]').type('5')
    cy.get('button').contains('-').click()
    cy.get('p').contains('HP').contains('45')
  })
})
