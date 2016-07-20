(function() {

    'use strict';

    angular
        .module('otusDomainClient')
        .factory('OtusProjectResourceFactory', OtusProjectResourceFactory);

    OtusProjectResourceFactory.$inject = ['$resource', 'DomainRestResourceContext'];

    function OtusProjectResourceFactory($resource, DomainRestResourceContext) {
        var SUFFIX = '/otus';

        var self = this;
        self.create = create;

        function create() {
            return $resource({}, {}, {
                register: {
                    method: 'POST',
                    url: DomainRestResourceContext.getRestPrefix() + SUFFIX + '/register',
                    headers: {
                        'Authorization': 'Bearer ' + DomainRestResourceContext.getSecurityToken()
                    }
                },
                fetchAll: {
                    method: 'GET',
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
