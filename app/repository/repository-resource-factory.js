(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .factory('RepositoryResourceFactory', RepositoryResourceFactory);

    RepositoryResourceFactory.$inject = ['$resource', 'DomainRestResourceContext'];

    function RepositoryResourceFactory($resource, DomainRestResourceContext) {
        var SUFFIX = '/repository';

        var self = this;
        self.create = create;

        function create() {
            return $resource({}, {}, {
                validateConnection: {
                    method: 'POST',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX + '/validate/connection',
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                },
                validateCredentials: {
                    method: 'POST',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX + '/validate/credentials',
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                },
                validateDatabase: {
                    method: 'GET',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX + '/validate/database',
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                },
                getByRepositoryName: {
                    method: 'GET',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX + '/get',
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                },
                connect: {
                    method: 'POST',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX + '/connect',
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                },
                create: {
                    method: 'POST',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX + '/create',
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                }
            });
        }

        return self;
    }

}());
