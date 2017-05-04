(function() {

    'use strict';
    angular
        .module('filters')
        .component('filterPrice',{
            controller: filterPriceController,
            bindings: {
                filters: '<'
            },
            require: {
                hotelsResultCtrl: '^hotelResultRoot'
            },
            templateUrl:"result/filter/filter-price/filter-price.html"
        });

    function filterPriceController(){
        var self = this;

        this.$onInit = function () {
            console.log("llegan los precios")
            console.log(self.filters)
        }

        this.filterByPrice = function () {
            var hotels = self.hotelsResultCtrl.hotels;

            self.hotelsResultCtrl.hotelsFiltered = hotels.filter(function (hotel) {
                if (hotel.price >= self.filters.price.priceMin && hotel.price <=self.filters.price.priceMax){
                    return hotel
                }
            });
        };

        this.slider = {
            value:150,
            options: {
                floor: 0,
                noSwitching: true,
                pushRange: true,
                onChange: this.filterByPrice

            }
        };

    }

})();