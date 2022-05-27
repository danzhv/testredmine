class ProjectsPage{
    projectsTab(){
        return cy.get('[class="projects"]');
    }
    RedmineProjectLink(){
        return cy.get('[class="project root parent "]');
    }
    closedCheckbox(){
        return cy.get('#closed');
    }
    submitButton(){
        return cy.get('[class="button-small"]');
    }
    viewAllIssuesLink(){
        return cy.get('[href="/issues"]');
    }
    viewActivitiesLink(){
        return cy.get('[href="/activity"]');
    }
    exportToAtomLink(){
        return cy.get('[class="atom"]');
    }
}

module.exports = new ProjectsPage