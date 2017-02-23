'use strict';

import mainTemplate from './index.html';

/**
 * @module boilerplateApp.main
 * @class LoginMainCtrl
 * @constructor
 */
export default function LoginMainCtrl(AuthenticateUserResource, $state, $rootScope, jwtHelper) {
    this.$rootScope = $rootScope;

    this.AuthenticateUserResource = AuthenticateUserResource;
    this.$state = $state;
    this.jwtHelper = jwtHelper;
}

LoginMainCtrl.prototype.logUserIn = function () {
    this.loginForm.username.$setValidity('incorrectCredentials', true);
    this.loginForm.password.$setValidity('incorrectPassword', true);
    this.AuthenticateUserResource.save(this.login).$promise.then(res => {
        localStorage.setItem('id_token', res.id_token);

        const tokenPayload = this.jwtHelper.decodeToken(res.id_token);

        this.$rootScope.isAuthenticated = true;
        this.$state.reload();
        this.$state.go('app.recipes', {
            username: tokenPayload.username
        });

    }).catch(err => {
        console.log(err);
        if (err.data.message === 'incorrectPassword') {
            this.loginForm.password.$setValidity(err.data.message, false);
        } else if (err.data.message === 'incorrectCredentials') {
            this.loginForm.username.$setValidity(err.data.message, false);
        }
    });
};

export default {
    templateUrl: mainTemplate,
    bindings: {},
    controllerAs: 'ctrl',
    controller: LoginMainCtrl
};

LoginMainCtrl.$inject = ['AuthenticateUserResource', '$state', '$rootScope', 'jwtHelper'];
