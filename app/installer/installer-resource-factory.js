(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .factory('InstallerResourceFactory', InstallerResourceFactory);

    InstallerResourceFactory.$inject = ['$resource'];

    function InstallerResourceFactory($resource) {
        var SUFFIX = '/installer';

        var self = this;
        self.create = create;

        function create(restPrefix, token) {
            return $resource({}, {}, {
                ready: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/ready',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                },
                validation: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/validation',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                },
                config: {
                    method: 'POST',
                    url: restPrefix + SUFFIX,
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                }
            });
        }

        return self;
    }

}());
