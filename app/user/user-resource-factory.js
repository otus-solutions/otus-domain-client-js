(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .factory('UserResourceFactory', UserResourceFactory);

    UserResourceFactory.$inject = ['$resource'];

    function UserResourceFactory($resource) {
        var SUFFIX = '/user';

        var self = this;
        self.create = create;

        function create(restPrefix, token) {
            return $resource({}, {}, {
                exists: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/exists',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                },
                create: {
                    method: 'POST',
                    url: restPrefix + SUFFIX,
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                },
                logged: {
                    method: 'GET',
                    url: restPrefix + SUFFIX,
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                },
                fetch: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/fetch',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                },
                enable: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/enable',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                },
                disable: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/disable',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                }
            });
        }

        return self;
    }

}());
