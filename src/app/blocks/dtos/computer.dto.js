(function () {
    'use strict';
    angular.module('computer.dto', [])
        .factory('ComputerDTO', ComputerDTO);

    function ComputerDTO() {

        /**
         * ComputerDTO constructor.
         */
        function ComputerDTO(id, name, introduced, discontinued, companyId) {
            this.id = id;
            this.name = name;
            this.introduced = introduced === null || angular.isUndefined(introduced) ? null :
                new Date(introduced.year, introduced.monthValue - 1, introduced.dayOfMonth).toISOString()
                    .slice(0, 10);
            this.discontinued = discontinued === null || angular.isUndefined(discontinued) ? null :
                new Date(discontinued.year, discontinued.monthValue - 1, discontinued.dayOfMonth).toISOString()
                    .slice(0, 10);
            this.companyId = companyId;
        }

        /**
         * Static method, assigned to class
         * Instance ('this') is not available in static context
         */
        ComputerDTO.build = function (data) {
            return new ComputerDTO(
                data.id,
                data.name,
                data.introduced,
                data.discontinued,
                data.companyId
            );
        };

        ComputerDTO.map = function (responseData) {
            return ComputerDTO.build(responseData);
        };

        /**
         * Return the constructor function
         */
        return ComputerDTO;
    }
})();
