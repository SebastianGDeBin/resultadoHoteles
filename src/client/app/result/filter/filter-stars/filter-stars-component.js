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

        this.numberStars = function (number) {
            return Array(parseInt(number));
        };

        this.allStars = function () {
            self.filters.stars = [];

            for(var i=1; i < self.filters.checkStar.length ; i++){
                self.filters.checkStar[i] = false;
            }
        };

        this.filterByStars = function (star) {
            self.filters.checkStar[0] = false;

            if(self.filters.stars.indexOf(star)>-1){
                self.filters.stars.splice(self.filters.stars.indexOf(star),1);
            }else{
                self.filters.stars.push(star);
            }
        };
    }

})();