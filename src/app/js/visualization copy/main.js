(function() {
    'use strict';

    var baseUrl;
    /* if app files in different location, hardcode the path, USE SLASH AT END OF URL*/
    // baseUrl = "http://shj.blueraster.com/apps-wiseguy/template-esri/src/";

    var pathPrefix = baseUrl || document.location.pathname.replace(/\/[^/]+$/, "");
    if (pathPrefix.slice(-1) !== "/") {
        pathPrefix = pathPrefix + "/";
    }




    requirejs.config({
        baseUrl: "/app/js",
        paths: {
            'bower': '../bower_components'
        },
        deps: [],
        callback: function() {
            require(["app/startup",
                "libs/jquery.cookie",
                "libs/jquery.joyride-2.1",
                "dojo/domReady!"
            ], function() {



            });
        }
    });


}())