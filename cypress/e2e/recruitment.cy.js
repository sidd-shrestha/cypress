import recruitmentPO from "./pageObject/recruitmentPO"
import adminPO from "./pageObject/adminPO"
describe('Recruitment', () => {
    let login = new adminPO()
    let recruitment = new recruitmentPO()
    it('should search recruitment candidates', () => {
        login.visit(),
            login.username(),
            login.password(),
            login.submit()
        recruitment.recuitmentTab().click()
        recruitment.recuitmentTab().url().should('include', '/recruitment/viewCandidates')
        // recruitment.vacancyTab()
        // recruitment.togglebutton()
        // recruitment.jobTitle()
        recruitment.jobTitleDropdown()
        recruitment.accountAssistant().contains('Account Assistant').click()
        // recruitment.jobTitleName().click()
        // recruitment.candidateName()
        recruitment.startDateOfApplication()
        recruitment.endDateOfApplication()
        recruitment.searchButton()
    })
    it.only('should add recruitment candidates', () => {
        login.visit(),
            login.username(),
            login.password(),
            login.submit()
        recruitment.recuitmentTab().click()
        recruitment.recuitmentTab().url().should('include', '/recruitment/viewCandidates')
        recruitment.addButton()
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
    })
    it('should remove recruitment candidates', () => {

    })
    it('should edit recruitment candidates', () => {

    })
    it('should search recruitment vacancies', () => {

    })
    it('should add recruitment vacancies', () => {

    })
    it('should remove recruitment vacancies', () => {

    })
    it('should edit recruitment vacancies', () => {

    })
})