class ActivityPage{
    activityTab(){
        return cy.get('[class="activity"]');
    }
    issuesCheckbox(){
        return cy.get('#show_issues')
    }
    changesetsCheckbox(){
        return cy.get('#show_changesets')
    }
    newsCheckbox(){
        return cy.get('#show_news')
    }
    wikiEditsCheckbox(){
        return cy.get('#show_wiki_edits')
    }
    messagesCheckbox(){
        return cy.get('#show_messages')
    }
    subprojectsCheckbox(){
        return cy.get('[name="with_subprojects"][value="1"]')
    }
    submitButton(){
        return cy.get('[class="button-small"]')
    }
    lastActivityForTodayLink(){
        return cy.xpath('//div[@id="activity"]//dl[1]//dt[1]//a')
    }
    previousPageButton(){
        return cy.xpath('//div[@style="float:left;"]')
    }
    exportToAtomLink(){
        return cy.get('[class="atom"]')
    }
}

module.exports = new ActivityPage