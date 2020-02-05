import angular from 'angular';
import uiRouter from 'angular-ui-router';

import angularjsDirectiveTemplate from './templates/angularjsDirective.html';

import Landing from './landing/landing';
import Root from './root/root';
import Login from './login/login';
import Content from './content/content';

import { routeConfigs } from './routes/angularRoutes';

const template = angularjsDirectiveTemplate;

const config = ['$locationProvider', '$urlRouterProvider', ($locationProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}];

const controllerAs = 'vm';

const controller = function() {};

// Place $state into Root scope so we can use it from outside the scope of the app!
const run = ['$state', '$rootScope', ($state, $rootScope) => $rootScope.state = $state];

export default () => {
    window.angularCreated = true;
    angular
        .module('application', [
            uiRouter,
            Root,
            Landing,
            Login,
            Content
        ])
        .config(config)
        .config(routeConfigs)
        .directive('app', () => ({ template, controller, controllerAs }))
        .run(run);
};
