(function(){
    'use strict';

    angular
        .module('hotelsResult')
        .service('HotelResultService', HotelResultService);

    HotelResultService.$inject = ['$http'];

    function HotelResultService($http){

        this.listHotel = [
            {"_id":{"$oid":"58cb47efe3dcd6c694f67533"},"name":"Hotel Emperador","stars":"3","price":1596.0,"image":"http://placehold.it/150/92c952"},
            {"_id":{"$oid":"58cb47efe3dcd6c694f67534"},"name":"Petit Palace San Bernardo","stars":"4","price":2145.0,"image":"http://placehold.it/150/92c952"},
            //{"_id":{"$oid":"58cb47efe3dcd6c694f67535"},"name":"Hotel Nuevo Boston","stars":"2","price":861.0,"image":"http://placehold.it/150/92c952"},
            //{"_id":{"$oid":"58cb47efe3dcd6c694f67536"},"name":"Aquarius Casino Resort","stars":"1","price":450.0,"image":"http://placehold.it/150/92c952"},
            //{"_id":{"$oid":"58cb47efe3dcd6c694f67537"},"name":"The Orleans Hotel and Casino","stars":"5","price":3250.0,"image":"http://placehold.it/150/92c952"},
            //{"_id":{"$oid":"58cb47efe3dcd6c694f67538"},"name":"Aquarius Casino Resort","stars":"3","price":1350.0,"image":"http://placehold.it/150/92c952"},
            {"_id":{"$oid":"58cb47efe3dcd6c694f67539"},"name":"Sheraton Dallas Hotel","stars":"4","price":3000.0,"image":"http://placehold.it/150/92c952"}
            ];

        this.getHotels = function() {
            return this.listHotel;
        }
    }

})();
