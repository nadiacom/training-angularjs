(function() {
    'use strict';

    angular.module('app.cdb')
        .component('pageComponent', {
            templateUrl: 'src/app/cdb/dashboard/pagination/pagination.html',
            controller: PaginationController,
            controllerAs: 'pageCtrl',
            bindings: {
                totalNbComputer: '=',
                events: '<'
            }
        });
    /* @ngInject */
    function PaginationController($log) {
        // jshint validthis: true
        const vm = this;
        vm.pageSizeChoices = [100, 50, 10];
        vm.$onInit = $onInit;

        function $onInit() {
          //init view's values
          vm.currentPage = 1;
          vm.pageSize = 10;
          //Calculate data
          vm.getPagination();
          vm.showPagination();
        };

        vm.getPagination = function(){
          var NB_PAGINATION = 10;
          vm.totalPagination = 1;
          if (vm.totalNbComputer > vm.pageSize) {
              vm.totalPagination = Math.ceil(vm.totalNbComputer / vm.pageSize);
          }
          vm.pgStart = Math.max(vm.currentPage - NB_PAGINATION / 2, 1);
          vm.pgEnd = vm.pgStart + NB_PAGINATION;
          if (vm.pgEnd > vm.totalPagination + 1) {
              var diff = vm.pgEnd - vm.totalPagination;
              vm.pgStart -= diff - 1;
              if (vm.pgStart < 1) {
                  vm.pgStart = 1;
              }
              vm.pgEnd = vm.totalPagination + 1;
          }
        };
        vm.showPagination = function () {
          vm.visiblePages = [];
          for (var i = vm.pgStart; i< vm.pgEnd; i++){
            vm.visiblePages.push(i);
          }
          vm.isLastPage = (vm.currentPage == vm.totalPagination);
        };
        
        //DASHBOARD CALLBACKS
        //On click pagination index
        vm.selectPage = function(index) {
            //Reload pagination
            vm.currentPage = index;
            vm.getPagination();
            vm.showPagination();
            //Dashboard callback
            vm.events.onPageChange(vm.currentPage);
        };
        //On click page size choice index
        vm.selectPageSize = function(size) {
            vm.pageSize = size;
            //Reload pagination
            vm.currentPage = 1;
            vm.getPagination();
            vm.showPagination();
            vm.events.onPageSizeChange(vm.pageSize);
        };
    }
})();
