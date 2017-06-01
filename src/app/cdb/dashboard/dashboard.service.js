(function () {
    'use strict';

    angular.module('app.dashboard.service', [])
        .factory('computers', computers);

    function computers($http) {
        return {
            list: (callback) => {
                $http.get(env.api.URL + '/computers').then(callback);
            }
        };
    }
})();
