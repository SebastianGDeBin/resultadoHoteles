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
        }).filter('filterPrice',function () {
        return function (hotels,price) {
            return hotels.filter(function (hotel) {
                return (hotel.price >= price.priceMin && hotel.price <= price.priceMax);
            })

        }
    });

    function filterPriceController(){
        this.slider = {
            options: {
                pushRange: true,
            }
        };

    }

})();