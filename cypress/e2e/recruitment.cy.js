import recruitmentPO from "./pageObject/recruitmentPO"
import adminPO from "./pageObject/adminPO"
describe('Recruitment', () => {
    let login = new adminPO()
    let recruitment = new recruitmentPO()
    it('should recruitment', () => {
        login.visit(),
        login.username(),
        login.password(),
        login.submit()
        recruitment.recuitmentTab().click()
        recruitment.recuitmentTab().url().should('include', '/recruitment/viewCandidates')
        // recruitment.vacancyTab()
        // recruitment.togglebutton()
        recruitment.jobTitle()
        recruitment.jobTitleDropdown()
        recruitment.accountAssistant().click()
    })
})