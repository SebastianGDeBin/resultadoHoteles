(function() {

    'use strict';

    angular
        .module('hotelsResult')
        .component('hotelItem',{
            bindings: {
                hotel: '<'
            },
            templateUrl:"result/hotel-list/hotel-item/hotel-item.html"
        });
})();