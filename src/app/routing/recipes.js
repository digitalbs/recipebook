/**
 * Route config for Recipes
 */

const ROUTES = {
    'app.recipes': {
        url: '/:username/recipes',
        views: {
            'content': {
                template: '<recipes></recipes>'
            }
        }
    }
};

export default ROUTES;
