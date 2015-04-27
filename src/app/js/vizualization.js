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
        $(".flip").css("z-index", 10);
        $(this).css("z-index", 1000);
        $(".flip").find(".list-group").removeClass("shadow");

        $(this).find(".list-group").addClass("shadow");

        var isFlipped = $(this).find(".card").hasClass("flipped");

        $(".flip").find(".card").removeClass("flipped");
        //- $(".list-group").css("display": "none");

        if (isFlipped) {
            $(this).find(".card").removeClass("flipped");
            $(this).find(".list-group").removeClass("show-me");

        } else {
            $(this).find(".card").addClass("flipped");
            $(this).find(".list-group").addClass("show-me");
        }
        return false;
    });


    var model = {

        selectIndicator: function() {

            var indicatorLabel = arguments[1].target.text;
            this.activeIndicator(indicatorLabel);
            var current = this.selectionTracker();
            current.indicator = true;
            this.selectionTracker(current);
            //move to second
            $('#vizTabs a[href="#select-vizualization"]').tab('show')

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

        activeChart: ko.observable("test")

    }

    //enable knockout
    ko.applyBindings(model);


}())