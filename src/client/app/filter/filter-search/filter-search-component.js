(function() {

    'use strict';
    angular
        .module('filters')
        .component('filterSearch',{
            controller: filterSearchController,
            bindings: {

            },
            templateUrl:"filter/filter-search/filter-search.html"
        });

    function filterSearchController(){
        this.searchValue;

        this.filterName = function () {
            this.listTodo = this.listTodo.filter(function(item){
                return id !== item.id;
            });
        }


    }

})();