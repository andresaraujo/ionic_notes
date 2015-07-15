angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("menu/menu.html","<ion-side-menus enable-menu-with-back-views=\"false\">\n    <ion-side-menu-content>\n        <ion-nav-bar class=\"bar-stable bar-positive mdl-shadow--2dp\">\n            <ion-nav-back-button>\n            </ion-nav-back-button>\n\n            <ion-nav-buttons side=\"left\">\n                <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\">\n                </button>\n            </ion-nav-buttons>\n        </ion-nav-bar>\n\n        <ion-nav-view name=\"menuContent\"></ion-nav-view>\n    </ion-side-menu-content>\n\n    <ion-side-menu side=\"left\">\n        <ion-header-bar class=\"bar-stable bar-positive mdl-shadow--2dp\">\n            <h1 class=\"title\"></h1>\n        </ion-header-bar>\n        <ion-content>\n            <ion-list>\n                <ion-item menu-close href=\"#/app/notes/edit\">\n                    Edit template\n                </ion-item>\n            </ion-list>\n        </ion-content>\n    </ion-side-menu>\n</ion-side-menus>");
$templateCache.put("notes/card.html","<div class=\"mdl-card mdl-shadow--2dp\">\n    <div ng-hide=\"vm.edit\">\n        <div class=\"mdl-card__title\">\n            <h2 class=\"mdl-card__title-text\">{{vm._title}}</h2>\n        </div>\n        <div class=\"mdl-card__supporting-text\">\n            {{vm._content}}\n        </div>\n        <div class=\"mdl-card__actions mdl-card--border\">\n            <div class=\"mdl-layout-spacer\"></div>\n            <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\"\n                    ng-click=\"vm.ondelete()\">\n                DELETE\n            </a>\n        </div>\n    </div>\n    <div ng-hide=\"!vm.edit\">\n        <div class=\"mdl-card__supporting-text\">\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                <input class=\"mdl-textfield__input\" type=\"text\" id=\"title\"\n                        ng-model=\"vm.newTitle\"/>\n                <label class=\"mdl-textfield__label\" for=\"title\">Title</label>\n            </div>\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                <textarea class=\"mdl-textfield__input\" type=\"text\" rows=\"3\" id=\"note\"\n                        ng-model=\"vm.newContent\"></textarea>\n                <label class=\"mdl-textfield__label\" for=\"note\">Add note</label>\n            </div>\n        </div>\n        <div class=\"mdl-card__actions mdl-card--border\">\n            <div class=\"mdl-layout-spacer\"></div>\n            <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\"\n                    ng-click=\"vm.onsave({target: {_title: vm.newTitle, _content: vm.newContent}})\">\n                DONE\n            </a>\n        </div>\n    </div>\n\n</div>");
$templateCache.put("notes/note.html","<ion-view view-title=\"User\">\n    <ion-content style=\"background: #e8ebf1;\" class=\"\">\n        edit note (notes/edit)\n    </ion-content>\n</ion-view>\n");
$templateCache.put("notes/notes.html","<ion-view view-title=\"User\">\n    <ion-content style=\"background: #e8ebf1;\" class=\"\">\n\n        <div class=\"mdl-grid\">\n            <div class=\"center\">\n\n                <div class=\"mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp\">\n                    <div class=\"mdl-card__supporting-text\">\n                        <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                            <input class=\"mdl-textfield__input\" type=\"text\" id=\"title\" />\n                            <label class=\"mdl-textfield__label\" for=\"title\">Title</label>\n                        </div>\n                        <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                            <textarea class=\"mdl-textfield__input\" type=\"text\" rows=\"3\" id=\"note\"></textarea>\n                            <label class=\"mdl-textfield__label\" for=\"note\">Add note</label>\n                        </div>\n                    </div>\n                    <div class=\"mdl-card__actions mdl-card--border\">\n                        <div class=\"mdl-layout-spacer\"></div>\n                        <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-button--raised mdl-js-ripple-effect\"\n                                ng-click=\"vm.enterNote()\">\n                            DONE\n                        </a>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class=\"mdl-grid\">\n            <div class=\"mdl-cell\" ng-repeat=\"note in vm.notes\">\n                <notes-card title=\"{{note.title}}\" content=\"{{note.content}}\" edit=\"vm.selectedNote == note\"\n                            ng-click=\"vm.selectNote(note)\" onsave=\"vm.doneEditing(target)\"\n                            ondelete=\"vm.deleteMe(note)\"></notes-card>\n            </div>\n        </div>\n\n\n        <div class=\"mdl-grid\">\n            <div class=\"mdl-cell mdl-cell--1-col mdl-cell--4-col-phone mdl-cell--2-col-tablet\">X</div>\n            <div class=\"mdl-cell mdl-cell--1-col mdl-cell--4-col-phone mdl-cell--2-col-tablet\">X</div>\n            <div class=\"mdl-cell mdl-cell--1-col mdl-cell--4-col-phone mdl-cell--2-col-tablet\">X</div>\n            <div class=\"mdl-cell mdl-cell--1-col mdl-cell--4-col-phone mdl-cell--2-col-tablet\">X</div>\n\n            <div class=\"mdl-cell mdl-cell--1-col mdl-cell--4-col-phone mdl-cell--2-col-tablet\">X</div>\n            <div class=\"mdl-cell mdl-cell--1-col mdl-cell--4-col-phone mdl-cell--2-col-tablet\">X</div>\n            <div class=\"mdl-cell mdl-cell--1-col mdl-cell--4-col-phone mdl-cell--2-col-tablet\">X</div>\n            <div class=\"mdl-cell mdl-cell--1-col mdl-cell--4-col-phone mdl-cell--2-col-tablet\">X</div>\n\n            <div class=\"mdl-cell mdl-cell--1-col mdl-cell--4-col-phone mdl-cell--2-col-tablet\">X</div>\n            <div class=\"mdl-cell mdl-cell--1-col mdl-cell--4-col-phone mdl-cell--2-col-tablet\">X</div>\n            <div class=\"mdl-cell mdl-cell--1-col mdl-cell--4-col-phone mdl-cell--2-col-tablet\">X</div>\n            <div class=\"mdl-cell mdl-cell--1-col mdl-cell--4-col-phone mdl-cell--2-col-tablet\">X</div>\n        </div>\n\n    </ion-content>\n</ion-view>\n");}]);
(function() {
    'use strict';
    angular.module('app', [
        'ionic',
        'ngCordova',
        'ionic.service.core',
        'ionic.service.push',
        'ionic.service.deploy',
        'templates',
        'app.routes',
        'app.notes'
    ])
    .constant("mdl", componentHandler) // Provide material design lite as a constant
    .config(config)
    .run(appRun);

    // @ngInject
    function config($ionicAppProvider) {
        // Identify app
        $ionicAppProvider.identify({
            // The App ID (from apps.ionic.io) for the server
            app_id: 'YOUR_APP_ID',
            // The public API key all services will use for this app
            api_key: 'YOUR_PUBLIC_KEY',
            // The GCM project ID (project number) from your Google Developer Console (un-comment if used)
            // gcm_id: 'GCM_ID'
        });
    }
    config.$inject = ['$ionicAppProvider'];

    // @ngInject
    function appRun($rootScope, $ionicDeploy, $ionicPlatform, $cordovaStatusbar, mdl) {
        //When device is ready
        $ionicPlatform.ready(function() {

            // Hide the accessory bar by default
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }

            // Color the iOS status bar text to white
            if (window.StatusBar) {
                $cordovaStatusbar.overlaysWebView(true);
                $cordovaStatusBar.style(1); //Light
            }

            // Default update checking
            $rootScope.updateOptions = {
                interval: 2 * 60 * 1000
            };

            // Watch Ionic Deploy service for new code
            $ionicDeploy.watch($rootScope.updateOptions).then(function() {}, function() {}, function(hasUpdate) {
                $rootScope.lastChecked = new Date();
                console.log('WATCH RESULT', hasUpdate);
            });

            $rootScope.$on('$ionicView.afterEnter', function(){
                mdl.upgradeAllRegistered();
            });
        });
    }
    appRun.$inject = ['$rootScope', '$ionicDeploy', '$ionicPlatform', '$cordovaStatusbar', 'mdl'];
})();
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
(function() {
    'use strict';
    angular
        .module('app.notes', [
            'app.notes.controller',
            'app.notes.card'
        ]);

})();
(function() {
    'use strict';
    angular
        .module('app.notes.controller', [])
        .controller('NotesController', NotesController);

    // @ngInject
    function NotesController() {
        var vm = this;

        vm.title = "Hellows";
        vm.selectedNote = null;
        vm.notes = [{title:"A", content: "B"}, {title:"C", content: "D"}];

        vm.isNoteSelected = true;
    }

    NotesController.prototype = {

        enterNote: function() {
            vm.notes.unshift({title: this.newTitle, content: this.newContent});
            this.newTitle =  "";
            this.newContent =  "";
            this.showAll = false;
        },

        selectNote: function(note) {
            if (this._ignoreSelection) {
                this._ignoreSelection = false;
                return;
            }
            this.selectedNote = note;
        },

        doneEditing: function(noteChanges) {
            if(!this.selectedNote) return;

            this.selectedNote.title = noteChanges._title || "";
            this.selectedNote.content = noteChanges._content || "";

            //todo: save on a service

            this.clearSelection(true);
        },

        deleteMe: function(note) {
            this.clearSelection(true);

            var index =  this.notes.indexOf(note);
            this.notes.splice(index, 1);
        },

        clearSelection: function(preventSelection) {
            this.selectedNote = null;
            if (preventSelection) {
                this._ignoreSelection = true;
            }
        }
    };

})();
(function() {
    'use strict';

    angular
        .module('app.notes.card', [])
        .directive("notesCard", NoteCardDirective);

    // @ngInject
    function NoteCardDirective() {
        return {
            templateUrl: 'notes/card.html',
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                title : '@title',
                content: '@content',
                edit: '=',
                ondelete: "&",
                onsave: "&"
            },
            controller: NoteCard
        };
    }

    // @ngInject
    function NoteCard() {
    }

    NoteCard.prototype = {
        set title(title) {
            this._title =  title;
            this.newTitle = title;
        },

        get title() {
            return this._title;
        },

        set content(content) {
            this._content =  content;
            this.newContent = content;
        },

        get content() {
            return this._content;
        },

        set edit(edit){
            if(edit) {
                this.title = this._title;
                this.content = this._content;
            }
            this._edit = edit;
        },

        get edit() {
            return this._edit;
        }

    };

})();