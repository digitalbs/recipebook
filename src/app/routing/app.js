/**
 * Route config for Home
 */

const ROUTES = {
    'app': {
        url: '',
        views: {
            'header': {
                template: '<header></header>'
            },
            'perspective': {
                template: '<md-content layout="column" layout-align="center" ui-view="content" class="md-padding"></md-content>'
            }
        }
    }
};

export default ROUTES;
