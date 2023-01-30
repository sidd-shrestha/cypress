class adminPO {

    visit() {
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    username() {
        return cy.get('input[name="username"]').type('Admin');
    }

    password() {
        return cy.get('input[name="password"]').type('admin123');
    }

    submit() {
        return cy.get('button[type="submit"]').click();
    }

    url() {
        return cy.url().should('include', '/dashboard/index');
    }

    header() {
        return cy.get('h6').should('contain', 'Dashboard');
    }
}

export default adminPO