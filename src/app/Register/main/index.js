'use strict';

import RegisterTemplate from './index.html';

/**
 * @module slush-angular-pack.Register
 * @class RegisterCtrl
 * @constructor
 */
export default function RegisterCtrl(UsersResource, $state, $rootScope) {
    this.$rootScope = $rootScope;

    this.UsersResource = UsersResource;
    this.$state = $state;
}

RegisterCtrl.prototype.registerUser = function () {
    this.UsersResource.save(this.register).$promise.then(res => {
        localStorage.setItem('id_token', res.id_token);


        this.$rootScope.isAuthenticated = true;
        this.$state.go('app.recipes');

    }).catch(err => {
        if (err.data.message === 'teamnameTaken') {
            this.registerForm.teamname.$setValidity(err.data.message, false);
        } else if (err.data.message === 'usernameTaken') {
            this.registerForm.username.$setValidity(err.data.message, false);
        }
    });
};

export default {
    templateUrl: RegisterTemplate,
    bindings: {},
    controllerAs: 'ctrl',
    controller: RegisterCtrl
};

RegisterCtrl.$inject = ['UsersResource', '$state', '$rootScope'];
