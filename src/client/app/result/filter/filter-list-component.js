(function(){
    angular
        .module('filters')
        .component('filterList',{
            controller: filterListController,
            bindings:{
              filters: '<'
            },
            templateUrl:'result/filter/filter-list.html'
        });

    function filterListController(){

    }

})();