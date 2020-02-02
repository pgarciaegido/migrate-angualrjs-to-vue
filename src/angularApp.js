import angular from 'angular';
import uiRouter from 'angular-ui-router';

import angularjsTemplate from './templates/angularjs.html';

import Landing from './landing/landing';
import Root from './root/root';
import Login from './login/login';
import Content from './content/content';

import { routeConfigs } from './routes/angularRoutes';

const template = angularjsTemplate;

const config = ['$locationProvider', '$urlRouterProvider', ($locationProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}];

const controllerAs = 'vm';

const controller = function() {};

export default angular
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
        .run();
