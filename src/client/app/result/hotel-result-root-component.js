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

        this.$onInit = function(){
            HotelResultService.getHotels()
                .then(function success(response) {
                    _self.hotels = response;
                }, function error(error) {
                    console.log(error);
                });
            return _self.hotels;
        };

    }

})();
