(function(){
    angular
        .module('filters')
        .component('filterList',{
            controller: filterListController,
            bindings:{
              filters: '<'
            },require: {
                hotelsResultCtrl: '^hotelResultRoot'
            },
            templateUrl:'result/filter/filter-list.html'
        });

    function filterListController(){
        var self = this;

        this.removeFilters = function () {
            self.hotelsResultCtrl.$onInit();
        };
    }

})();