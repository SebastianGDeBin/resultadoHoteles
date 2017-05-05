(function() {

    'use strict';
    angular
        .module('filters')
        .component('filterSearch',{
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
    })

})();