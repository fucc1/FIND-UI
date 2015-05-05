(function() {

    window.loadIndicatorList = function(url, handlerFunc) {

        // url = "data/indicators2.json";

        $.ajax({
            url: url,
            jsonp: "callback",
            dataType: "jsonp",
            data: {

            },
            success: handlerFunc
        });
    }

    window.loadIndicatorData = function(url, handlerFunc) {
        // url = "data/access-to-improved.json";
        url = "http://api.worldbank.org/countries/all/indicators/NY.GDP.PCAP.KD?per_page=14200&format=jsonP";

        $.ajax({
            url: url,
            jsonp: "prefix",
            dataType: "jsonp",
            data: {

            },
            success: handlerFunc
        });
    }



}())