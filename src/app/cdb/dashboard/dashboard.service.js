(function () {
    'use strict';

    angular.module('app.dashboard.service', [])
        .factory('DashFactory', computers);

    /* @ngInject */
    function computers($http) {
        return {
            getComputers: (callback) => {
                return $http.get(env.api.URL + '/computers').then(callback);
            }
        };
    }
})();
