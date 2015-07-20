(function() {
    'use strict';
    angular
        .module('app.notes', [
            'app.notes.controller',
            'app.notes.card'
        ])
        .config(config)
    ;


    // @ngInject
    function config($stateProvider) {
        $stateProvider
            .state('app.notes', {
                url: '/notes',
                views: {
                    'menuContent': {
                        templateUrl: 'app/notes/notes.html',
                        controller: 'NotesController as vm'
                    }
                }
            })
        ;
    }
    config.$inject = ['$stateProvider'];

})();