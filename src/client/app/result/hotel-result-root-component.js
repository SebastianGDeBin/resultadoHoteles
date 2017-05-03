(function(){
    angular
        .module('hotelsResult')
        .component('hotelResultRoot',{
            controller: HotelResultController,
           templateUrl:'result/hotel-result-root.html'
        });
    HotelResultController.$inject = ['HotelResultService'];

    function HotelResultController(HotelResultService){

        var _self = this;
        _self.hotelsFiltered = [];
        this.$onInit = function(){
            HotelResultService.getHotels()
                .then(function success(response) {
                    _self.hotels = response;
                    _self.hotelsFiltered = response;
                }, function error(error) {
                    console.log(error);
                });

            this.filters = {
                "name":" ",
                "searchName":" ",
                "price": {
                    "priceMin": 200,
                    "priceMax": 3500
                },
                "stars": {
                    "allStars":true,
                    "five": false,
                    "four": false,
                    "three": false,
                    "two": false,
                    "one": false
                }
            }
            
        };
    }

})();
