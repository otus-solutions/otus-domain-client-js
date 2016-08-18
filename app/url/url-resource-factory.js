(function() {
    'use strict';

    angular
        .module('otus.domain.client')
        .factory('UrlResourceFactory', UrlResourceFactory);

    UrlResourceFactory.$inject = ['$resource', 'DomainRestResourceContext', 'otus.domain.client.HeaderBuilderFactory'];

    function UrlResourceFactory($resource, DomainRestResourceContext, HeaderBuilderFactory) {
        var SUFFIX = '/url';

        var self = this;
        self.create = create;

        function create() {
            var restPrefix = DomainRestResourceContext.getRestPrefix();
            var token = DomainRestResourceContext.getSecurityToken();
            var headers = HeaderBuilderFactory.create(token);

            return $resource({}, {}, {
                isValidDomain: {
                    method: 'GET',
                    url: restPrefix + SUFFIX,
                    headers: headers.json
                }
            });
        }
        return self;
    }

}());
