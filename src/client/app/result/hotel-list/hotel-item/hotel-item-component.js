(function() {

    'use strict';
    angular
        .module('hotelsResult')
        .component('hotelItem',{
            controller: HotelItemController,
            bindings: {
                hotel: '<'
            },
            templateUrl:"result/hotel-list/hotel-item/hotel-item.html"
        });


    function HotelItemController(){

        this.stars = function () {
            return Array(parseInt(this.hotel.stars));
        }

    }

})();