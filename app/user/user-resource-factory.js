(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .factory('UserResourceFactory', UserResourceFactory);

    UserResourceFactory.$inject = ['$resource', '$window'];

    function UserResourceFactory($resource, $window) {
        var SUFFIX = '/user';

        var self = this;
        self.create = create;

        function create(restPrefix) {
            return $resource({}, {}, {
                exists: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/exists',
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                },
                create: {
                    method: 'POST',
                    url: restPrefix + SUFFIX,
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                },
                logged: {
                    method: 'GET',
                    url: restPrefix + SUFFIX,
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                },
                fetch: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/fetch',
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                },
                enable: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/enable',
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                },
                disable: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/disable',
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                }
            });
        }

        return self;
    }

}());
