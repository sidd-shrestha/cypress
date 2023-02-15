import recruitmentPO from "./pageObject/recruitmentPO"
import adminPO from "./pageObject/adminPO"
describe('Recruitment', () => {
    let login = new adminPO()
    let recruitment = new recruitmentPO()
    it.only('should search recruitment candidates', () => {
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
        recruitment.cancelButton()
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
    it('should add recruitment vacancies', () => {

    })
    it('should remove recruitment vacancies', () => {

    })
    it('should edit recruitment vacancies', () => {

    })
})