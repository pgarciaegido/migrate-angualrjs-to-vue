import { changeRoute } from '../angularRoutes';

const moduleName = 'app.content';
const controllerName = 'ContentController';
const controllerFn = ['$state', function($state) {
    const vm = this;
    vm.changeRoute = changeRoute($state);
}];

export default angular
    .module(moduleName, [])
    .controller(controllerName, controllerFn)
    .name;
