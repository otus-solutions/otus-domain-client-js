(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .factory('InstallerResourceFactory', InstallerResourceFactory);

    InstallerResourceFactory.$inject = ['$resource', '$window'];

    function InstallerResourceFactory($resource, $window) {
        var SUFFIX = '/installer';

        var self = this;
        self.create = create;

        function create(restPrefix) {
            return $resource({}, {}, {
                ready: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/ready',
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                },
                validation: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/validation',
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                },
                config: {
                    method: 'POST',
                    url: restPrefix + SUFFIX,
                    headers: {
                        'Authorization': 'Bearer ' + $window.sessionStorage.getItem('token')
                    }
                }
            });
        }

        return self;
    }

}());
