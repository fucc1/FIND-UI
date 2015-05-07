(function() {

    window.loadIndicatorList = function(url, handlerFunc) {

        url = "data/indicators2.json";

        $.ajax({
            url: url,
            jsonp: "callback",
            //dataType: "jsonp",
            dataType: "json",
            data: {

            },
            success: handlerFunc
        });
    }

    window.loadIndicatorData = function(url, handlerFunc) {
        //url = "data/access-to-improved.json";
        url = "data/gdp_per_capita.json";

        //url = "http://finddev.edip-maps.net/api/slicer/cube/geometry/cubes_aggregate?cubes=gdp_per_capita&drilldown=geometry__time|geometry__country_level0@name&format=json"
        // url = "http://api.worldbank.org/countries/all/indicators/NY.GDP.PCAP.KD?per_page=14200&format=jsonP";

        $.ajax({
            url: url,
            //jsonp: "prefix",
            //dataType: "jsonp",
            dataType: "json",
            data: {

            },
            success: handlerFunc
        });
    }

    window.loadCountries = function(url, handlerFunc) {
        // url = "data/access-to-improved.json";
        url = "data/countries.json";

        $.ajax({
            url: url,
            // jsonp: "prefix",
            dataType: "json",
            data: {

            },
            success: handlerFunc
        });
    }



}())