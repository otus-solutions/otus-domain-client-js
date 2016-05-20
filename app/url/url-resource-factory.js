(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .factory('UrlResourceFactory', UrlResourceFactory);

    UrlResourceFactory.$inject = ['$resource'];

    function UrlResourceFactory($resource) {
        var SUFFIX = '/url';

        var self = this;
        self.create = create;

        function create(restPrefix) {
            return $resource({}, {}, {
                isValidDomain: {
                    method: 'GET',
                    url: restPrefix + SUFFIX
                }
            });
        }
        return self;
    }

}());
