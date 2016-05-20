(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .service('RestResourceService', RestResourceService);

    RestResourceService.$inject = ['InstallerResourceFactory', 'AuthenticatorResourceFactory', 'UserResourceFactory', 'RepositoryResourceFactory', 'UrlResourceFactory'];

    function RestResourceService(InstallerResourceFactory, AuthenticatorResourceFactory, UserResourceFactory, RepositoryResourceFactory, UrlResourceFactory) {
        var HOSTNAME = 'http://' + window.location.hostname;
        var CONTEXT = '/otus-domain-rest';
        var VERSION = '/v01';

        var self = this;
        self.getInstallerResource = getInstallerResource;
        self.getAuthenticatorResource = getAuthenticatorResource;
        self.getUserResource = getUserResource;
        self.getRepositoryResource = getRepositoryResource;
        self.getUrlResource = getUrlResource;

        function getRestPrefix() {
            return HOSTNAME + CONTEXT + VERSION;
        }

        function getHostName() {
            return HOSTNAME;
        }

        function getContext() {
            return CONTEXT;
        }

        function getVersion() {
            return VERSION;
        }

        function getInstallerResource() {
            var prefix = getRestPrefix();
            return InstallerResourceFactory.create(prefix);
        }

        function getAuthenticatorResource() {
            var prefix = getRestPrefix();
            return AuthenticatorResourceFactory.create(prefix);
        }

        function getUserResource() {
            var prefix = getRestPrefix();
            return UserResourceFactory.create(prefix);
        }

        function getRepositoryResource() {
            var prefix = getRestPrefix();
            return RepositoryResourceFactory.create(prefix);
        }

        function getUrlResource() {
          var prefix = getRestPrefix();
          return UrlResourceFactory.create(prefix);
        }
    }

}());
