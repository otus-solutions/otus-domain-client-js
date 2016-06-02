(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .factory('AuthenticatorResourceFactory', AuthenticatorResourceFactory);

    AuthenticatorResourceFactory.$inject = ['$resource'];

    function AuthenticatorResourceFactory($resource) {
        var SUFFIX = '/authentication';

        var self = this;
        self.create = create;

        function create(restPrefix, token) {
            return $resource({}, {}, {
                authenticate: {
                    method: 'POST',
                    url: restPrefix + SUFFIX,
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                },
                invalidate: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/invalidate',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                }
            });
        }

        return self;
    }

}());
