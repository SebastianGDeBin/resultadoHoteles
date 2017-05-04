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
                filters:'<'
            },
            templateUrl:"result/filter/filter-stars/filter-stars.html"
        });

    function filterStarsController(){

        let self = this;
        this.stars = [];
        this.filterStars = ["1","2","3","4","5"];

        this.numberStars = function (number) {
            return Array(parseInt(number));
        }

        this.$onInit  = function () {
            console.log("llegan las estrellas")
            console.log(self.filters);
        };

        this.allStars = function () {
            this.hotelsResultCtrl.hotelsFiltered = this.hotelsResultCtrl.hotels;
        };

        this.filterByStars = function (star) {
            let hotels = this.hotelsResultCtrl.hotels;

            if(self.stars.indexOf(star)>-1){
                self.stars.splice(self.stars.indexOf(star),1);
            }else{
                self.stars.push(star);
            }

            console.log("array stars")
            console.log(self.stars)

            this.hotelsResultCtrl.hotelsFiltered = hotels.filter(function (hotel) {
                if(self.stars.indexOf(hotel.stars)>-1){
                    return hotel;
                }
            });

            if(self.stars.length == 0){
                self.allStars();
            }

        };
    }

})();