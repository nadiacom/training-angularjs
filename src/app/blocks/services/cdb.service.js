(function () {
    'use strict';

    angular.module('app.cdb.service', ['computer.model', 'company.model'])
        .factory('ComputersAPI', ComputersAPI)
        .factory('CompaniesAPI', CompaniesAPI);

    /* @ngInject */
    function ComputersAPI($http, Computer) {
        return {
            getPage: (page, size, callback) => {
                return $http.get(env.api.URL + '/computers' + '?page=' + page + '&size=' + size).then(mapPage).then(callback);
            },
            get: (id, callback) => {
                return $http.get(env.api.URL + '/computers/' + id).then(callback);
            },
            count: (callback) => {
                return $http.get(env.api.URL + '/computers/' + id).then(callback);
            },
            add: (callback) => {
                return $http.post(env.api.URL + '/computers').then(callback);
            },
            edit: (id, callback) => {
                return $http.put(env.api.URL + '/computers/' + id).then(callback);
            },
            delete: (callback) => {
                return $http.delete(env.api.URL + '/computers/' + id).then(callback);
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
    }

    /* @ngInject */
    function CompaniesAPI($http, Company) {
        return {
            getAll: (callback) => {
                return $http.get(env.api.URL + '/companies').then(callback);
            }
        };
        /* @ngInject */
        function mapPage(responseData) {
            var list=[];
            for(var i= 0; i < responseData.data.length; i++)
            {
                list.push(Company.map(responseData.data[i]));
            }
            responseData.data = list;
            return responseData;
        };
    };
})();
