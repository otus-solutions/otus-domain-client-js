(function() {
    'use strict';

    angular
        .module('otus.domain.client')
        .factory('UserResourceFactory', UserResourceFactory);

    UserResourceFactory.$inject = ['$resource', 'DomainRestResourceContext', 'otus.domain.client.HeaderBuilderFactory'];

    function UserResourceFactory($resource, DomainRestResourceContext, HeaderBuilderFactory) {
        var SUFFIX = '/user';

        var self = this;
        self.create = create;

        function create() {
            var restPrefix = DomainRestResourceContext.getRestPrefix();
            var token = DomainRestResourceContext.getSecurityToken();
            var headers = HeaderBuilderFactory.create(token);

            return $resource({}, {}, {
                exist: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/exist',
                    headers: headers.json
                },
                create: {
                    method: 'POST',
                    url: restPrefix + SUFFIX,
                    headers: headers.json
                },
                logged: {
                    method: 'GET',
                    url: restPrefix + SUFFIX,
                    headers: headers.json
                },
                list: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/list',
                    headers: headers.json
                },
                enable: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/enable',
                    headers: headers.json
                },
                disable: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/disable',
                    headers: headers.json
                },
                current: {
                    method: 'GET',
                    url: restPrefix + SUFFIX + '/current',
                    headers: headers.json
                }
            });
        }

        return self;
    }

}());
