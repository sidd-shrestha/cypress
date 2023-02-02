import adminPO from './pageObject/adminPO'

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
describe('Login', () => {
  let login = new adminPO();
  // beforeach: login
  it('should successfully login', () => {
    let login = new adminPO();
    login.visit();
    login.username();
    login.password();
    login.submit();
    login.url();
    login.header();

    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // cy.get('input[name="username"]').type('Admin');
    // cy.get('input[name="password"]').type('admin123');
    // cy.get('button[type="submit"]').click();
    // cy.url().should('include', '/dashboard/index');
    // cy.get('h6').should('contain', 'Dashboard');


  });
});