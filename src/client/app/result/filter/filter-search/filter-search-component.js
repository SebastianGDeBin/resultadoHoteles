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
        let self = this;
        let hotels = [];

        this.$onInit= function () {
            hotels = self.hotelsResultCtrl.hotels;
            console.log("nombre")
            console.log(self.filters)
        }
        this.filterByName = function () {
            var hotels = this.hotelsResultCtrl.hotels;

            var hotelsFiltred = hotels.filter(function (hotel) {

                return hotel.name.toLowerCase().indexOf(self.filters.nameSearched) != -1;
            });

            this.hotelsResultCtrl.hotelsFiltered = hotelsFiltred;
        };
    }

})();