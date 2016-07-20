(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .factory('InstallerResourceFactory', InstallerResourceFactory);

    InstallerResourceFactory.$inject = ['$resource', 'DomainRestResourceContext'];

    function InstallerResourceFactory($resource, DomainRestResourceContext) {
        var SUFFIX = '/installer';

        var self = this;
        self.create = create;

        function create() {
            return $resource({}, {}, {
                ready: {
                    method: 'GET',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX + '/ready',
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                },
                validation: {
                    method: 'POST',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX + '/validation',
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                },
                config: {
                    method: 'POST',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX,
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                }
            });
        }

        return self;
    }

}());
