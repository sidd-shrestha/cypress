// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
describe('Login', () => {
  it('should successfully login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard/index');
    cy.get('h6').should('contain', 'Dashboard');

    // it('switch between candidate and vacancies tab', () => {
    // var recruitmentTab = cy.get(".oxd-topbar-header-hamburger");

    var recruitment = cy.get(".oxd-main-menu-item--name");
    var vacancyTab = cy.get(".oxd-topbar-body-nav-tab-item");

    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');

    recruitment.click();
    recruitment.should('contain', 'Recruitment').click();
    cy.url().should('include', '/recruitment/viewCandidates');
    vacancyTab.should('contain', 'Vacancies').click();
    cy.url().should('include', '/recruitment/viewJobVacancy');
    vacancyTab.should('contain', 'Candidates').click();
    cy.url().should('include', '/recruitment/viewCandidates');
  });
});