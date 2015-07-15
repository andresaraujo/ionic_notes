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
                templateUrl: "menu/menu.html"
            })

            .state('app.notes', {
                url: '/notes',
                views: {
                    'menuContent': {
                        templateUrl: 'notes/notes.html',
                        controller: 'NotesController as vm'
                    }
                }
            })

            .state('app.edit', {
                url: '/edit',
                views: {
                    'menuContent': {
                        templateUrl: 'notes/note.html',
                    }
                }
            })

        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/notes');
    }
    config.$inject = ['$stateProvider', '$urlRouterProvider'];

})();