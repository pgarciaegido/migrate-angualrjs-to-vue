import { changeRoute } from '../routes/angularRoutes';

const moduleName = 'app.landing';
const controllerName = 'LandingController';
const controllerFn = ['$state', function($state) {
    const vm = this;
    vm.changeRoute = changeRoute($state);
}];

export default angular
    .module(moduleName, [])
    .controller('LandingController', controllerFn)
    .name;