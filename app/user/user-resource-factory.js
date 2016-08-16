(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .factory('UserResourceFactory', UserResourceFactory);

    UserResourceFactory.$inject = ['$resource', 'DomainRestResourceContext'];

    function UserResourceFactory($resource, DomainRestResourceContext) {
        var SUFFIX = '/user';

        var self = this;
        self.create = create;

        function create() {
            return $resource({}, {}, {
                exists: {
                    method: 'GET',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX + '/exists',
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                },
                create: {
                    method: 'POST',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX,
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                },
                logged: {
                    method: 'GET',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX,
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                },
                fetch: {
                    method: 'GET',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX + '/fetch',
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                },
                enable: {
                    method: 'POST',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX + '/enable',
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                },
                disable: {
                    method: 'POST',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX + '/disable',
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                },
                current: {
                    method: 'GET',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX + '/fetch/current',
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                }
            });
        }

        return self;
    }

}());
