class OverviewPage{
    overviewTab(){
        return cy.get('[class="overview"]');
    }
    viewAllIssuesLink(){
        return cy.get('[href="/projects/redmine/issues?set_filter=1"]');
    }
    administratorAccountLink(){
        return cy.get('[href="/users/1"]');
    }
    contributorAccountLink(){
        return cy.get('[href="/users/308290"]');
    }
    viewAllNewsLink(){
        return cy.xpath('//div [@class="news box"]/..//p//a[@href="/projects/redmine/news"]');
    }
}

module.exports = new OverviewPage