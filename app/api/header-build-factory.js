(function() {
    'use strict';

    angular
        .module('otus.domain.client')
        .factory('otus.domain.client.HeaderBuilderFactory', factory);

    function factory() {
        var self = this;
        self.create = create;

        function create(token) {
            return new Headers(token);
        }

        return self;

    }

    function Headers(token) {
        var self = this;
        self.json = {
            'Authorization': 'Bearer ' + token
        };
    }

}());

