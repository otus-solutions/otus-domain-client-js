(function() {
    'use strict';

    angular
        .module('otus.domain.client')
        .factory('RepositoryResourceFactory', RepositoryResourceFactory);

    RepositoryResourceFactory.$inject = ['$resource', 'DomainRestResourceContext', 'otus.domain.client.HeaderBuilderFactory'];

    function RepositoryResourceFactory($resource, DomainRestResourceContext, HeaderBuilderFactory) {
        var SUFFIX = '/repository';

        var self = this;
        self.create = create;

        function create() {
            var restPrefix = DomainRestResourceContext.getRestPrefix();
            var token = DomainRestResourceContext.getSecurityToken();
            var headers = HeaderBuilderFactory.create(token);

            return $resource({}, {}, {
                validateConnection: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/validate/connection',
                    headers: headers.json
                },
                validateCredentials: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/validate/credentials',
                    headers: headers.json
                },
                getByRepositoryName: {
                    method: 'GET',
                    url: restPrefix + SUFFIX,
                    headers: headers.json
                },
                list: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/list',
                    headers: headers.json
                }
            });
        }

        return self;
    }

}());
