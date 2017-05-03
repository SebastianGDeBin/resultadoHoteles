(function() {

    'use strict';
    angular
        .module('filters')
        .component('filterPrice',{
            controller: filterPriceController,
            bindings: {

            },
            templateUrl:"result/filter/filter-price/filter-price.html"
        });

    function filterPriceController(){
        this.slider = {
            minValue: 10,
            maxValue: 90,
            options: {
                floor: 0,
                ceil: 100,
                step: 1
            }
        };

    }

})();