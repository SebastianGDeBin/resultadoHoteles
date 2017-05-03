(function() {

    'use strict';
    angular
        .module('filters')
        .component('filterStars',{
            controller: filterStarsController,
            require: {
                hotelsResultCtrl: '^hotelResultRoot'
            },
            bindings: {

            },
            templateUrl:"result/filter/filter-stars/filter-stars.html"
        });

    function filterStarsController(){

        let self = this;
        this.stars = [];

        this.allStars = function () {
            this.hotelsResultCtrl.hotelsFiltered = this.hotelsResultCtrl.hotels;
        };

        this.filterByStars = function (star) {
            let hotels = this.hotelsResultCtrl.hotels;

            self.stars.push(star);

            this.hotelsResultCtrl.hotelsFiltered = hotels.filter(function (hotel) {
                if(self.stars.indexOf(hotel.stars)>-1){
                    return hotel;
                }
            });

        };
    }

})();