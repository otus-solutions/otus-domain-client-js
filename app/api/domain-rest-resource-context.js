(function() {
    'use strict';

    angular
        .module('otusDomainClient')
        .service('DomainRestResourceContext', DomainRestResourceContext);

    DomainRestResourceContext.$inject = ['$window'];

    function DomainRestResourceContext($window) {
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

        init();

        function init() {
            TOKEN = $window.sessionStorage['domain-user-tk'];
        }

        function removeSecurityToken() {
            delete $window.sessionStorage['domain-user-tk'];
            TOKEN = '';
        }

        function setSecurityToken(securityToken) {
            $window.sessionStorage['domain-user-tk'] = securityToken;
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
