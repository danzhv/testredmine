class GuidePage{
    guideTab(){
        return cy.get('[class="help"]');
    }
    RedmineGuideAnchor(){
        return cy.xpath('//ul[@class="toc right"][1]//li[1]//a[1][@href="#Redmine-guide"]');
    }
    installationGuideAnchor(){
        return cy.xpath('//ul[@class="toc right"][1]//li[1]//a[1][@href="#Installation-guide"]');
    }
    administratorGuideAnchor(){
        return cy.xpath('//ul[@class="toc right"][1]//li[1]//a[1][@href="#Administrator-guide"]');
    }
    commonConfigurationAnchor(){
        return cy.xpath('//ul[@class="toc right"][1]//li[1]//a[1][@href="#Common-configuration"]');
    }
    advancedConfigurationAnchor(){
        return cy.xpath('//ul[@class="toc right"][1]//li[1]//a[1][@href="#Advanced-configuration"]');
    }
    maintenanceOperationsAnchor(){
        return cy.xpath('//ul[@class="toc right"][1]//li[1]//a[1][@href="#Maintenance-operations"]');
    }
    userGuideAnchor(){
        return cy.xpath('//ul[@class="toc right"][1]//li[1]//a[1][@href="#User-guide"]');
    }
    developerGuideAnchor(){
        return cy.xpath('//ul[@class="toc right"][1]//li[1]//a[1][@href="#Developer-guide"]');
    }
    generalDevelopmentAnchor(){
        return cy.xpath('//ul[@class="toc right"][1]//li[1]//a[1][@href="#General-development"]');
    }
    pluginDevelopmentAnchor(){
        return cy.xpath('//ul[@class="toc right"][1]//li[1]//a[1][@href="#Plugin-development"]');
    }
    themeDevelopmentAnchor(){
        return cy.xpath('//ul[@class="toc right"][1]//li[1]//a[1][@href="#Theme-development"]');
    }
    contributingToRedmineAnchor(){
        return cy.xpath('//ul[@class="toc right"][1]//li[1]//a[1][@href="#Contributing-to-Redmine"]');
    }
    translationsOfTheRedmineGuideAnchor(){
        return cy.xpath('//ul[@class="toc right"][1]//li[1]//a[1][@href="#Translations-of-the-Redmine-guide"]');
    }
    installingRedmineLink(){
        return cy.get('[href="/projects/redmine/wiki/RedmineInstall"]');
    }
    managingProjectsLink(){
        return cy.get('[href="/projects/redmine/wiki/RedmineProjects"]');
    }
    configuringRepositoriesLink(){
        return cy.get('[href="/projects/redmine/wiki/RedmineRepositories"]');
    }
    rakeTasksLink(){
        return cy.get('[href="/projects/redmine/wiki/RedmineRake"]');
    }
    gettingStartedLink(){
        return cy.get('[href="/projects/redmine/wiki/Getting_Started"]');
    }
    RedmineRESTAPILink(){
        return cy.get('[href="/projects/redmine/wiki/Rest_api"]');
    }
    tutorialLink(){
        return cy.get('[href="/projects/redmine/wiki/Plugin_Tutorial"]');
    }
    howToCreateCustomRedmiteThemeLink(){
        return cy.get('[href="/projects/redmine/wiki/HowTo_create_a_custom_Redmine_theme"]');
    }
    contributeLink(){
        return cy.get('[href="/projects/redmine/wiki/Contribute"]');
    }
    frenchGuideLink(){
        return cy.get('[href="/projects/redmine/wiki/FrGuide"]');
    }
}

module.exports = new GuidePage