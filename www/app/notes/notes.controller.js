(function() {
    'use strict';
    angular
        .module('app.notes.controller', [])
        .controller('NotesController', NotesController);

    // @ngInject
    function NotesController() {
        var vm = this;

        vm.showAll = false;
        vm.selectedNote = null;
        vm.notes = [{title:"A", content: "B"}, {title:"C", content: "D"}];

        vm.isNoteSelected = true;
    }

    NotesController.prototype = {

        enterNote: function() {
            this.notes.unshift({title: this.newTitle, content: this.newContent});
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