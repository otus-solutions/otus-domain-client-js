# Otus Domain - Api Java Script

Essa API tem como objetivo facilitar o acesso ao Back-End do projeto Otus Domain para quem utiliza Java Script. 

## Definindo URL

``` javascript
(function() {

    angular
        .module('app')
        .run(['RestResourceService', initConfiguration]);

    function initConfiguration(RestResourceService, $window) {
        RestResourceService.setUrl('http://api-domain.localhost:8080');
    }

}());
```

## Utilizando Resources
Existem varios resources disponiveis, cada um reponsável pelo acesso a um determinado conjunto de
recursos do Back-End.

Todos os resources estão disponiveis através da interface **RestResourceService**.
Login no Sistema, exemplo:

``` javascript
(function() {
    'use strict';

    angular
        .module('module')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['RestResourceService'];

    function LoginController(RestResourceService) {
        $scope.authenticate = function(user) {
            var authenticatorResource = RestResourceService.getAuthenticatorResource();

            authenticatorResource.authenticate(user, function(response) {
                RestResourceService.setSecurityToken(response.data);
            });
        };
    }
})();
```




