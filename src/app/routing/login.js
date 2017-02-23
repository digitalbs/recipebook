/**
 * Route config for Home
 */

const ROUTES = {
    'app.login': {
        url: '/login',
        views: {
            'content': {
                template: '<login></login>'
            }
        }
    }
};

export default ROUTES;
