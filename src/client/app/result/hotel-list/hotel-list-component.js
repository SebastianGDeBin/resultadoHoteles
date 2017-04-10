(function(){
    'use strinct';

    angular
        .module('hotelsResult')
        .component('hotelList',{
            bindings:{
                hotels:'<'
            },
            templateUrl:"result/hotel-list/hotel-list.html"
        });
})();