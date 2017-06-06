(function () {
    'use strict';
    angular.module('company.model', [])
        .factory('Company', Company);

    function Company() {

        /**
         * Company constructor.
         */
        function Company(id, name) {
            this.id = id;
            this.name = name;
        }

        /**
         * Static method, assigned to class
         * Instance ('this') is not available in static context
         */
        Company.build = function (data) {
            return new Company(
                data.id,
                data.name
            );
        };

        Company.map = function (responseData) {
            return Company.build(responseData);
        };

        /**
         * Return the constructor function
         */
        return Company;
    }
})();
