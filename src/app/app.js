'use strict';

//Vendors
import vendors from './config/app.vendors';

//kochen Modules
import modules from './config/app.modules';

//Configuration
import config from './config/app.config';

//Routing
import routing from './routing';

//Language
import englishUS from '../i18n/lang/en-us';

// Vendors CSS
/* NOTE: it is recommended to load css via scss @import <location>, however,
 if the css includes url paths to assets, but no url path override variable,
 it should be loaded here so webpack picks it up.
 */
const modulesToLoad = modules.concat(vendors);

angular.module('rn', modulesToLoad)
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$logProvider', 'jwtOptionsProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $httpProvider, $logProvider, jwtOptionsProvider, $locationProvider) {

        $logProvider.debugEnabled(config.debug);

        jwtOptionsProvider.config({
            whiteListedDomains: ['localhost'],
            unauthenticatedRedirectPath: '/login',
            tokenGetter() {
                return localStorage.getItem('id_token');
            }
        });

        $httpProvider.interceptors.push('jwtInterceptor');


        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        routing($stateProvider);


        $urlRouterProvider.when('', '/');
        $urlRouterProvider.when('/', ['$state', '$rootScope', ($state, $rootScope) => {
            if ($rootScope.isAuthenticated) {
                $state.go('app.recipes');
            } else {
                $state.go('app.login');
            }
        }]);

        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
    }])
    .config(['$translateProvider', ($translateProvider) => {
        $translateProvider.useMessageFormatInterpolation();
        $translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider.translations('en-us', englishUS);
        $translateProvider.preferredLanguage('en-us');
    }])
    .config(['$mdThemingProvider', ($mdThemingProvider) => {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('grey');
    }])
    .run(['authManager', '$rootScope', '$state', '$location', (authManager, $rootScope, $state, $location) => {
        if (localStorage.getItem('id_token')) {
            $rootScope.isAuthenticated = true;
        } else {
            $rootScope.isAuthenticated = false;
        }

        authManager.checkAuthOnRefresh();
        authManager.redirectWhenUnauthenticated();

        $rootScope.logOut = function () {
            localStorage.removeItem('id_token');
            $state.reload();
        };

        $rootScope.$on('$locationChangeStart', (ev, next, current) => {
            const publicPages = ['/login', '/register'];
            const restrictedPage = publicPages.indexOf($location.path()) === -1;

            if (restrictedPage && !localStorage.getItem('id_token')) {
                $location.path('/login');
            }
        });
    }])
    .constant('API_URL', config.API_URL);
