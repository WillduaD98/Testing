import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders start button and loads a question after click', () => {
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' })


    mount(<Quiz />);

    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.contains('What is the output of print(2 ** 3)?').should('exist');
    cy.contains('8').should('exist');
  });
});
