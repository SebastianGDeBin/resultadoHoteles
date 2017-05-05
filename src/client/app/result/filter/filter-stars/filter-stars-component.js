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
        }).filter('filterStars',function () {

        return function (hotels,stars) {
            return hotels.filter(function (hotel) {
                if(stars.length == 0){
                    return true
                }else{
                    return stars.indexOf(hotel.stars)>-1;
                }
            })

        }
    });

    function filterStarsController(){

        let self = this;

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
            if(self.filters.stars.indexOf(star)>-1){
                self.filters.stars.splice(self.filters.stars.indexOf(star),1);
            }else{
                self.filters.stars.push(star);
            }
        };
    }

})();