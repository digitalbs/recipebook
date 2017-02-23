'use strict';

import AdminTemplate from './index.html';

/**
 * @module slush-angular-pack.Admin
 * @class AdminCtrl
 * @constructor
 */
export default function AdminCtrl(UsersResource) {
    this.UsersResource = UsersResource;

    this.users = this.UsersResource.query();
}

AdminCtrl.prototype.deleteUser = function (id) {
    this.UsersResource.delete({
        id: id
    }).$promise.then((res) => {
        console.log('removed');
        console.log(res);
    });
};

export default {
    templateUrl: AdminTemplate,
    bindings: {},
    controllerAs: 'ctrl',
    controller: AdminCtrl
};

AdminCtrl.$inject = ['UsersResource'];
