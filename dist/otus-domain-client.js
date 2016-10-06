!function(){"use strict";angular.module("otus.domain.client",["ngResource"])}(),function(){"use strict";function e(){function e(e){var t=document.createElement("a");return t.href=e,t}var t=this;t.parser=e}angular.module("otus.domain.client").service("UrlParser",e)}(),function(){"use strict";function e(e,t){function r(){g="http://"+e.location.hostname,y="/otus-domain-rest",v="/v01"}function n(){g=""}function o(){return!!e.sessionStorage[j]}function u(e){var r=t.parser(e);g=r.origin}function i(){delete e.sessionStorage[j]}function s(t){e.sessionStorage[j]=t}function c(){return e.sessionStorage[j]}function a(e){g=e}function l(e){y="/"+e}function d(e){v="/"+e}function f(){return g+y+v}function m(){return g}function h(){return y}function R(){return v}var g,y,v,T=this,j="dutk";T.setHostname=a,T.setContext=l,T.setVersion=d,T.setSecurityToken=s,T.getRestPrefix=f,T.getVersion=R,T.getHostName=m,T.getContext=h,T.getSecurityToken=c,T.removeSecurityToken=i,T.hasToken=o,T.init=r,T.reset=n,T.setUrl=u,T.init()}angular.module("otus.domain.client").service("DomainRestResourceContext",e),e.$inject=["$window","UrlParser"]}(),function(){"use strict";function e(){function e(e){return new t(e)}var r=this;return r.create=e,r}function t(e){var t=this;t.json={Authorization:"Bearer "+e}}angular.module("otus.domain.client").factory("otus.domain.client.HeaderBuilderFactory",e)}(),function(){"use strict";function e(e,t,r,n,o,u,i){function s(e){i.setUrl(e)}function c(e){i.setHostname(e)}function a(){return i.hasToken()}function l(e){i.setSecurityToken(e)}function d(){i.removeSecurityToken()}function f(){return e.create()}function m(){return t.create()}function h(){return r.create()}function R(){return n.create()}function g(){return o.create()}function y(){return u.create()}var v=this;v.getInstallerResource=f,v.getAuthenticatorResource=m,v.getUserResource=h,v.getRepositoryResource=R,v.getOtusProjectResource=g,v.getUrlResource=y,v.setSecurityToken=l,v.removeSecurityToken=d,v.isLogged=a,v.setHostname=c,v.setUrl=s}angular.module("otus.domain.client").service("RestResourceService",e),e.$inject=["InstallerResourceFactory","AuthenticatorResourceFactory","UserResourceFactory","RepositoryResourceFactory","OtusProjectResourceFactory","UrlResourceFactory","DomainRestResourceContext"]}(),function(){"use strict";function e(e,t,r){function n(){var n=t.getRestPrefix(),u=t.getSecurityToken(),i=r.create(u);return e({},{},{authenticate:{method:"POST",url:n+o,headers:i.json},invalidate:{method:"POST",url:n+o+"/invalidate",headers:i.json}})}var o="/authentication",u=this;return u.create=n,u}angular.module("otus.domain.client").factory("AuthenticatorResourceFactory",e),e.$inject=["$resource","DomainRestResourceContext","otus.domain.client.HeaderBuilderFactory"]}(),function(){"use strict";function e(e,t,r){function n(){var n=t.getRestPrefix(),u=t.getSecurityToken(),i=r.create(u);return e({},{},{ready:{method:"GET",url:n+o+"/ready",headers:i.json},validationEmail:{method:"POST",url:n+o+"/validation/email",headers:i.json},config:{method:"POST",url:n+o,headers:i.json}})}var o="/installer",u=this;return u.create=n,u}angular.module("otus.domain.client").factory("InstallerResourceFactory",e),e.$inject=["$resource","DomainRestResourceContext","otus.domain.client.HeaderBuilderFactory"]}(),function(){"use strict";function e(e,t,r){function n(){var n=t.getRestPrefix(),u=t.getSecurityToken(),i=r.create(u);return e({},{},{register:{method:"POST",url:n+o,headers:i.json},list:{method:"GET",url:n+o+"/list",headers:i.json}})}var o="/otus",u=this;return u.create=n,u}angular.module("otus.domain.client").factory("OtusProjectResourceFactory",e),e.$inject=["$resource","DomainRestResourceContext","otus.domain.client.HeaderBuilderFactory"]}(),function(){"use strict";function e(e,t,r){function n(){var n=t.getRestPrefix(),u=t.getSecurityToken(),i=r.create(u);return e({},{},{validateConnection:{method:"POST",url:n+o+"/validate/connection",headers:i.json},validateCredentials:{method:"POST",url:n+o+"/validate/credentials",headers:i.json},getByRepositoryName:{method:"GET",url:n+o,headers:i.json},list:{method:"GET",url:n+o+"/list",headers:i.json}})}var o="/repository",u=this;return u.create=n,u}angular.module("otus.domain.client").factory("RepositoryResourceFactory",e),e.$inject=["$resource","DomainRestResourceContext","otus.domain.client.HeaderBuilderFactory"]}(),function(){"use strict";function e(e,t,r){function n(){var n=t.getRestPrefix(),u=t.getSecurityToken(),i=r.create(u);return e({},{},{isValidDomain:{method:"GET",url:n+o,headers:i.json}})}var o="/url",u=this;return u.create=n,u}angular.module("otus.domain.client").factory("UrlResourceFactory",e),e.$inject=["$resource","DomainRestResourceContext","otus.domain.client.HeaderBuilderFactory"]}(),function(){"use strict";function e(e,t,r){function n(){var n=t.getRestPrefix(),u=t.getSecurityToken(),i=r.create(u);return e({},{},{exist:{method:"GET",url:n+o+"/exist",headers:i.json},create:{method:"POST",url:n+o,headers:i.json},logged:{method:"GET",url:n+o,headers:i.json},list:{method:"GET",url:n+o+"/list",headers:i.json},enable:{method:"POST",url:n+o+"/enable",headers:i.json},disable:{method:"POST",url:n+o+"/disable",headers:i.json},current:{method:"GET",url:n+o+"/current",headers:i.json}})}var o="/user",u=this;return u.create=n,u}angular.module("otus.domain.client").factory("UserResourceFactory",e),e.$inject=["$resource","DomainRestResourceContext","otus.domain.client.HeaderBuilderFactory"]}();