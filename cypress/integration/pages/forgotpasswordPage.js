class ForgotPasswordPage{
    passwordRecoveryButton(){
        return cy.get('[href="/account/lost_password"]')
    }
    userEmailInput(){
        return cy.get('#mail')
    }
    submitButton(){
        return cy.get('[name="commit"]');
    }
    checkIsErrorMessageDisplayed(){
        cy.get('[class="flash error"]').then($error => {
            if ($error.is(':visible')){
                cy.log("Error displayed")
            }
        })
    }
}

module.exports = new ForgotPasswordPage