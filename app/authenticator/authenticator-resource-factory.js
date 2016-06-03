(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .factory('AuthenticatorResourceFactory', AuthenticatorResourceFactory);

    AuthenticatorResourceFactory.$inject = ['$resource', '$window'];

    function AuthenticatorResourceFactory($resource, $window) {
        var SUFFIX = '/authentication';

        var self = this;
        self.create = create;

        function create(restPrefix) {
            return $resource({}, {}, {
                authenticate: {
                    method: 'POST',
                    url: restPrefix + SUFFIX,
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                },
                invalidate: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/invalidate',
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                }
            });
        }

        return self;
    }

}());
