(function() {

    'use strict';

    angular
        .module('otusDomainClient')
        .factory('OtusProjectResourceFactory', OtusProjectResourceFactory);

    OtusProjectResourceFactory.$inject = ['$resource'];

    function OtusProjectResourceFactory($resource) {
        var SUFFIX = '/otus';

        var self = this;
        self.create = create;

        function create(restPrefix) {
            return $resource({}, {}, {
                register: {
                    method: 'POST',
                    url: restPrefix + SUFFIX + '/register'
                }
            });
        }

        return self;
    }

}());
