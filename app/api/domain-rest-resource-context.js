(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .service('DomainRestResourceContext', DomainRestResourceContext);

    DomainRestResourceContext.$inject = ['$window', 'UrlParser'];

    function DomainRestResourceContext($window, UrlParser) {
        var HOSTNAME = 'http://' + $window.location.hostname;
        var CONTEXT = '/otus-domain-rest';
        var VERSION = '/v01';
        var TOKEN = '';

        var self = this;
        self.setHostname = setHostname;
        self.setContext = setContext;
        self.setVersion = setVersion;
        self.setSecurityToken = setSecurityToken;
        self.getRestPrefix = getRestPrefix;
        self.getVersion = getVersion;
        self.getHostName = getHostName;
        self.getContext = getContext;
        self.getSecurityToken = getSecurityToken;
        self.removeSecurityToken = removeSecurityToken;

        function removeSecurityToken() {
            TOKEN = '';
        }

        function setSecurityToken(securityToken) {
            TOKEN = securityToken;
        }

        function getSecurityToken() {
            return TOKEN;
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
    }

}());
