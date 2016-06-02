(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .factory('RepositoryResourceFactory', RepositoryResourceFactory);

    RepositoryResourceFactory.$inject = ['$resource'];

    function RepositoryResourceFactory($resource) {
        var SUFFIX = '/repository';

        var self = this;
        self.create = create;

        function create(restPrefix, token) {
            return $resource({}, {}, {
                validateConnection: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/validate/connection',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                },
                validateCredentials: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/validate/credentials',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                },
                validateDatabase: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/validate/database',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                },
                getByRepositoryName: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/get',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                },
                connect: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/connect',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                },
                create: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/create',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                }
            });
        }

        return self;
    }

}());
