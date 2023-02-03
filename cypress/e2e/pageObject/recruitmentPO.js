class recruitmentPO {

    recuitmentTab() {
        return cy.get(".oxd-main-menu-item--name").contains('Recruitment')
    }

    vacancyTab() {
        return cy.get(".oxd-topbar-body-nav-tab-item").contains('Vacancies').click()
    }

    jobTitle() {
        // return cy.get('oxd-select-text--arrow').select('Account Assisstant').click();
        return cy.get('.oxd-select-text-input:first').should('be.visible')
    }

    jobTitleDropdown() {
        return cy.get('.oxd-select-text--active:first').click()
    }
    
    accountAssistant() {
        return cy.get('.oxd-select-dropdown').contains('Account Assistant')
        //yo contains lai dynamic kasari banaune?
    }

    // vacancy() {
    //     return cy.get('.oxd-select-text-input:second').should('be.visible')
    // }

    // vacancyDropdown() {
    //     return cy.get('.oxd-select-text--active:second').contains('')
    // }

    // vacancy() {
    //     return cy.get('.oxd-select-dropdown').click()
    // }

    // hiringManager() {
    //     return cy.get('.oxd-select-text-input:third').should('be.visible')
    // }

    // hiringManagerDropdown() {
    //     return cy.get('.oxd-select-text--active:third').contains('')
    // }

    // hiringManager() {
    //     return cy.get('.oxd-select-dropdown').click()
    // }

    // status() {
    //     return cy.get('.oxd-select-text-input:fourth').should('be.visible')
    // }

    // statusDropdown() {
    //     return cy.get('.oxd-select-text--active:fourth').contains('')
    // }

    // status() {
    //     return cy.get('.oxd-select-dropdown').click()
    // }

    // applyMethod() {
    //     return cy.get('.oxd-select-text-input:fifth').should('be.visible')
    // }

    // applyMethodDropdown() {
    //     return cy.get('.oxd-select-text--active:fifth').contains('')
    // }

    // applyMethod() {
    //     return cy.get('.oxd-select-dropdown').click()
    // }


    // togglebutton() {
    //     // return cy.get('button[type="button"]').click()
    //     // return cy.get('.oxd-icon-button')
    //     cy.get(('.oxd-icon bi-caret-down-fill').check('.oxd-icon bi-caret-down-fill'), () => {
    //         if (cy.get('.oxd-icon bi-caret-down-fill')) {
    //             return cy.get('.oxd-icon bi-caret-down-fill')
    //         }
    //         else { return cy.get(".oxd-icon bi-caret-up-fill") }
    //     })
    // }


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