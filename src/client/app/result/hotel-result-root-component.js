(function(){
    angular
        .module('hotelsResult')
        .component('hotelsResultRoot',{
            controller: HotelResultController,
            templateUrl:'result/hotel-result-root.html'
        });
    HotelResultController.$inject = ['HotelsResultService'];

    function HotelResultController(HotelsResultService){

        var _self = this;

        this.$onInit = function(){
            _self.listHotels = HotelsResultService.getHotels();
        };

    }

})();
