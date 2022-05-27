class IssuesPage{
    issuesTab(){
        return cy.get('[class="issues"]');
    }
    filtersFieldset(){
        return cy.xpath('//fieldset[@id="filters"]//legend')
    }
    optionsFieldset(){
        return cy.xpath('//fieldset[@class="collapsible collapsed"]//legend')
    }
    statusCheckbox(){
        return cy.get('#cb_status_id')
    }
    versionCheckbox(){
        return cy.get('#cb_fixed_version_id')
    }
    operatorsStatusSelect(){
        return cy.get('#operators_status_id')
    }
    valuesStatus(){
        return cy.get('#values_status_id_1')
    }
    statusToggleMultiselect(){
        return cy.xpath('//tr[@id="tr_status_id"]//span[@class]')
    }
    addFilterSelect(){
        return cy.get('#add_filter_select')
    }
    availableColumnsSelect(){
        return cy.get('#available_columns')
    }
    selectedColumnsSelect(){
        return cy.get('#selected_columns')
    }
    moveFromAvailableToSelectedButton(){
        return cy.get('[onclick="moveOptions(this.form.available_columns, this.form.selected_columns);"]')
    }
    moveFromSelectedToAvailableButton(){
        return cy.get('[onclick="moveOptions(this.form.selected_columns, this.form.available_columns);"]')
    }
    moveOptionToTopButton(){
        return cy.get('[onclick="moveOptionTop(this.form.selected_columns);"]')
    }
    moveOptionUpButton(){
        return cy.get('[onclick="moveOptionUp(this.form.selected_columns);"]')
    }
    moveOptionToBottomButton(){
        return cy.get('[onclick="moveOptionBottom(this.form.selected_columns);"]')
    }
    moveOptionDownButton(){
        return cy.get('[onclick="moveOptionDown(this.form.selected_columns);"]')
    }
    groupBySelect(){
        return cy.get('#group_by')
    }
    showDescriptionCheckbox(){
        return cy.get('[name="c[]"][type="checkbox"]')
    }
    submitButton(){
        return cy.get('[class="icon icon-checked"]')
    }
    reloadButton(){
        return cy.get('[class="icon icon-reload"]')
    }
}

module.exports = new IssuesPage