/// <reference types="cypress" />

describe('State picker', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('works', () => {
    const firstState = 'Arkansas'; // needs to be in state list
    cy.get('[data-test=statepicker]').select(firstState);
    cy.get('[data-test=statepicker-value]').should('have.text', firstState);

    const secondState= 'Illinois';
    cy.get('[data-test=statepicker]').select(secondState);
    cy.get('[data-test=statepicker-value]').should('have.text', secondState);
  });

  it('preserves state selection on navigation, showing some expected courses', () => {
    let state = 'Illinois';
    const expectedCourseTitle = "Illinois BASSET Certification";
    cy.get('[data-test=statepicker]').select(state).wait(500);
    cy.get('[data-test=statepicker-value]').should('have.text', state);
    const statepickerBtn = cy.get('[data-test=statepicker-btn]');
    statepickerBtn.click().wait(500);
    cy.get('[data-test=statepicker-value]').should('have.text', state);

    // Expect a unique course on this page
    cy.get(`[data-test="course-card-${encodeURIComponent(expectedCourseTitle)}"]`).should('be.visible');
  });
});

describe('Course purchasing', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('works for food handler', () => {
    Cypress.config('defaultCommandTimeout', 10000);
    const state = 'Arkansas';
    const PURCHASE_URL = "https://my.userve.com/urlcheckout/add?product=6&amp;qty=1";
    // Select state
    cy.get('[data-test=statepicker]').select(state).wait(500);
    // Navigate to courses page
    cy.get('[data-test=statepicker-btn]').click();
    cy.get('[data-test=statepicker-value]').should('have.text', state);

    const expectedDocumentCourseName = encodeURIComponent("Food Handler Training")
    cy.get(`[data-test*="${expectedDocumentCourseName}" i]`).should('be.visible');
    cy.get(`[data-test*="${expectedDocumentCourseName}" i] img`).click().wait(1000);

    // Purchase call should have been made
    cy.intercept(PURCHASE_URL, cy.spy().as('purchaseRequest'));
    cy.get('[data-test="enroll-button"]').should("be.visible").click();
    cy.get('@purchaseRequest').should('have.been.called');
  });

});
