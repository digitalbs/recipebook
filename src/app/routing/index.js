import app from './app';
import login from './login';
import register from './register';
import recipes from './recipes';
import admin from './admin';

const routes = [
    app,
    login,
    register,
    recipes,
    admin
];

export default function routing($stateProvider) {
    routes.forEach(routeConfig => {
        const configs = Object.keys(routeConfig);

        configs.forEach((configKey) => {
            if (typeof configKey === 'string') {
                $stateProvider.state(configKey, routeConfig[configKey]);
            }
        });
    });
}

routing.$inject = ['$stateProvider'];
