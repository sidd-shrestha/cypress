class recruitmentPO {

    recuitmentTab() {
        return cy.get(".oxd-main-menu-item--name").contains('Recruitment');
    }

    vacancyTab() {
        return cy.get(".oxd-topbar-body-nav-tab-item").contains('Vacancies').click();
    }

    


    // it('switch between candidate and vacancies tab', () => {
    // var recruitmentTab = cy.get(".oxd-topbar-header-hamburger");

    // var recruitment = return cy.get(".oxd-main-menu-item--name").contains('Recruitment');
    // let vacancyTab = cy.get(".oxd-topbar-body-nav-tab-item").should('contain', 'Vacancies');

    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');

    // recruitment.click();
    // recruitment.click();
    // cy.url().should('include', '/recruitment/viewCandidates');
    // vacancyTab.click();
    // cy.url().should('include', '/recruitment/viewJobVacancy');
    // vacancyTab.should('contain', 'Candidates').click();
    // cy.url().should('include', '/recruitment/viewCandidates');

}
export default recruitmentPO