class WikiPage{
    wikiTab(){
        return cy.get('[href="/projects/redmine/wiki"]');
    }
    redmineAnchor(){
        return cy.get('[href="#Redmine"][class="wiki-anchor"]');
    }
    featuresAnchor(){
        return cy.get('[href="#Features"][class="wiki-anchor"]');
    }
    documentationAnchor(){
        return cy.get('[href="#Documentation"][class="wiki-anchor"]');
    }
    onlinedemoAnchor(){
        return cy.get('[href="#Online-demo"][class="wiki-anchor"]');
    }
    supportGettingHelpAnchor(){
        return cy.get('[href="#Support-38-getting-help"][class="wiki-anchor"]');
    }
    contributingAndHelpingOutAnchor(){
        return cy.get('[href="#Contributing-and-helping-out"][class="wiki-anchor"]');
    }
    whoUsesRedmineAnchor(){
        return cy.get('[href="#Who-uses-Redmine"][class="wiki-anchor"]');
    }
    redmineBooksAnchor(){
        return cy.get('[href="#Redmine-books"][class="wiki-anchor"]');
    }
    latestReleaseSidebarLink(){
        return cy.xpath('//a [@name="Resources"]/..//a[contains(text(),"5.0.")]')
    }
    usersGuideSidebarLink(){
        return cy.xpath('//a [@name="Resources"]/..//a[contains(text(),"User")]')
    }
    developersGuideSidebarLink(){
        return cy.xpath('//a [@name="Resources"]/..//a[contains(text(),"Dev")]')
    }
    changelogSidebarLink(){
        return cy.xpath('//a [@name="Resources"]/..//a[contains(text(),"Change")]')
    }
    securitySidebarLink(){
        return cy.xpath('//a [@name="Resources"]/..//a[contains(text(),"Security")]')
    }
    FAQSidebarLink(){
        return cy.xpath('//a [@name="Resources"]/..//a[contains(text(),"FAQ")]')
    }
    howToSidebarLink(){
        return cy.xpath('//a [@name="Resources"]/..//a[contains(text(),"How")]')
    }
    themesSidebarLink(){
        return cy.xpath('//a [@name="Resources"]/..//a[contains(text(),"Themes")]')
    }
    privacyPolicySidebarLink(){
        return cy.xpath('//a [@name="Resources"]/..//a[contains(text(),"Privacy")]')
    }
    indexSidebarLink(){
        return cy.get('[href="/projects/redmine/wiki/index"]')
    }
}

module.exports = new WikiPage