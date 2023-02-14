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
        return cy.get('.oxd-select-dropdown')
        // return cy.get('.oxd-select-dropdown').contains('Account Assistant')
        //yo contains lai dynamic kasari banaune?
    }

    jobTitleName() {
        // return cy.get('.oxd-select-dropdown').then(($jobTitle)=>{
        //     const jobTitles = $jobTitle
        //     const job = 'Account Assistant'
        //     expect(jobTitles).eq(job)
        // })
        // const job = 'Account Assistant'
        return cy.get('.oxd-select-dropdown > :nth-child(2) > span') ||
            cy.get('.oxd-select-dropdown > :nth-child(3) > span')
    }

    candidateName() {
        const inputCandidateName = cy.get('.oxd-autocomplete-text-input').type('a')
        return inputCandidateName.and(cy.get('.oxd-autocomplete-dropdown > :nth-child(1) > span').click({force:true}))
    }

    startDateOfApplication(){
        // const start = cy.get('.oxd-input oxd-input--active') 
        // return cy.get('.oxd-date-input').and(cy.get('.oxd-input'))
        return cy.get('input[placeholder="From"]').click().get('.--offset-4 > .oxd-calendar-date').click()
    }

    endDateOfApplication(){
        // const end = cy.get('input[placeholder="To"]') 
        return cy.get('input[placeholder="To"]').click().get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input-calendar > .oxd-calendar-wrapper > .oxd-calendar-dates-grid > :nth-child(3) > .oxd-calendar-date').click()
    }

    searchButton(){
        return cy.get('.orangehrm-left-space').click({force:true})
    }

    addButton(){
        return cy.get('.orangehrm-header-container > .oxd-button').click()
    }

    firstName(){
        return cy.get('input[name="firstName"]').type('Jay')
    }

    middleName(){
        return cy.get('input[name="middleName"]').type('Man')
    }

    lastName(){
        return cy.get('input[name="lastName"]').type('Shrestha')
    }

    vacancyDropdown(){
        return cy.get('.oxd-select-text--active:first').click().get(':nth-child(5) > span').click()
    }
    
    email(){
        return cy.get('input[fdprocessedid="gyfcpk"]').type('jay@gmail.com')
        return cy.get('.data-v-2fe357a6').type('jay@gmail.com')
        //Same class name for multiple input feilds
    }

    browse(){
        return cy.get('.oxd-file-div--active').click({force:true})
        //How does this work?
    }

    keywords(){
        return cy.get('input[placeholder="Enter comma seperated words..."]').type('new,hr,associate')
    }

    dateOfApplication(){
        return cy.get('input[placeholder="yyyy-mm-dd"]').click().get('.--offset-4 > .oxd-calendar-date').click()
    }

    notes(){
        return cy.get('.oxd-textarea--resize-vertical').type('lorem impsum')
    }

    consentCheckbox(){
        return cy.get('.oxd-checkbox-input').click()
    }

    saveButton(){
        return cy.get('button[type="submit"]').click()
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