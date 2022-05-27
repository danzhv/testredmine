class RepositoryPage{
    repositoryTab(){
        return cy.get('[class="repository"]');
    }
    expandBranchesButton(){
        return cy.xpath('//table[@class="list entries"]//tr[@class=" entry dir"][1]//td[1]//span');
    }
    stable06Link(){
        return cy.get('[href="/projects/redmine/repository/show/branches/0.6-stable"]');
    }
    stable06AppLink(){
        return cy.get('[href="/projects/redmine/repository/show/branches/0.6-stable/app"]');
    }
    stable06AppApisLink(){
        return cy.get('[href="/projects/redmine/repository/show/branches/0.6-stable/app/apis"]');
    }
    stable06AppApisSysApiLink(){
        return cy.get('[href="/projects/redmine/repository/changes/branches/0.6-stable/app/apis/sys_api.rb"]');
    }
    viewLink(){
        return cy.get('[href="/projects/redmine/repository/changes/branches/0.6-stable/app/apis/sys_api.rb"]');
    }
    authorshipLink(){
        return cy.get('[href="/projects/redmine/repository/annotate/branches/0.6-stable/app/apis/sys_api.rb"]');
    }
    downloadLink(){
        return cy.get('[href="/projects/redmine/repository/raw/branches/0.6-stable/app/apis/sys_api.rb"]');
    }
    historyLink(){
        return cy.get('[href="/projects/redmine/repository/entry/branches/0.6-stable/app/apis/sys_api.rb"]');
    }
    rootLink(){
        return cy.xpath('//div [@id="content"]//h2//a[1]');
    }
    exportToAtomLink(){
        return cy.get('[class="atom"]');
    }
    viewAllRevisions(){
        return cy.get('[href="/projects/redmine/repository/revisions"]');
    }
    fifthRadiobutton(){
        return cy.get('#cb-5');
    }
    lastRadiobutton(){
        return cy.get('#cbto-25');
    }
    viewDifferenceButton(){
        return cy.xpath('//input[@type="submit"][not(contains(@name, "commit"))]')
    }
    rowRadiobutton(){
        return cy.get('#type_sbs')
    }
    secondPageLink(){
        return cy.get('[href="/projects/redmine/repository/revisions?page=2"][class="page"]')
    }
    nextPageLink(){
        return cy.get('[class="next"]')
    }
    revisionsPerPage100Link(){
        return cy.get('[href="/projects/redmine/repository/revisions?per_page=100"]')
    }
    revisionsSearch(){
        return cy.get('#rev')
    }
    okButton(){
        return cy.get('[name="commit"]')
    }
    backLink(){
        return cy.get('[href="javascript:history.back()"]')
    }
}

module.exports = new RepositoryPage