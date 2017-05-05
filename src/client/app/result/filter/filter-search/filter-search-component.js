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
            var self = this;

            return function (hotels,nameSearched) {
                return hotels.filter(function (hotel) {
                    console.log("self filters");
                    console.log(nameSearched);
                    return hotel.name.toLowerCase().indexOf(nameSearched) != -1;
                })

            }
    })


    function filterSearchController(){
        let self = this;

        this.$onInit= function () {
            console.log("nombre")
            console.log(self.filters)
        }

    }

})();