(function () {
    'use strict';

    angular.module('app.cdb.service', ['computer.model', 'company.model'])
        .factory('ComputersAPI', ComputersAPI);

    /* @ngInject */
    function ComputersAPI($http) {
        return {
            getAll: (callback) => {
                return $http.get(env.api.URL + '/computers/').then(callback);
            },
            getPage: (page, size, callback) => {
                return $http.get(env.api.URL + '/computers/' + page + "/" + size).then(mapPage).then(callback);
            },
            get: (id, callback) => {
                return $http.get(env.api.URL + '/computers/' + id).then(callback);
            }
        };

        function mapPage(responseData) {
            var list=[];
            for(var i= 0; i < responseData.data.list.length; i++)
            {
                list.push(Computer.map(responseData.data.list[i]));
            }
            responseData.data.list = list;
            return responseData;
        }
    }
})();
