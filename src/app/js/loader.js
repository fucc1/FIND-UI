(function() {

    window.loadIndicator = function(handlerFunc) {


        $.get("data/access-to-improved.json", function(data) {
            handlerFunc(data);
        });
    }

}())