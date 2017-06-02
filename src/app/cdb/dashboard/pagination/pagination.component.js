(function() {
    'use strict';

    var MyPage = MyPage || {};

    MyPage.helpers = {
        getPagination: function(pageSize, currentPage, totalNbComputer) {
          var values = [];
          var NB_PAGINATION = 10;
          //CALCULATE NUMBER OF PAGINATION
          var totalPages = 1, reste = 0, quotient = 0;
          if (totalNbComputer > pageSize) {
              //number of pagination to display computer list
              reste = totalNbComputer % pageSize;
              quotient = reste != 0
                      ? totalNbComputer / pageSize + 1
                      : totalNbComputer / pageSize;
              totalPages = quotient;
          }

          //DISPLAYED PAGINATIONS
          var pgStart = Math.max(currentPage - NB_PAGINATION / 2, 1);
          var pgEnd = pgStart + NB_PAGINATION;
          if (pgEnd > totalPages + 1) {
              var diff = pgEnd - totalPages;
              pgStart -= diff - 1;
              if (pgStart < 1) {
                  pgStart = 1;
              }
              pgEnd = totalPages + 1;
          }
          values[0] = pgStart;
          values[1] = pgEnd;
          values[2] = totalPages;
          console.log(values[0]+ " " + values[1] + " "+ values[2]);
          return values;
        }
    };

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
          vm.myValues = MyPage.helpers.getPagination(vm.pageSize, vm.currentPage, vm.totalNbComputer);
          vm.pgStart = vm.myValues[0];
          vm.pgEnd = vm.myValues[1];
          vm.totalPagination = vm.myValues[2];
          vm.isLastPage = (vm.currentPage == vm.totalPagination);
          vm.showPagination();
        }

        vm.numPages = function () {
          return Math.ceil(vm.totalNbComputer / $scope.pageSize);
        };

        vm.showPagination = function () {
          vm.visiblePages = [];
          for (var i = vm.pgStart; i< vm.pgEnd; i++){
            vm.visiblePages.push(i);
          }
          vm.isLastPage = (vm.currentPage == vm.totalPagination);
        };
        //On click pagination index
        vm.selectPage = function(index) {
            //Reload pagination
            vm.currentPage = index;
            vm.myValues = MyPage.helpers.getPagination(vm.pageSize, vm.currentPage, vm.totalNbComputer);
            vm.pgStart = vm.myValues[0];
            vm.pgEnd = vm.myValues[1];
            vm.showPagination();
            //Dashboard callback
            vm.events.onPageChange(vm.currentPage);
        };
        //On click page size choice index
        vm.selectPageSize = function(size) {
            vm.pageSize = size;
            vm.events.onPageSizeChange(vm.pageSize);
        }
    }
})();
