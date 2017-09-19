(function() {

    'use strict';

    angular
        .module('otus.domain.client')
        .factory('OtusProjectResourceFactory', OtusProjectResourceFactory);

    OtusProjectResourceFactory.$inject = ['$resource', 'DomainRestResourceContext', 'otus.domain.client.HeaderBuilderFactory'];

    function OtusProjectResourceFactory($resource, DomainRestResourceContext, HeaderBuilderFactory) {
        var SUFFIX = '/otus';

        var self = this;
        self.create = create;

        function create() {
            var restPrefix = DomainRestResourceContext.getRestPrefix();
            var token = DomainRestResourceContext.getSecurityToken();
            var headers = HeaderBuilderFactory.create(token);

            return $resource({}, {}, {
                register: {
                    method: 'POST',
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
