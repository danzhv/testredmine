class HistoryPage{
    historySidebarLink(){
        return cy.get('[href="/projects/redmine/wiki/date_index"]');
    }
    restUsersLink(){
        return cy.get('[href="/projects/redmine/wiki/Rest_Users"]');
    }
    usersAnchor(){
        return cy.get('[href="#Users"][class="wiki-anchor"]');
    }
    usersFormatAnchor(){
        return cy.get('[href="#Usersformat"][class="wiki-anchor"]');
    }
    getAnchor(){
        return cy.get('[href="#GET"][class="wiki-anchor"]');
    }
    postAnchor(){
        return cy.get('[href="#POST"][class="wiki-anchor"]');
    }
    usersIdFormatAnchor(){
        return cy.get('[href="#usersidformat"][class="wiki-anchor"]');
    }
    get2Anchor(){
        return cy.get('[href="#GET-2"][class="wiki-anchor"]');
    }
    putAnchor(){
        return cy.get('[href="#PUT"][class="wiki-anchor"]');
    }
    deleteAnchor(){
        return cy.get('[href="#DELETE"][class="wiki-anchor"]');
    }
    seeAlsoAnchor(){
        return cy.get('[href="#See-also"][class="wiki-anchor"]');
    }
    restMembershipsLink(){
        return cy.get('[href="/projects/redmine/wiki/Rest_Memberships"]');
    }
    restGroupsLink(){
        return cy.get('[href="/projects/redmine/wiki/Rest_Groups"]')
    }
    historyButton(){
        return cy.get('[href="/projects/redmine/wiki/Rest_Users/history"]')
    }
    seeDifferencesButton(){
        return cy.get('[class="small"][name="commit"]')
    }
    exportToAtomLink(){
        return cy.get('[href="/projects/redmine/activity.atom?show_wiki_edits=1"]');
    }
}
module.exports = new HistoryPage