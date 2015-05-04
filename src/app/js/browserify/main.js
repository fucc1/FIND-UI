var _ = require('underscore'),
    Names = require('./second.js'),
    otherNames = ['Barry Allen', 'Hal Jordan', 'Kara Kent', 'Diana Prince', 'Ray Palmer', 'Oliver Queen'];

var names = Names();

_.each([names, otherNames], function(nameGroup) {
    findSuperman(nameGroup);
});


function findSuperman(values) {
    _.find(values, function(name) {
        if (name === 'Clark Kent') {
            console.log('It\'s Superman!');
        } else {
            console.log('... No superman!');
            console.log(name);
        }
    });
}