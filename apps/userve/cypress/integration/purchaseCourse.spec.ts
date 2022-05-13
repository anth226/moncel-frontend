/// <reference types="cypress" />

describe('State picker', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('works', () => {
    const firstState = 'Arkansas'; // needs to be in state list
    const statepicker = cy.get('[data-test=statepicker]');
    statepicker.select(firstState).should('have.value', firstState);

    const secondState= 'Illinois';
    statepicker.select(secondState).should('have.value', secondState);
  });

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

describe('Course purchasing', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('works for food handler', () => {
    const state = 'Arkansas';
    const PURCHASE_URL = "https://my.userve.com/urlcheckout/add?product=6&amp;qty=1";
    // Select state
    cy.get('[data-test=statepicker]').select(state);
    // Navigate to courses page
    cy.get('[data-test=statepicker-btn]').click();
    cy.get('[data-test=statepicker]').should('have.value', state);

    const expectedDocumentCourseName = encodeURIComponent("Food Handler Training")
    cy.get(`[data-test*="${expectedDocumentCourseName}" i]`).should('be.visible');
    cy.get(`[data-test*="${expectedDocumentCourseName}" i] img`).click();

    // Purchase call should have been made
    cy.intercept(PURCHASE_URL, cy.spy().as('purchaseRequest'));
    cy.get('[data-test="enroll-button"]').click();
    cy.get('@purchaseRequest').should('have.been.called');
  });

})