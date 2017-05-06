(function() {

    'use strict';
    angular
        .module('filters')
        .component('filterSearch',{
            controller: filterSearchController,
            bindings: {
                filters: '<'
            },
            templateUrl:"result/filter/filter-search/filter-search.html"
        }).filter('filterSearch',function () {
            return function (hotels,nameSearched) {
                return hotels.filter(function (hotel) {
                    return hotel.name.toLowerCase().indexOf(nameSearched.toLowerCase()) != -1;
                })

            }
    });
    function filterSearchController(){
        var self = this;


        this.filterByName = function () {
            self.filters.nameSearched = self.filters.nameDefault;
        }
    }

})();