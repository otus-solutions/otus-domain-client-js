(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .factory('RepositoryResourceFactory', RepositoryResourceFactory);

    RepositoryResourceFactory.$inject = ['$resource', '$window'];

    function RepositoryResourceFactory($resource, $window) {
        var SUFFIX = '/repository';

        var self = this;
        self.create = create;

        function create(restPrefix) {
            return $resource({}, {}, {
                validateConnection: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/validate/connection',
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                },
                validateCredentials: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/validate/credentials',
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                },
                validateDatabase: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/validate/database',
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                },
                getByRepositoryName: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/get',
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                },
                connect: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/connect',
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                },
                create: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/create',
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                }
            });
        }

        return self;
    }

}());
