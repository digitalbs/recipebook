/**
 * Route config for Admin
 */

const ROUTES = {
    'app.admin': {
        url: '/admin',
        views: {
            'content': {
                template: '<admin></admin>'
            }
        }
    }
};

export default ROUTES;
