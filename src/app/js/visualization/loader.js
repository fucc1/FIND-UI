(function() {

    window.loadIndicatorList = function(url, handlerFunc) {

        url = "data/indicators2.json";

        $.get(url, function(data) {
            handlerFunc(data);
        });
    }

    window.loadIndicatorData = function(url, handlerFunc) {
        url = "data/access-to-improved.json";

        $.get(url, function(data) {
            handlerFunc(data);
        });
    }



}())