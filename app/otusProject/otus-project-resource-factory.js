(function() {

    'use strict';

    angular
        .module('otusDomainClient')
        .factory('OtusProjectResourceFactory', OtusProjectResourceFactory);

    OtusProjectResourceFactory.$inject = ['$resource', '$window'];

    function OtusProjectResourceFactory($resource, $window) {
        var SUFFIX = '/otus';

        var self = this;
        self.create = create;

        function create(restPrefix) {
            return $resource({}, {}, {
                register: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/register',
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                },
                fetchAll: {
                    method: 'GET',
                    url: restPrefix + SUFFIX,
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                }
            });
        }

        return self;
    }

}());
