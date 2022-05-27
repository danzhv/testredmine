class SignupPage{
    signupButton(){
        return cy.get('[class="register"]').should('be.visible');
    }
    userLoginInput(){
        return cy.get('#user_login').should('be.visible');
    }
    userPasswordInput(){
        return cy.get('#user_password');
    }
    userPasswordConfirmationInput(){
        return cy.get('#user_password_confirmation');
    }
    userFirstnameInput(){
        return cy.get('#user_firstname');
    }
    userLastnameInput(){
        return cy.get('#user_lastname');
    }
    userMailInput(){
        return cy.get('#user_mail');
    }
    submitButton(){
        return cy.get('[name="commit"]');
    }
    checkIsErrorMessageDisplayed(){
        cy.get('#errorExplanation').then($error => {
            if ($error.is(':visible')){
                cy.log("Error displayed")
            }
        })
    }
    checkIfRedirectedToLoginPage(){
        cy.url().then(($url) => {
            if($url.includes('/login')){
                cy.log("Login page was opened")
            } else  {
                cy.log("Login page was not opened")
              }
        })
    }
}

module.exports = new SignupPage