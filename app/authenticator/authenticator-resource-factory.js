(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .factory('AuthenticatorResourceFactory', AuthenticatorResourceFactory);

    AuthenticatorResourceFactory.$inject = ['$resource', 'DomainRestResourceContext'];

    function AuthenticatorResourceFactory($resource, DomainRestResourceContext) {
        var SUFFIX = '/authentication';

        var self = this;
        self.create = create;

        function create() {
            return $resource({}, {}, {
                authenticate: {
                    method: 'POST',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX,
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                },
                invalidate: {
                    method: 'POST',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX + '/invalidate',
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                }
            });
        }

        return self;
    }

}());
