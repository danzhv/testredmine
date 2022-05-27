class DownloadsPage{
    downloadTab(){
        return cy.get('[class="download"]');
    }
    downloadAnchor(){
        return cy.get('[href="#Download"][class="wiki-anchor"]')
    }
    stableReleasesAnchor(){
        return cy.get('[href="#Stable-releases"][class="wiki-anchor"]')
    }
    latestSourceCodeAnchor(){
        return cy.get('[href="#Latest-source-code"][class="wiki-anchor"]')
    }
    stableAnchor(){
        return cy.get('[href="#42-Stable"][class="wiki-anchor"]')
    }
    developmentUnstableAnchor(){
        return cy.get('[href="#Development-unstable"][class="wiki-anchor"]')
    }
    thirdPartyRedmineBundlesAnchor(){
        return cy.get('[href="#Third-party-Redmine-bundles"][class="wiki-anchor"]')
    }
    redmineInstallLink(){
        return cy.get('[href="/projects/redmine/wiki/RedmineInstall"][class="wiki-page"]')
    }
    redmineUpgradeLink(){
        return cy.get('[href="/projects/redmine/wiki/RedmineUpgrade"][class="wiki-page"                              ]')
    }
    olderReleasesLink(){
        return cy.get('[href="/projects/redmine/wiki/RedmineUpgrade"]')
    }
    SVNLink(){
        return cy.get('[href="https://svn.redmine.org/redmine"]')
    }
    gitLink(){
        return cy.get('[href="https://github.com/redmine/redmine"]')
    }
    turnKeyRedmineApplianceLink(){
        return cy.get('[href="http://www.turnkeylinux.org/redmine"]')
    }
    bitNamiRedmineStackLink(){
        return cy.get('[href="https://bitnami.com/stack/redmine"]')
    }
    SVNLink(){
        return cy.get('[href="https://svn.redmine.org/redmine"]')
    }
    SVNLink(){
        return cy.get('[href="https://svn.redmine.org/redmine"]')
    }
    SVNLink(){
        return cy.get('[href="https://svn.redmine.org/redmine"]')
    }
    SVNLink(){
        return cy.get('[href="https://svn.redmine.org/redmine"]')
    }
}

module.exports = new DownloadsPage