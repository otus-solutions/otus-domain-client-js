(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .factory('UrlResourceFactory', UrlResourceFactory);

    UrlResourceFactory.$inject = ['$resource', 'DomainRestResourceContext'];

    function UrlResourceFactory($resource, DomainRestResourceContext) {
        var SUFFIX = '/url';

        var self = this;
        self.create = create;

        function create() {
            return $resource({}, {}, {
                isValidDomain: {
                    method: 'GET',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX
                }
            });
        }
        return self;
    }

}());
