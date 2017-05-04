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
        this.$onInit = function () {
            console.log("list")
            console.log(self.filters)
        }

        this.removeFilters = function () {
            this.hotelsResultCtrl.$onInit();
        }

    }

})();