import recruitmentPO from "./pageObject/recruitmentPO"
import adminPO from "./pageObject/adminPO"
describe('Recruitment', () => {
    let login = new adminPO()
    let recruitment = new recruitmentPO()
    it('should search recruitment candidates', () => {
        login.visit(),
            login.username(),
            login.password(),
            login.submit(),
            login.url(),
            login.header()
        recruitment.recuitmentTab()
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
    it('should add recruitment candidates', () => {
        login.visit(),
            login.username(),
            login.password(),
            login.submit()
        recruitment.recuitmentTab()
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
    it('should remove recruitment candidates', () => {

    })
    it('should edit recruitment candidates', () => {

    })
    it('should search recruitment vacancies', () => {
        login.visit(),
            login.username(),
            login.password(),
            login.submit(),
            login.url(),
            login.header()
        recruitment.recuitmentTab()
        recruitment.vacancyTab()
        recruitment.vacancy()
        recruitment.vacancyDropdown()
        recruitment.hiringManager()
        recruitment.hiringManagerDropdown()
        recruitment.status()
        recruitment.statusDropdown()
    })
    it.only('should add recruitment vacancies', () => {
        login.visit(),
            login.username(),
            login.password(),
            login.submit()
        recruitment.recuitmentTab()
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
    it('should remove recruitment vacancies', () => {

    })
    it('should edit recruitment vacancies', () => {

    })
})