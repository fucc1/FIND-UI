(function() {



    var model = {
        searchResults: ko.observableArray([]),

        searchValue: ko.observable(""),

        selectIndicator: function(obj) {
            window.location.href = "viz-advanced.html#ind=" + obj.id
            // alert("selected indicator")
        }
    }

    ko.applyBindings(model);
    //search event
    $(".main-search").keyup(function() {

        var value = $(".main-search")[0].value;
        var url = "http://finddev.edip-maps.net/api/3/search";
        model.searchValue(value);
        if (value.length < 2) {
            model.searchResults.removeAll();
            return;
        }

        $.ajax({
            url: url,
            jsonp: "callback",
            dataType: "jsonp",
            //dataType: "json",
            data: {
                q: value
            },
            success: searchHandler
        });

    });

    var searchHandler = function(response) {
        response.data
        model.searchResults.removeAll();

        for (id in response.data) {
            var resultItem = {
                id: id,
                label: response.data[id]
            }
            model.searchResults.push(resultItem);
        }

    }




}())