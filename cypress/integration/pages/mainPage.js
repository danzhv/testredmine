class MainPage{
    openWebsite(){
        cy.visit("https://www.redmine.org");
    }
    homePageTab(){
        return cy.get('[class="home"]');
    }
}

module.exports = new MainPage