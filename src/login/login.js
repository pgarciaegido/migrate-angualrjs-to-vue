import { changeRoute } from '../routes/angularRoutes';

const moduleName = 'app.login';
const controllerName = 'LoginController';
const controllerFn = ['$state', function($state) {
    const vm = this;
    vm.changeRoute = changeRoute($state);
}];

export default angular
    .module(moduleName, [])
    .controller(controllerName, controllerFn)
    .name;
