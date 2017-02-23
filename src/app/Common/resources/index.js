'use strict';

import AuthenticateUserResource from './AuthenticateUserResource';
import UsersResource from './UsersResource';
import RecipeResource from './RecipeResource';

angular.module('rn.common.resources', ['ngResource'])
    .factory('AuthenticateUserResource', AuthenticateUserResource)
    .factory('UsersResource', UsersResource)
    .factory('RecipeResource', RecipeResource);
