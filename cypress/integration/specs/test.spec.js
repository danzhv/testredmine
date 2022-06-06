import helper from '../pages/helper';
import signupPage from '../pages/signupPage';
import loginPage from '../pages/loginPage';
import forgotPasswordPage from '../pages/forgotpasswordPage';
import overviewPage from '../pages/overviewPage';
import downloadsPage from '../pages/downloadsPage';
import activityPage from '../pages/activityPage';
import roadmapPage from '../pages/roadmapPage';
import issuesPage from '../pages/issuesPage';
import newsPage from '../pages/newsPage';
import wikiPage from '../pages/wikiPage';
import forumsPage from '../pages/forumsPage';
import repositoryPage  from '../pages/repositoryPage';
import mainPage from '../pages/mainPage';
import projectsPage from '../pages/projectsPage';
import guidePage from '../pages/guidePage';
import historyPage from '../pages/historyPage';
import pluginsPage from '../pages/pluginsPage';
import searchPage from '../pages/searchPage';

describe("Redmine test", () =>{
    beforeEach(function() {
        mainPage.openWebsite();
    })
    it('should verify signup with valid credentials', function()
    {
        signupPage.signupButton().click();
        signupPage.userLoginInput().type(helper.generateText());
        let password = helper.generateText();
        signupPage.userPasswordInput().type(password);
        signupPage.userPasswordConfirmationInput().type(password);
        signupPage.userFirstnameInput().type(helper.generateText());
        signupPage.userLastnameInput().type(helper.generateText());
        signupPage.userMailInput().type(helper.generateEmail());
        signupPage.submitButton().click();
        signupPage.checkIfRedirectedToLoginPage();
    })
    it('should verify signup with empty inputs', function(){
        signupPage.signupButton().click();
        signupPage.submitButton().click();
        signupPage.checkIsErrorMessageDisplayed();
    })
    it('should verify signup inputs have lenght limit', function(){
        signupPage.signupButton().click();
        signupPage.submitButton().click();
        signupPage.checkIsErrorMessageDisplayed();
        let password = helper.generateText();
        for (let i=0; i < 10; i++){
            signupPage.userLoginInput().type(helper.generateText());
            signupPage.userFirstnameInput().type(helper.generateText());
            signupPage.userLastnameInput().type(helper.generateText());
            signupPage.userMailInput().type(helper.generateText());
            password += helper.generateText();
        }
        signupPage.userMailInput().type(helper.generateEmail());
        signupPage.userPasswordInput().type(password);
        signupPage.userPasswordConfirmationInput().type(password);
        signupPage.submitButton().click();
        signupPage.checkIsErrorMessageDisplayed();
    })
    it('should verify signup with short password', function()
    {
        signupPage.signupButton().click();
        signupPage.userLoginInput().type(helper.generateText());
        let password = helper.generateShortText();
        signupPage.userPasswordInput().type(password);
        signupPage.userPasswordConfirmationInput().type(password);
        signupPage.userFirstnameInput().type(helper.generateText());
        signupPage.userLastnameInput().type(helper.generateText());
        signupPage.userMailInput().type(helper.generateEmail());
        signupPage.submitButton().click();
        signupPage.checkIsErrorMessageDisplayed();
    })
    it('should verify signup when password not matches', function()
    {
        signupPage.signupButton().click();
        signupPage.userLoginInput().type(helper.generateText());
        signupPage.userPasswordInput().type(helper.generateText());
        signupPage.userPasswordConfirmationInput().type(helper.generateText());
        signupPage.userFirstnameInput().type(helper.generateText());
        signupPage.userLastnameInput().type(helper.generateText());
        signupPage.userMailInput().type(helper.generateEmail());
        signupPage.submitButton().click();
        signupPage.checkIsErrorMessageDisplayed();
    })
    it('should verify signup with registered email', function()
    {
        signupPage.signupButton().click();
        signupPage.userLoginInput().type(helper.generateText());
        let password = helper.generateText();
        signupPage.userPasswordInput().type(password);
        signupPage.userPasswordConfirmationInput().type(password);
        signupPage.userFirstnameInput().type(helper.generateText());
        signupPage.userLastnameInput().type(helper.generateText());
        signupPage.userMailInput().type('daniltest685@gmail.com');
        signupPage.submitButton().click();
        signupPage.checkIfRedirectedToLoginPage();
    })
    it('should verify login with valid credentials', function (){
        loginPage.loginButton().click();
        loginPage.userLoginInput().type('testdzz');
        loginPage.userPasswordInput().type('1234');
        loginPage.submitButton().click();
    })
    it('should verify login with invalid credentials', function (){
        loginPage.loginButton().click();
        loginPage.userLoginInput().type('testdzz');
        loginPage.submitButton().click();
        loginPage.checkIsErrorMessageDisplayed();
        loginPage.userPasswordInput().type(helper.generateText());
        loginPage.submitButton().click();
        loginPage.checkIsErrorMessageDisplayed();
    })
    it('should verify login with unactivated email', function (){
        loginPage.loginButton().click();
        loginPage.userLoginInput().type('testdz');
        loginPage.userPasswordInput().type('1234');
        loginPage.submitButton().click();
        loginPage.emailActivationLink().click();
        loginPage.checkIfEmailActivationSent();
    })
    it('should verify forgot password with valid credentials', function(){
        loginPage.loginButton().click();
        forgotPasswordPage.passwordRecoveryButton().click();
        forgotPasswordPage.userEmailInput().type('daniltest685@gmail.com');
        forgotPasswordPage.submitButton().click();
    })
    it('should verify forgot password with invalid credentials', function(){
        loginPage.loginButton().click();
        forgotPasswordPage.passwordRecoveryButton().click();
        forgotPasswordPage.userEmailInput().type(helper.generateEmail());
        forgotPasswordPage.submitButton().click();
        forgotPasswordPage.checkIsErrorMessageDisplayed();
    })
    it('should verify main menu tabs', function(){
        overviewPage.overviewTab().click();
        downloadsPage.downloadTab().click();
        activityPage.activityTab().click();
        roadmapPage.roadmapTab().click();
        issuesPage.issuesTab().click();
        newsPage.newsTab().click();
        wikiPage.wikiTab().click();
        forumsPage.forumsTab().click();
        repositoryPage.repositoryTab().click();
    })
    it('should verify top menu tabs', function(){
        mainPage.homePageTab().click();
        projectsPage.projectsTab().click();
        guidePage.guideTab().click();       //not opening
    })
    it('should verify wiki page links', function(){
        wikiPage.redmineAnchor().invoke('show').click();
        wikiPage.featuresAnchor().invoke('show').click();
        wikiPage.documentationAnchor().invoke('show').click();
        wikiPage.onlinedemoAnchor().invoke('show').click();
        wikiPage.supportGettingHelpAnchor().invoke('show').click();
        wikiPage.contributingAndHelpingOutAnchor().invoke('show').click();
        wikiPage.whoUsesRedmineAnchor().invoke('show').click();
        wikiPage.redmineBooksAnchor().invoke('show').click();
    })
    it('should verify wiki page sidebar', function(){
        wikiPage.latestReleaseSidebarLink().click();
        wikiPage.usersGuideSidebarLink().click();
        wikiPage.developersGuideSidebarLink().click();
        wikiPage.changelogSidebarLink().click();
        wikiPage.securitySidebarLink().click();
        wikiPage.FAQSidebarLink().click();
        wikiPage.howToSidebarLink().click();
        pluginsPage.pluginsSidebarLink().click();
        cy.go('back');
        wikiPage.themesSidebarLink().click();
        wikiPage.privacyPolicySidebarLink().click();
        wikiPage.indexSidebarLink().click();
    })
    it('should verify plugins page links', function(){
        pluginsPage.pluginsSidebarLink().click();
        pluginsPage.pluginsDirectoryLink().click();
        cy.go('back');
        pluginsPage.firstPluginLink().click();
        cy.go('back');
        pluginsPage.browseAllPluginsLink().click();
        pluginsPage.secondPageLink().click();
        pluginsPage.nextPageLink().click();
        pluginsPage.firstPluginLink().click();
        cy.go('back');
        pluginsPage.showOnlyPluginsCompatibleWithRedmineVersionSelect().select(helper.generatePluginsCompatibleWithRedmineVersionSelectId());
    })
    it('should verify history page links', function(){
        historyPage.historySidebarLink().click();
        historyPage.restUsersLink().invoke('show').click();
        historyPage.usersAnchor().invoke('show').click();
        historyPage.usersIdFormatAnchor().invoke('show').click();
        historyPage.getAnchor().invoke('show').click();
        historyPage.postAnchor().invoke('show').click();
        historyPage.usersIdFormatAnchor().invoke('show').click();
        historyPage.get2Anchor().invoke('show').click();
        historyPage.putAnchor().invoke('show').click();
        historyPage.deleteAnchor().invoke('show').click();
        historyPage.seeAlsoAnchor().invoke('show').click();
        historyPage.restMembershipsLink().click();
        cy.go('back');
        historyPage.restGroupsLink().click();
        cy.go('back');
        historyPage.historyButton().click();
        historyPage.seeDifferencesButton().click();
        cy.go(-12);
        historyPage.exportToAtomLink().click();
    })
    it('should verify overview page links', function(){
        overviewPage.overviewTab().click();
        overviewPage.viewAllIssuesLink().click();
        cy.go('back');
        overviewPage.administratorAccountLink().click();
        cy.go('back');
        overviewPage.contributorAccountLink().click();
        cy.go('back');
        overviewPage.viewAllNewsLink().click();
    })
    it('should verify download page links', function(){
        downloadsPage.downloadTab().click();
        downloadsPage.downloadAnchor().invoke('show').click();
        downloadsPage.stableReleasesAnchor().invoke('show').click();
        cy.go('back');
        downloadsPage.redmineInstallLink().click();
        cy.go('back');
        downloadsPage.redmineUpgradeLink().click();
        cy.go('back');
        downloadsPage.olderReleasesLink().click();
        cy.go('back');
        downloadsPage.latestSourceCodeAnchor().invoke('show').click();
        downloadsPage.SVNLink().click;
        cy.go('back');
        downloadsPage.gitLink().click;
        cy.go('back');
        downloadsPage.stableAnchor().invoke('show').click();
        downloadsPage.developmentUnstableAnchor().invoke('show').click();
        downloadsPage.thirdPartyRedmineBundlesAnchor().invoke('show').click();
        downloadsPage.turnKeyRedmineApplianceLink().click();
        cy.go('back');
        downloadsPage.bitNamiRedmineStackLink().click();
    })
    it('should verify activity page links', function(){
        activityPage.activityTab().click();
        activityPage.issuesCheckbox().click();
        activityPage.changesetsCheckbox().click();
        activityPage.newsCheckbox().click();
        activityPage.wikiEditsCheckbox().check();
        activityPage.messagesCheckbox().click();
        activityPage.subprojectsCheckbox().click();
        activityPage.lastActivityForTodayLink().click();
        cy.go('back');
        activityPage.previousPageButton().click();
        activityPage.exportToAtomLink().click();
    })
    it('should verify roadmap page links', function(){
        roadmapPage.roadmapTab().click();
        roadmapPage.defectCheckbox().click();
        roadmapPage.featureCheckbox().click();
        roadmapPage.patchCheckbox().click();
        roadmapPage.completedCheckbox().click();
        roadmapPage.subprojectsCheckbox().click();
        roadmapPage.submitButton().click();
        roadmapPage.firstVersionLink().click();
        cy.go('back');
        roadmapPage.availableIssuesForFirstVersionLink().click();
        cy.go('back');
        roadmapPage.version427Anchor().click();
        roadmapPage.version502Anchor().click();
        roadmapPage.version510Anchor().click();
        roadmapPage.version600Anchor().click();
        roadmapPage.candidateForNextMajorReleaseAnchor().click();
        roadmapPage.candidateForNextMinorReleaseAnchor().click();
        roadmapPage.unplannedBacklogsAnchor().click();
    })
    it('should verify issues page table filters', function(){
        var statusId;
        issuesPage.issuesTab().click();
        issuesPage.filtersFieldset().click();
        issuesPage.filtersFieldset().click();
        statusId = helper.generateOperatorsStatusId();
        issuesPage.operatorsStatusSelect().select(statusId);
        if (statusId == '=' || statusId == '!'){
            issuesPage.valuesStatus().select(helper.generateValuesStatusId());
            issuesPage.statusToggleMultiselect();
        }
        issuesPage.addFilterSelect().select(helper.generateAddFilterId());
        issuesPage.submitButton().click();
        issuesPage.reloadButton().click();
    })
    it('should verify issues page table options', function(){
        issuesPage.issuesTab().click();
        issuesPage.optionsFieldset().click();
        issuesPage.availableColumnsSelect().select(helper.generateAvailableColumnsId());
        issuesPage.moveFromAvailableToSelectedButton().click();
        issuesPage.selectedColumnsSelect().select(helper.generateSelectedColumnsId());
        issuesPage.moveOptionToTopButton().click();
        issuesPage.moveOptionDownButton().click();
        issuesPage.moveOptionToBottomButton().click();
        issuesPage.moveOptionUpButton().click();
        issuesPage.groupBySelect().select(helper.generateGroupById());
        issuesPage.showDescriptionCheckbox().click();
        issuesPage.submitButton().click();
        issuesPage.reloadButton().click();
    })
    it('should verify news page links', function(){
        newsPage.newsTab().click();
        newsPage.linkToFirstNews().click();
        cy.go('back')
        newsPage.linkToFirstNewsAuthorAccount().click();
        cy.go('back')
        newsPage.linkToFirstNewsAuthorActivity().click();
        cy.go('back')
        newsPage.linkToSecondPage().click();
        newsPage.linkToNextPage().click();
        newsPage.exportToAtomLink().click();
    })
    it('should verify forums page links', function(){
        forumsPage.forumsTab().click();
        forumsPage.openDiscussionPageLink().click();
        forumsPage.openFirstDiscussionLink().click();
        forumsPage.backToForumsLink().click();
        forumsPage.linkToLastMessageAuthor().click();
        cy.go('back');
        forumsPage.linkToLastMessageAuthorActivity().click();
        cy.go('back');
        forumsPage.linkToLastMessage().click();
        cy.go('back');
        forumsPage.exportToAtomLink().click();
    })
    it('should verify repository page links', function(){
        repositoryPage.repositoryTab().click();
        repositoryPage.expandBranchesButton().click();
        repositoryPage.stable06Link().click();
        repositoryPage.stable06AppLink().click();
        repositoryPage.stable06AppApisLink().click();
        repositoryPage.stable06AppApisSysApiLink().click();
        repositoryPage.viewLink().click();
        repositoryPage.authorshipLink().click();
        repositoryPage.historyLink().click();
        repositoryPage.rootLink().click();
        repositoryPage.exportToAtomLink().click();
    })
    it('should verify repository page revisions difference', function(){
        repositoryPage.repositoryTab().click();
        repositoryPage.viewAllRevisions().click();
        repositoryPage.fifthRadiobutton().click();
        repositoryPage.lastRadiobutton().click();
        repositoryPage.viewDifferenceButton().click();
        repositoryPage.rowRadiobutton().click();
        cy.go(-2);
        repositoryPage.secondPageLink().click();
        repositoryPage.nextPageLink().click();
        repositoryPage.revisionsPerPage100Link().click();
        repositoryPage.revisionsSearch().type(helper.generateText());
        repositoryPage.okButton().click();
        repositoryPage.backLink().click();
        repositoryPage.exportToAtomLink().click();
    })
    it('should verify projects page', function(){
        projectsPage.projectsTab().click();
        projectsPage.RedmineProjectLink().click();
        cy.go('back');
        projectsPage.closedCheckbox().click();
        projectsPage.submitButton().click();
        projectsPage.viewAllIssuesLink().click();
        cy.go('back');
        projectsPage.viewActivitiesLink().click();
        cy.go('back');
        projectsPage.exportToAtomLink().click();
    })
    it('should verify guide page links', function(){
        guidePage.guideTab().click();
        guidePage.RedmineGuideAnchor().click();
        guidePage.installationGuideAnchor().click();
        guidePage.installingRedmineLink().click();
        cy.go('back');
        guidePage.administratorGuideAnchor().click();
        guidePage.commonConfigurationAnchor().click();
        guidePage.managingProjectsLink().click();
        cy.go('back');
        guidePage.advancedConfigurationAnchor().click();
        guidePage.configuringRepositoriesLink().click();
        cy.go('back');
        guidePage.maintenanceOperationsAnchor().click();
        guidePage.rakeTasksLink().click();
        cy.go('back');
        guidePage.userGuideAnchor().click();
        guidePage.gettingStartedLink().click();
        cy.go('back');
        guidePage.developerGuideAnchor().click();
        guidePage.generalDevelopmentAnchor().click();
        guidePage.RedmineRESTAPILink().click();
        cy.go('back');
        guidePage.pluginDevelopmentAnchor().click();
        guidePage.tutorialLink().click();
        cy.go('back');
        guidePage.themeDevelopmentAnchor().click();
        guidePage.howToCreateCustomRedmiteThemeLink().click();
        cy.go('back');
        guidePage.contributingToRedmineAnchor().click();
        guidePage.contributeLink().click();
        cy.go('back');
        guidePage.translationsOfTheRedmineGuideAnchor().click();
        guidePage.frenchGuideLink().click();
    })
    it('should verify search', function(){
        searchPage.searchInput()
        .type('tab')
        .type('{enter}')
        searchPage.searchScopeSelect().select(helper.generateSearchScopeId());
        searchPage.allWordsCheckbox().click();
        searchPage.titlesOnlyCheckbox().click();
        searchPage.newsCheckbox().click();
        searchPage.changesetsCheckbox().click();
        searchPage.wikiPagesCheckbox().click();
        searchPage.messagesCheckbox().click();
        searchPage.redminePluginsCheckbox().click();
        searchPage.submitButton().click();
        searchPage.firstResultLink().click();
        cy.go('back');
        searchPage.nextPageLink().click();
    })
})
