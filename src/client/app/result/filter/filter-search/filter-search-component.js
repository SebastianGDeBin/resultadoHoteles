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

            },
            templateUrl:"result/filter/filter-search/filter-search.html"
        });

    function filterSearchController(){
        let self = this;
        let hotels = [];
        this.nameSearched;

        this.$onInit= function () {
            hotels = self.hotelsResultCtrl.hotels;
        }
        this.filterByName = function () {

            var hotels = this.hotelsResultCtrl.hotels;

            var hotelsFiltred = hotels.filter(function (hotel) {
                return hotel.name.toLowerCase().indexOf(self.nameSearched) != -1;
            });


            this.hotelsResultCtrl.hotels = hotelsFiltred;
        };
    }

})();