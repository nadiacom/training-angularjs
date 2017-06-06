(function() {
    'use strict';
    angular.module('computer.model', ['company.model'])
      .factory('Computer', Computer);

    function Computer(Company) {

      /**
      * Computer constructor.
      */
      function Computer(id, name, introduced, discontinued, company) {
         this.id = id;
         this.name = name;
         this.introduced = introduced === null || angular.isUndefined(introduced) ? null : new Date(introduced.year, introduced.monthValue - 1, introduced.dayOfMonth).toISOString().slice(0, 10);
         this.discontinued = discontinued === null || angular.isUndefined(discontinued) ? null : new Date(discontinued.year, discontinued.monthValue - 1, discontinued.dayOfMonth).toISOString().slice(0, 10);
         this.company= company;
      }

      /**
       * Static method, assigned to class
       * Instance ('this') is not available in static context
       */
       Computer.build = function (data) {
            return new Computer(
                data.id,
                data.name,
                data.introduced,
                data.discontinued,
                data.company === null || angular.isUndefined(data.company) ? null : Company.build(data.company) // another model
            );
        };

        Computer.map = function (responseData) {
            return Computer.build(responseData);
        };

        /**
         * Return the constructor function
         */
        return Computer;
  }
  Computer.$inject = ['Company'];
})();
