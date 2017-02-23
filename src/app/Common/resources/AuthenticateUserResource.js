'use strict';

/**
 * @module kochen.common.resources
 * @class AuthenticateUserResource
 */

/**
 * Register User endpoint.
 *
 * @method AuthenticateUserResource
 * @param {Object} $resource Angular $resource object. Link: http://docs.angularjs.org/api/ngResource/service/$resource
 * @param {string} API_URL Url pointing to API layer
 * @return {Object} Returns a resource object (GET, QUERY, SAVE, REMOVE, DELETE, Custom)
 *
 */
export default function AuthenticateUserResource($resource, API_URL) {
    return $resource(API_URL + '/users/authenticate');
}

AuthenticateUserResource.$inject = ['$resource', 'API_URL'];
