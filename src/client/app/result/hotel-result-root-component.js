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
        _self.hotels = [];
        this.$onInit = function(){
            HotelResultService.getHotels()
                .then(function success(response) {
                    _self.hotels = response.listHotel;
                    _self.filters = response.filters;
                }, function error(error) {
                    console.log(error);
                });

        };
    }

})();
