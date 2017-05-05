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
                    _self.hotels = response.listHotel;
                    _self.hotelsFiltered = response.listHotel;
                    console.log("filtros server")
                    _self.filters = response.filters;
                    console.log(_self.filters);
                }, function error(error) {
                    console.log(error);
                });

        };
    }

})();
