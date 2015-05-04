window.$ = window.jQuery = require("jquery");

module.exports = function() {
    var o = {};

    o.loadIndicatorList = function(url, handlerFunc) {

        url = "data/indicators.json";

        $.get(url, function(data) {
            handlerFunc(data);
        });
    }

    o.loadIndicatorData = function(url, handlerFunc) {
        url = "data/access-to-improved.json";

        $.get(url, function(data) {
            handlerFunc(data);
        });
    }

    return o;
}