(function() {

    'use strict';
    angular
        .module('filters')
        .component('filterSearch',{
            controller: filterSearchController,
            require: {
                hotelsResultCtrl: '^hotelResultRoot'
            },
            bindings: {
                filters: '<'
            },
            templateUrl:"result/filter/filter-search/filter-search.html"
        });

    function filterSearchController(){
        var self = this;

        this.filterByName = function () {

            var hotels = this.hotelsResultCtrl.hotels;

            var hotelsFiltred = hotels.filter(function (hotel) {
                return hotel.name.toLowerCase().indexOf(self.filters.searchName) != -1;
            })


            this.hotelsResultCtrl.hotels = hotelsFiltred;
        };
    }

})();