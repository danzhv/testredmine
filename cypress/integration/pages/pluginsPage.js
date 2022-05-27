class PluginsPage{
    pluginsSidebarLink(){
        return cy.xpath('//a [@name="Resources"]/..//a[contains(text(),"Plugins")]');
    }
    pluginsDirectoryLink(){
        return cy.get('[href="/projects/redmine/wiki/Plugins"]')
    }
    firstPluginLink(){
        return cy.xpath('//div[@id="content"]//table//tr[1]//td[@class="description"]//p//a');
    }
    timeentryImportPluinAuthorLink(){
        return cy.xpath('//tr [@class="plugin"][1]//td[@class="author"]//a');
    }
    browseAllPluginsLink(){
        return cy.get('[href="/plugins?page=1"]');
    }
    showOnlyPluginsCompatibleWithRedmineVersionSelect(){
        return cy.get('#v');
    }
    secondPageLink(){
        return cy.xpath('//p [@class="pagination"]//a[1]');
    }
    nextPageLink(){
        return cy.get('[class="next"]');
    }
}
module.exports = new PluginsPage