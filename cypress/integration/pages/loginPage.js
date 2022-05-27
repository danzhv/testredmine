class LoginPage{
    loginButton(){
        return cy.get('[class="login"]')
    }
    userLoginInput(){
        return cy.get('#username')
    }
    userPasswordInput(){
        return cy.get('#password');
    }
    submitButton(){
        return cy.get('[name="login"]');
    }
    checkIsErrorMessageDisplayed(){
        cy.get('[class="flash error"]').then($error => {
            if ($error.is(':visible')){
                cy.log("Error displayed")
            }
        })
    }
    emailActivationLink(){
        return cy.get('a[href="/account/activation_email"]');
    }
    checkIfEmailActivationSent(){
        cy.get('[class="flash notice"]').then($error => {
            if ($error.is(':visible')){
                cy.log("Email activation sent")
            }
        })
    }
}

module.exports = new LoginPage