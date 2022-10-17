describe('Pages', () => {
  it('visits the home page', () => {
    cy
      .visit('/')
      .get('header').should('be.visible')
      .get('main').should('be.visible')
      .get('section').should('be.visible');
  });

  it('visits the home class page', () => {
    cy
      .visit('/home_class')
      .get('header').should('be.visible')
      .get('main').should('be.visible')
      .get('section').should('be.visible');
  });

  it('visits the settings page', () => {
    cy
      .visit('/settings')
      .get('header').should('be.visible')
      .get('main').should('be.visible')
      .get('section').should('be.visible');
  });
});

describe('Arithmetic Operation', () => {
  before(() => {
    cy.visit('/');
  });

  it('it operation test', () => {
    cy
      .get('section div:first').should('have.text', '')
      .get('section > div:last button').contains('2').click()
      .get('section > div:last button').contains('+').click()
      .get('section > div:last button').contains('2').click()
      .get('section > div:last button').contains('*').click()
      .get('section > div:last button').contains('2').click()
      .get('section > div:last button').contains('=').click();
    cy
      .get('section div:first').should('have.text', '6');
  });

  it('it remainder test', () => {
    cy
      .get('section div:first').should('have.text', '6')
      .get('section > div:last button').contains('%').click();
    cy
      .get('section div:first').should('have.text', '0,06');
  });

  it('it remove figure test', () => {
    cy
      .get('section div:first').should('have.text', '0,06')
      .get('section > div:last button').contains('CE').click();
    cy
      .get('section div:first').should('have.text', '');
  });

  it('it addition two negative numbers test', () => {
    cy
      .get('section div:first').should('have.text', '')
      .get('section > div:last button').contains('-').click()
      .get('section > div:last button').contains('2').click()
      .get('section > div:last button').contains('-').click()
      .get('section > div:last button').contains('1').click()
      .get('section > div:last button').contains('=').click();
    cy
      .get('section div:first').should('have.text', '-3')
      .get('section > div:last button').contains('CE').click();
    cy
      .get('section div:first').should('have.text', '');
  });

});

describe('History module', () => {
  before(() => {
    cy.visit('/');
  });

  it('it check history list', () => {
    cy
      .get('main > section:last ul').should('be.empty')
      .get('section > div:last button').contains('1').click()
      .get('section > div:last button').contains('*').click()
      .get('section > div:last button').contains('2').click()
      .get('section > div:last button').contains('+').click()
      .get('section > div:last button').contains('(').click()
      .get('section > div:last button').contains('2').click()
      .get('section > div:last button').contains('+').click()
      .get('section > div:last button').contains('2').click()
      .get('section > div:last button').contains(')').click()
      .get('section > div:last button').contains('=').click()
      .get('main > section:last ul').contains('li', '1*2+(2+2) = 6');
  });
});

describe('Display module', () => {
  before(() => {
    cy.visit('/');
  });

  it('it check showing display', () => {
    cy
      .get('section div:first').should('have.text', '')
      .get('section > div:last button').contains('1').click()
      .get('section > div:last button').contains('+').click()
      .get('section > div:last button').contains('2').click();

    cy
      .get('section div:first').should('have.text', '1+2');
  });
});

describe('Keypad module', () => {
  before(() => {
    cy.visit('/');
  });

  it('it check keypad', () => {
    cy.get('section > div:last button')
      .should('have.length', 21)
      .within(() => {
        cy.root().eq(0).should('have.text', 'C');
        cy.root().eq(1).should('have.text', '7');
        cy.root().eq(2).should('have.text', '8');
        cy.root().eq(3).should('have.text', '9');
        cy.root().eq(4).should('have.text', '*');
        cy.root().eq(5).should('have.text', '-');
        cy.root().eq(6).should('have.text', '4');
        cy.root().eq(7).should('have.text', '5');
        cy.root().eq(8).should('have.text', '6');
        cy.root().eq(9).should('have.text', '/');
        cy.root().eq(10).should('have.text', '+');
        cy.root().eq(11).should('have.text', '1');
        cy.root().eq(12).should('have.text', '2');
        cy.root().eq(13).should('have.text', '3');
        cy.root().eq(14).should('have.text', '=');
        cy.root().eq(15).should('have.text', '.');
        cy.root().eq(16).should('have.text', '(');
        cy.root().eq(17).should('have.text', '0');
        cy.root().eq(18).should('have.text', ')');
        cy.root().eq(19).should('have.text', 'CE');
        cy.root().eq(20).should('have.text', '%');
      });
  });
});

describe('Navigation module', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('it check navigation /home_class', () => {
    cy
      .get('nav a').contains('Home class').click()
      .url().should('include', '/home_class');
  });

  it('it check navigation /setting', () => {
    cy
      .get('nav a').contains('Settings').click()
      .url().should('include', '/settings');
  });
});

describe('Select module', () => {
  before(() => {
    cy.visit('/settings');
  });

  const themes = ['Colored Theme', 'Light Theme', 'Dark Theme'];

  it('it check select module', () => {
    cy
      .get('select option')
      .contains(themes[0])
      .should('be.checked');

    cy
      .get('select').select(themes[1])
      .get('select option')
      .contains(themes[1])
      .should('be.checked');

    cy
      .get('select').select(themes[2])
      .get('select option')
      .contains(themes[2])
      .should('be.checked');
  });
});
