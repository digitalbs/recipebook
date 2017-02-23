'use strict';

/**
 * @module kochen.common.resources
 * @class RecipeResource
 */

/**
 * Register recipe endpoint.
 *
 * @method RecipeResource
 * @param {Object} $resource Angular $resource object. Link: http://docs.angularjs.org/api/ngResource/service/$resource
 * @param {string} API_URL Url pointing to API layer
 * @return {Object} Returns a resource object (GET, QUERY, SAVE, REMOVE, DELETE, Custom)
 *
 */
export default function RecipeResource($resource, API_URL) {
    return $resource(API_URL + '/:username/recipes', {
        username: '@username'
    }, {
        'replace': {
            method: 'PUT'
        }
    });
}

RecipeResource.$inject = ['$resource', 'API_URL'];
