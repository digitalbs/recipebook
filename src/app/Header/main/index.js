'use strict';

import HeaderTemplate from './index.html';

/**
 * @module slush-angular-pack.Header
 * @class HeaderCtrl
 * @constructor
 */
export default function HeaderCtrl(jwtHelper, $state, $rootScope) {
    this.isAuthenticated = false;
    this.$state = $state;

    $rootScope.$watch('isAuthenticated', () => {
        if ($rootScope.isAuthenticated) {
            let tokenPayload = jwtHelper.decodeToken(localStorage.getItem('id_token'));
            this.isAuthenticated = $rootScope.isAuthenticated;

            this.username = tokenPayload.username;
        }
    });
}

HeaderCtrl.prototype.logout = function () {
    localStorage.removeItem('id_token');

    this.isAuthenticated = false;
    this.$state.go('app.login');
};

export default {
    templateUrl: HeaderTemplate,
    bindings: {},
    controllerAs: 'ctrl',
    controller: HeaderCtrl
};

HeaderCtrl.$inject = ['jwtHelper', '$state', '$rootScope'];
