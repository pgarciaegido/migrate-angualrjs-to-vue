import rootTemplate from './root/root.html';
import landingTemplate from './landing/landing.html';
import contentTemplate from './content/content.html';
import loginTemplate from './login/login.html';

const routes = [
    { name: 'root', url: '/', template: rootTemplate, controller: 'RootController as vm' },
    { name: 'landing', url: '/landing', template: landingTemplate, controller: 'LandingController as vm' },
    { name: 'login', url: '/login', template: loginTemplate, controller: 'LoginController as vm' },
    { name: 'content', url: '/content', template: contentTemplate, controller: 'ContentController as vm' }
];

const changeRoute = (state) => (stateName) => state.go(stateName);

const routeConfigs = ['$stateProvider', ($stateProvider) => {
    routes.forEach(({name, template, controller, url}) => {
        $stateProvider.state(name, { template, controller, url })
    });
}];

export { routeConfigs, changeRoute };
