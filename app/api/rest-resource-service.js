(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .service('RestResourceService', RestResourceService);

    RestResourceService.$inject = ['InstallerResourceFactory', 'AuthenticatorResourceFactory', 'UserResourceFactory', 'RepositoryResourceFactory', 'OtusProjectResourceFactory', 'UrlResourceFactory', 'DomainRestResourceContext'];

    function RestResourceService(InstallerResourceFactory, AuthenticatorResourceFactory, UserResourceFactory, RepositoryResourceFactory, OtusProjectResourceFactory, UrlResourceFactory, DomainRestResourceContext) {
        var self = this;
        self.getInstallerResource = getInstallerResource;
        self.getAuthenticatorResource = getAuthenticatorResource;
        self.getUserResource = getUserResource;
        self.getRepositoryResource = getRepositoryResource;
        self.getOtusProjectResource = getOtusProjectResource;
        self.getUrlResource = getUrlResource;
        self.setSecurityToken = setSecurityToken;
	self.removeSecurityToken = removeSecurityToken;

        function setSecurityToken(securityToken) {
            DomainRestResourceContext.setSecurityToken(securityToken);
        }

        function removeSecurityToken() {
            DomainRestResourceContext.removeSecurityToken();
        }

        function getInstallerResource() {
            return InstallerResourceFactory.create();
        }

        function getAuthenticatorResource() {
            return AuthenticatorResourceFactory.create();
        }

        function getUserResource() {
            return UserResourceFactory.create();
        }

        function getRepositoryResource() {
            return RepositoryResourceFactory.create();
        }

        function getOtusProjectResource() {
            return OtusProjectResourceFactory.create();
        }

        function getUrlResource() {
            return UrlResourceFactory.create();
        }
    }

}());
