class ForumsPage{
    forumsTab(){
        return cy.get('[class="boards"]');
    }
    openDiscussionPageLink(){
        return cy.get('[href="/projects/redmine/boards/1"]')
    }
    openFirstDiscussionLink(){
        return cy.xpath('//table//tr[2]//td[1]')
    }
    backToForumsLink(){
        return cy.xpath('//p [@class="breadcrumb"]//a[1]')
    }
    linkToLastMessageAuthor(){
        return cy.xpath('//tr [@class="odd"][1]//td[@class="last-message"]//a[1]')
    }
    linkToLastMessageAuthorActivity(){
        return cy.xpath('//tr [@class="odd"][1]//td[@class="last-message"]//a[2]')
    }
    linkToLastMessage(){
        return cy.xpath('//tr [@class="odd"][1]//td[@class="last-message"]//a[3]')
    }
    exportToAtomLink(){
        return cy.get('[class="atom"]')
    }
}

module.exports = new ForumsPage