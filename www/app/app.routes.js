(function() {
    'use strict';

    angular
        .module('app.routes', [])
        .config(config);

    // @ngInject
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider

            // setup an abstract state for the menu
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "app/layout/menu.html"
            })
        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/notes');
    }

})();