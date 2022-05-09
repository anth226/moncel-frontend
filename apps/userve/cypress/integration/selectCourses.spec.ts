/// <reference types="cypress" />

describe('Selecting states', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('works', () => {
    const firstState = 'Arkansas'; // needs to be in state list
    const statepicker = cy.get('[data-test=statepicker]');
    statepicker.select(firstState).should('have.value', firstState);

    const secondState= 'Illinois';
    statepicker.select(secondState).should('have.value', secondState);
  })

  it('preserves state selection on navigation, showing some expected courses', () => {
    let state = 'Illinois';
    const expectedCourseTitle = "Illinois BASSET Certification";
    const statepicker = cy.get('[data-test=statepicker]');
    statepicker.select(state).should('have.value', state);
    const statepickerBtn = cy.get('[data-test=statepicker-btn]');
    statepickerBtn.click();
    cy.get('[data-test=statepicker]').should('have.value', state);

    // Expect a unique course on this page
    cy.get(`[data-test="course-card-${encodeURIComponent(expectedCourseTitle)}"]`).should('be.visible');
  });
});

  