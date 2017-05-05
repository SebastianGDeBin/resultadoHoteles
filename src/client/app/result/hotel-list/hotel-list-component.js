(function(){
    'use strinct';

    angular
        .module('hotelsResult')
        .component('hotelList',{
            controller: hotelListController,
            bindings:{
                hotels:'<',
                filters:'<'
            },
            templateUrl:"result/hotel-list/hotel-list.html"
        });

    function hotelListController() {
        this.$onInit = function () {
            console.log("filtros en list hotels")
            console.log(this.filters)
        }

    }
})();