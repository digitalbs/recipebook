'use strict';

/**
 * @module kochen.common.resources
 * @class UsersResource
 */

/**
 * Register User endpoint.
 *
 * @method UsersResource
 * @param {Object} $resource Angular $resource object. Link: http://docs.angularjs.org/api/ngResource/service/$resource
 * @param {string} API_URL Url pointing to API layer
 * @return {Object} Returns a resource object (GET, QUERY, SAVE, REMOVE, DELETE, Custom)
 *
 */
export default function UsersResource($resource, API_URL) {
    return $resource(API_URL + '/users/:id', {
        id: '@id'
    }, {
        'replace': {
            method: 'PUT'
        }
    });
}

UsersResource.$inject = ['$resource', 'API_URL'];
