(function () {
    'use strict';

    angular.module('app.cdb.service', ['computer.model', 'company.model'])
        .factory('ComputersAPI', ComputersAPI);

    /* @ngInject */
    function ComputersAPI($http, Computer) {
        return {
            getAll: (callback) => {
                return $http.get(env.api.URL + '/computers/').then(callback);
            },
            getPage: (page, size, callback) => {
                return $http.get(env.api.URL + '/computers' + '?page=' + page + '&size=' + size).then(mapPage).then(callback);
            },
            get: (id, callback) => {
                return $http.get(env.api.URL + '/computers/' + id).then(callback);
            },
            count: (callback) => {
                return $http.get(env.api.URL + '/computers/' + id).then(callback);
            }
        };
        /* @ngInject */
        function mapPage(responseData) {
            var list=[];
            for(var i= 0; i < responseData.data.length; i++)
            {
                list.push(Computer.map(responseData.data[i]));
            }
            responseData.data = list;
            return responseData;
        };
    };
})();
