class RoadmapPage{
    roadmapTab(){
        return cy.get('[class="roadmap"]');
    }
    defectCheckbox(){
        return cy.get('[name="tracker_ids[]"][value="1"]')
    }
    featureCheckbox(){
        return cy.get('[name="tracker_ids[]"][value="2"]')
    }
    patchCheckbox(){
        return cy.get('[name="tracker_ids[]"][value="3"]')
    }
    completedCheckbox(){
        return cy.get('[name="completed"][value="1"]')
    }
    subprojectsCheckbox(){
        return cy.get('[name="with_subprojects"][value="1"]')
    }
    submitButton(){
        return cy.get('[class="button-small"][class="button-small"]')
    }
    firstVersionLink(){
        return cy.xpath('//div[@id="roadmap"]/..//h3[1]//a')
    }
    availableIssuesForFirstVersionLink(){
        return cy.xpath('//div[@id="roadmap"]/..//p[@class="progress-info"][1]//a[1]')
    }
    version427Anchor(){
        return cy.get('[href="#4.2.7"]')
    }
    version502Anchor(){
        return cy.get('[href="#5.0.2"]')
    }
    version510Anchor(){
        return cy.get('[href="#5.1.0"]')
    }
    version600Anchor(){
        return cy.get('[href="#6.0.0"]')
    }
    candidateForNextMajorReleaseAnchor(){
        return cy.get('[href="#Candidate_for_next_major_release"]')
    }
    candidateForNextMinorReleaseAnchor(){
        return cy.get('[href="#Candidate_for_next_minor_release"]')
    }
    unplannedBacklogsAnchor(){
        return cy.get('[href="#Unplanned_backlogs"]')
    }
}

module.exports = new RoadmapPage