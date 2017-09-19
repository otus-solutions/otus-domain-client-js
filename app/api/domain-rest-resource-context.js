(function() {
    'use strict';

    angular
        .module('otus.domain.client')
        .service('DomainRestResourceContext', DomainRestResourceContext);

    DomainRestResourceContext.$inject = ['$window', 'UrlParser'];

    function DomainRestResourceContext($window, UrlParser) {
        var self = this;
        var TOKEN_USER_NAME = 'dutk';
        var HOSTNAME;
        var CONTEXT;
        var VERSION;

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
        self.hasToken = hasToken;
        self.init = init;
        self.reset = reset;
        self.setUrl = setUrl;

        self.init();

        function init() {
            HOSTNAME = 'http://' + $window.location.hostname;
            CONTEXT = '/otus-domain-rest';
            VERSION = '/v01';
        }

        function reset() {
            HOSTNAME = '';
        }

        function hasToken() {
            if ($window.sessionStorage[TOKEN_USER_NAME]) {
                return true;
            } else {
                return false;
            }
        }

        function setUrl(url) {
            var parser = UrlParser.parser(url);
            HOSTNAME = parser.origin;
        }

        function removeSecurityToken() {
            delete $window.sessionStorage[TOKEN_USER_NAME];
        }

        function setSecurityToken(securityToken) {
            $window.sessionStorage[TOKEN_USER_NAME] = securityToken;
        }

        function getSecurityToken() {
            return $window.sessionStorage[TOKEN_USER_NAME];
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
