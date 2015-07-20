(function() {
    'use strict';

    angular
        .module('app.notes.card', [])
        .directive("notesCard", NoteCardDirective);

    // @ngInject
    function NoteCardDirective() {
        return {
            templateUrl: 'app/notes/card.html',
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