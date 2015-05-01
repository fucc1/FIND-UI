(function() {

    window.loadIndicator = function(url, handlerFunc) {
        url = "data/access-to-improved.json";

        $.get(url, function(data) {
            handlerFunc(data);
        });
    }

    window.loadIndicator = function(handlerFunc) {


        $.get("data/access-to-improved.json", function(data) {
            handlerFunc(data);
        });
    }

}())