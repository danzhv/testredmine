class NewsPage{
    newsTab(){
        return cy.get('[class="news"]');
    }
    linkToFirstNews(){
        return cy.xpath('//div [@id="content"]/h3[1]/a')
    }
    linkToFirstNewsAuthorAccount(){
        return cy.xpath('//div [@id="content"]/p[1]/a[1]')
    }
    linkToFirstNewsAuthorActivity(){
        return cy.xpath('//div [@id="content"]/p[1]/a[2]')
    }
    linkToSecondPage(){
        return cy.get('[href="/projects/redmine/news?page=2"][class="page"]')
    }
    linkToNextPage(){
        return cy.get('[class="next"]')
    }
    exportToAtomLink(){
        return cy.get('[class="atom"]')
    }
}

module.exports = new NewsPage