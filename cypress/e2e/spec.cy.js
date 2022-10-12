describe('Pages', () => {
  it('visits the Home page', () => {
    cy
      .visit('/')
      .get('header').should('be.visible')
      .get('main').should('be.visible')
      .get('section').should('be.visible');
  });

  it('visits the Home class page', () => {
    cy
      .visit('/home_class')
      .get('header').should('be.visible')
      .get('main').should('be.visible')
      .get('section').should('be.visible');
  });

  it('visits the Settings page', () => {
    cy
      .visit('/settings')
      .get('header').should('be.visible')
      .get('main').should('be.visible')
      .get('section').should('be.visible');
  });
});

describe('Navigation module', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('it check Navigation /home_class', () => {
    cy
      .get('header nav a').contains('a', 'Home class').click()
      .url().should('include', '/home_class')
  })

  it('it check Navigation /setting', () => {
    cy
      .get('header nav a').contains('a', 'Settings').click()
      .url().should('include', '/settings')
  })
})
