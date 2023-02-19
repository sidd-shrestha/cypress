import recruitmentPO from "./pageObject/recruitmentPO"
import adminPO from "./pageObject/adminPO"
describe('Recruitment', () => {
    let login = new adminPO()
    let recruitment = new recruitmentPO()
    beforeEach('should login and open recruitment tab', () => {
        login.visit(),
            login.username(),
            login.password(),
            login.submit(),
            login.url(),
            login.header()
        recruitment.recuitmentTab()
    })
    it('should search candidates', () => {
        // recruitment.vacancyTab()
        // recruitment.togglebutton()
        // recruitment.jobTitle()
        recruitment.jobTitleDropdown()
        recruitment.accountAssistant().contains('Account Assistant').click()
        // recruitment.jobTitleName().click()
        // recruitment.candidateName()
        recruitment.startDateOfApplication()
        recruitment.endDateOfApplication()
        recruitment.keywords()
        recruitment.applyMethod()
        recruitment.applyMethodDropdown()
        recruitment.manual()
        recruitment.searchButton()
        recruitment.resethButton()
    })
    it('should add candidates', () => {
        recruitment.addButton()
        recruitment.addCandidate()
        recruitment.firstName()
        recruitment.middleName()
        recruitment.lastName()
        recruitment.vacancyDropdown()
        // recruitment.email()
        // recruitment.browse()
        recruitment.keywords()
        recruitment.dateOfApplication()
        recruitment.notes()
        recruitment.consentCheckbox()
        recruitment.saveButton()
        recruitment.cancelButton().should('include', '/web/index.php/recruitment/viewCandidates')
    })
    it('should sort candidates in ascending order', () => {
        recruitment.sortAscendingVacancy()
        recruitment.sortAscendingJobTitle()
        recruitment.sortAscendingHiringManager()
        recruitment.sortAscendingDateOfApplication
        recruitment.sortAscendingStatus()
    })
    it.only('should sort candidates in descending order', () => {
        recruitment.sortDescendingVacancy()
        recruitment.sortDescendingJobTitle()
        recruitment.sortDescendingHiringManager()
        recruitment.sortAscendingDateOfApplication()
        recruitment.sortDescendingStatus()
    })
    it('should remove candidates', () => {

    })
    it('should edit candidates', () => {

    })
    it('should search vacancies', () => {
        recruitment.vacancyTab()
        recruitment.vacancy()
        recruitment.vacancyDropdown()
        recruitment.hiringManager()
        recruitment.hiringManagerDropdown()
        recruitment.status()
        recruitment.statusDropdown()
    })
    it('should add vacancies', () => {
        recruitment.vacancyTab()
        recruitment.addButton()
        recruitment.addVacancy()
        recruitment.vacancyName()
        recruitment.vacancy()
        recruitment.vacancyDropdown() // this should be Job Title but the code is same for both
        recruitment.notes() // this should be Description
        // recruitment.candidateName() //this should be Hiring Manager
        recruitment.hiringManagerName()
        recruitment.numberOfPositions()
        recruitment.activeCheckboxSwitch()
        recruitment.publishInRssFeedAndWebPage()
        // recruitment.saveButton()
        // recruitment.editVacancy()
        // recruitment.saveButton() // clicking the save Button again leads to the same page
        recruitment.cancelButton().should('include', '/web/index.php/recruitment/viewJobVacancy')
    })
    it('should sort vacancies', () => {
        recruitment.vacancyTab()
    })
    it('should remove vacancies', () => {

    })
    it('should edit vacancies', () => {

    })
})