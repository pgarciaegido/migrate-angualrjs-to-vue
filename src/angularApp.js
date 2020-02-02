import angular from 'angular';
import uiRouter from 'angular-ui-router';

import angularjsTemplate from './src/templates/angularjs.html';

import './index.css';

import Landing from './src/landing/landing';
import Root from './src/root/root';
import Login from './src/login/login';
import Content from './src/content/content';

import { routeConfigs } from './src/routes/angularRoutes';

const template = angularjsTemplate;

const config = ['$locationProvider', '$urlRouterProvider', ($locationProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}];

const controllerAs = 'vm';

const controller = function() {};

const createAngularApp = () => 
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
        .run();

export { createAngularApp };
