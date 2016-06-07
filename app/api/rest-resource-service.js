(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .service('RestResourceService', RestResourceService);

    RestResourceService.$inject = ['InstallerResourceFactory', 'AuthenticatorResourceFactory', 'UserResourceFactory', 'RepositoryResourceFactory', 'OtusProjectResourceFactory', 'UrlResourceFactory', '$window'];

    function RestResourceService(InstallerResourceFactory, AuthenticatorResourceFactory, UserResourceFactory, RepositoryResourceFactory, OtusProjectResourceFactory, UrlResourceFactory, $window) {
        var HOSTNAME = 'http://' + window.location.hostname;
        var CONTEXT = '/otus-domain-rest';
        var VERSION = '/v01';

        var self = this;
        self.getInstallerResource = getInstallerResource;
        self.getAuthenticatorResource = getAuthenticatorResource;
        self.getUserResource = getUserResource;
        self.getRepositoryResource = getRepositoryResource;
        self.getOtusProjectResource = getOtusProjectResource;
	self.getUrlResource = getUrlResource;
        self.setHostname = setHostname;
        self.setContext = setContext;
        self.setVersion = setVersion;
        self.setSecurityToken = setSecurityToken;

        function setSecurityToken(securityToken) {
            $window.sessionStorage.setItem('token', securityToken);
        }

        function setHostname(hostname) {
            HOSTNAME = hostname;
        }

        function setContext(context) {
            CONTEXT = '/' + context;
        }

        function setVersion(version) {
            VERSION = '/' + version;
        }

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

        function getOtusProjectResource() {
            var prefix = getRestPrefix();
            return OtusProjectResourceFactory.create(prefix);
        }

        function getUrlResource() {
            var prefix = getRestPrefix();
            return UrlResourceFactory.create(prefix);
        }

    }

}());
