import recruitmentPO from "./pageObject/recruitmentPO"
import adminPO from "./pageObject/adminPO"
describe('Recruitment', () => {
    let login = new adminPO()
    beforeEach(() => {
        login.visit()
        login.username()
        login.password()
        login.submit()
    })
    let recruitment = new recruitmentPO()
    it('should recruitment', () => {
        recruitment.recuitmentTab().click()
        recruitment.recuitmentTab().url().should('include', '/recruitment/viewCandidates')
        recruitment.vacancyTab()
    })
})