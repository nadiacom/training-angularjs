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
              long diff = pgEnd - totalPages;
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
            controllerAs: 'pageCtrl'
        });
    /* @ngInject */
    function PaginationController() {
        // jshint validthis: true
        const vm = this;
        //Request from view
        vm.currentPage = 1;
        vm.pageSize = 10;
        //Data from API
        vm.listComputers = [{"id":1,"name":"MacBook Pro 15.4 inch","introduced":null,"discontinued":null,
        "company":{"id":1,"name":"Apple Inc."}},{"id":2,"name":"CM-2a","introduced":null,"discontinued":null,"company":{"id":2,"name":"Thinking Machines"}}];
        vm.totalNbComputer = 510;
        //Calculated data
        vm.visiblePages = [];

        vm.myValues = MyPage.helpers.getPagination(vm.pageSize, vm.currentPage, vm.totalNbComputer);
        vm.pgStart = vm.myValues[0];
        vm.pgEnd = vm.myValues[1];
        vm.totalPagination = vm.myValues[3];
        vm.isLastPage = vm.currentPage == vm.totalPagination;

        vm.numPages = function () {
          return Math.ceil(vm.listComputers.length / $scope.pageSize);
        };

        vm.makevisiblePages = function () {
          console.log("test" + vm.pgStart);
          for (var i = vm.pgStart; i< vm.pgEnd+1; i++){
            vm.visiblePages.push(i);
          }
        };
        vm.makevisiblePages();

        vm.selectPage = function(index) {
            vm.currentPage = index;
            vm.pgStart = 1;
            vm.pgEnd = 5;
        }
    }
})();
