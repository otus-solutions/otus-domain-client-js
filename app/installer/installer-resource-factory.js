(function() {
    'use strict';

    angular
        .module('otus.domain.client')
        .factory('InstallerResourceFactory', InstallerResourceFactory);

    InstallerResourceFactory.$inject = ['$resource', 'DomainRestResourceContext', 'otus.domain.client.HeaderBuilderFactory'];

    function InstallerResourceFactory($resource, DomainRestResourceContext, HeaderBuilderFactory) {
        var SUFFIX = '/installer';

        var self = this;
        self.create = create;

        function create() {
            var restPrefix = DomainRestResourceContext.getRestPrefix();
            var token = DomainRestResourceContext.getSecurityToken();
            var headers = HeaderBuilderFactory.create(token);

            return $resource({}, {}, {
                ready: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/ready',
                    headers: headers.json
                },
                validationEmail: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/validation/email',
                    headers: headers.json
                },
                config: {
                    method: 'POST',
                    url: restPrefix + SUFFIX,
                    headers: headers.json
                }
            });
        }

        return self;
    }

}());
