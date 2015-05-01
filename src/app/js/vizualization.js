(function() {

    /**
     * Start the Wiard mode
     **/

    $(function() {
        // $('#vizTabs a:first').tab('show')
    });

    $(".list-group-item").popover({
        trigger: "hover"
    });

    $(".flip").click(function() {

        if (expandedCategory) {
            expandedCategory = false;
            return;
        }

        $(".flip").css("z-index", 10);
        $(this).css("z-index", 1000);
        $(".flip").find("div.list-group").removeClass("shadow");

        $(this).find("div.list-group").addClass("shadow");

        var isFlipped = $(this).find(".card").hasClass("flipped");

        $(".flip").find(".card").removeClass("flipped");
        //- $(".list-group").css("display": "none");

        if (isFlipped) {
            //$(this).find(".card").removeClass("flipped");
            // $(this).find(".list-group").removeClass("show-me");

        } else {
            $(this).find(".card").addClass("flipped");
            //$(this).find(".list-group").addClass("show-me");
        }
        return true;
    });

    var expandedCategory = false;

    var model = {

        selectIndicator: function() {
            if (expandedCategory) {
                return;
            }
            var indicatorLabel = arguments[1].target.text;
            this.activeIndicator(indicatorLabel);
            var current = this.selectionTracker();
            current.indicator = true;
            current.vizualization = false;
            this.selectionTracker(current);
            //move to second
            $('#vizTabs a[href="#select-vizualization"]').tab('show')

        },

        selectVizualization: function(type) {

            var vizualizationType = type;
            this.activeChart(vizualizationType);
            var current = this.selectionTracker();
            current.indicator = true;
            current.vizualization = true;
            this.selectionTracker(current);
            //move to third tab
            $('#vizTabs a[href="#vizualize"]').tab('show');

            window.loadIndicator(dataLoadHandler);

        },

        expandCategory: function(model, evt) {

            expandedCategory = true;


        },

        clearIndicator: function() {

            var current = model.selectionTracker();
            current.indicator = false;
            model.selectionTracker(current);

        },

        clearChart: function() {

            var current = model.selectionTracker();
            current.vizualization = false;
            model.selectionTracker(current);

        },

        showView: function(code) {
            $('#btn-primary').removeClass('active');
            $('#by-category').removeClass('active');
            $('#by-source').removeClass('active');
            $('#all-indicators').removeClass('active');
            switch (code) {

                case "category":
                    $('#btn-category').addClass('active');
                    $('#by-category').addClass('active');
                    break;

                case "source":
                    $('#btn-source').addClass('active');
                    $('#by-source').addClass('active');
                    break;

                case "alphabetic":
                    $('#btn-alphabetic').addClass('active');
                    $('#all-indicators').addClass('active');
                    break;

            }



        },

        selectionTracker: ko.observable({

            indicator: false,
            vizualization: false

        }),

        activeIndicator: ko.observable(""),

        activeChart: ko.observable("")

    }

    //enable knockout
    ko.applyBindings(model);



    var dataLoadHandler = function(response) {

        //prepare region search 
        var availableRegions = [
            "Algeria",
            "Albania",
            "Angola",
            "China",
            "Colombia",
            "Croatia"
        ];

        $("#regions").autocomplete({
            source: availableRegions
        });


        //prepare years

        $("#slider-years").slider({
            range: true,
            min: 1990,
            max: 2013,
            values: [1995, 2010],
            slide: function(event, ui) {
                $("#years-label").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });

        $("#years-label").val($("#slider-years").slider("values", 0) +
            " - " + $("#slider-years").slider("values", 1));

        $('#viz-container').highcharts({
            title: {
                text: 'Water - Access to improved water source',
                x: -20 //center
            },
            subtitle: {
                text: 'World Bank',
                x: -20
            },
            xAxis: { //years
                categories: [1990, 1991, 1992, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003]
            },
            yAxis: {
                title: {
                    text: 'Accessibility'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Angola',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'New York',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Berlin',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });

    }


}())