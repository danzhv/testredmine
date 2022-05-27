class SearchPage{
    searchInput(){
        return cy.get('[class="small"]');
    }
    searchScopeSelect(){
        return cy.get('#scope');
    }
    allWordsCheckbox(){
        return cy.get('#all_words');
    }
    titlesOnlyCheckbox(){
        return cy.get('#titles_only');
    }
    newsCheckbox(){
        return cy.get('#news');
    }
    changesetsCheckbox(){
        return cy.get('#changesets');
    }
    wikiPagesCheckbox(){
        return cy.get('#wiki_pages');
    }
    messagesCheckbox(){
        return cy.get('#messages');
    }
    redminePluginsCheckbox(){
        return cy.get('#redmine_plugins');
    }
    submitButton(){
        return cy.get('[name="commit"]');
    }
    firstResultLink(){
        return cy.xpath('//dl [@id="search-results"]//dt[1]//a');
    }
    nextPageLink(){
        return cy.xpath('//p [@class="pagination"]//a');
    }
}

module.exports = new SearchPage