class Helper{
        generateEmail(){
        let chars = 'abcdefghijklmnoprstuvwxyz1234567890';
        let string = '';
        for (let i=0; i<10; i++){
        string += chars[Math.floor(Math.random() * chars.length)];
        }
        return(string + '@gmail.com');
    }
    
     generateText(){                 //to generate user, password and adding to inputs to check max symbols limit
        let chars = 'abcdefghijklmnoprstuvwxyz1234567890';
        let string = '';
        for (let i=0; i<20; i++){
        string += chars[Math.floor(Math.random() * chars.length)];
        }
        return(string);
    }
    
    generateShortText(){                 //to check pass limit
        let chars = 'abcdefghijklmnoprstuvwxyz1234567890';
        let string = '';
        for (var i=0; i<2; i++){
        string += chars[Math.floor(Math.random() * chars.length)];
        }
        return(string);
    }

    generateOperatorsStatusId(){
        var chars ='o=!c*';
        var string = '';
        string = chars[Math.floor(Math.random() * chars.length)];
        return(string);
    }

    generateValuesStatusId(){
        let chars =['1', '10', '9', '3', '5', '8'];
        let string = '';
        string = chars[Math.floor(Math.random() * chars.length)];
        return(string);
    }

    generateAddFilterId(){
        let chars = ['status_id', 'tracker_id', 'priority_id', 'author_id', 'assigned_to_id', 'assigned_to_role',
                    'fixed_version_id', 'category_id', 'subject', 'created_on', 'updated_on', 'closed_on', 'start_date', 
                    'due_date', 'estimated_hours', 'done_ratio', 'cf_2', 'cf_4', 'relates', 'duplicates', 'duplicated', 
                    'blocks', 'blocked', 'precedes', 'follows', 'copied_to', 'copied_from'];
        let string = '';
        string = chars[Math.floor(Math.random() * chars.length)];
        return(string);
    }

    generateAvailableColumnsId(){
        let chars = ['project', 'parent', 'priority', 'author', 'assigned_to', 'fixed_version',
                    'start_date', 'due_date', 'estimated_hours', 'done_ratio', 'created_on', 'closed_on', 'start_date', 
                    'relations', 'cf_2', 'cf_4'];
        let string = '';
        string = chars[Math.floor(Math.random() * chars.length)];
        return(string);
    }

    generateSelectedColumnsId(){
        let chars = ['tracker', 'status', 'subject', 'updated_on', 'category'];
        let string = '';
        string = chars[Math.floor(Math.random() * chars.length)];
        return(string);
    }

    generateGroupById(){
        let chars = ['project', 'tracker', 'status', 'author', 'assigned_to', 'priority',
                    'category', 'fixed_version', 'done_ratio','cf_2', 'cf_4'];
        let string = '';
        string = chars[Math.floor(Math.random() * chars.length)];
        return(string);
    }

    generatePluginsCompatibleWithRedmineVersionSelectId(){
        let chars = ['5.0', '4.2', '4.1', '4.0', '3.4', '3.3', '3.2', '3.1', '3.0', '2.6', '2.5', '2.4',
                     '2.3', '2.2', '2.1', '2.0', '1.4', '1.3', '1.2', '1.1', '1.0', '0.9', '0.8', '0.7'];
        let string = '';
        string = chars[Math.floor(Math.random() * chars.length)];
        return(string);
    }

    generateSearchScopeId(){
        let chars = ['all', 'subprojects'];
        let string = '';
        string = chars[Math.floor(Math.random() * chars.length)];
        return(string);
    }

}

module.exports = new Helper
