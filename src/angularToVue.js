import vueRoutes from './routes/vueRoutes';
import angularRootTemplate from './templates/angularjs.html';
import vueRootTemplate from './templates/vuejs.html';

const getPath = () => window.location.pathname;

// This function might need to be improved, but for a simple example it works well
const isVueRoute = (givenPath) => () => !!vueRoutes.find(({path}) => givenPath !== '/' && path.includes(givenPath) || givenPath.includes(path));

const areInAngular = () => !!document.getElementById('angular-app');

const addMainAppHtml = (template) => document.getElementById('main-app').innerHTML = template;
const addVueApp = () => addMainAppHtml(vueRootTemplate);
const addAngularApp = () => addMainAppHtml(angularRootTemplate);

const pathIsVueRoute = isVueRoute(getPath());

const getAngularScope = () => angular.element(document.querySelector('app')).scope();

const getVueApp = () => window.vueApp.$children[0];
const destroyAngularApp = () => getAngularScope().$destroy();

const destroyVueApp = () => getVueApp().$destroy();

const UIRouterChangeRoute = (state) => getAngularScope().$root.state.go(state);

const changePage = (headingTo) => {
    // VUE ROUTE
    if (isVueRoute(headingTo)()) {
        if (areInAngular()) {
            destroyAngularApp();
            addVueApp();
            import('./vueApp').then((vueApp) => {
                const app = vueApp.default();
                app.$router.push({name: headingTo}).catch(() => {});
            });
        } else {
            window.vueApp.$router.push({name: headingTo}).catch(() => {});
        }
    // ANGULAR ROUTE
    } else {
        if (areInAngular()) {
            UIRouterChangeRoute(headingTo);
        } else {
            destroyVueApp();
            addAngularApp();
            import('./angularApp').then((angularApp) => {
                angularApp.default();
                angular.bootstrap(document.querySelector('#angular-app'), ['application']);
                UIRouterChangeRoute(headingTo);
            });
        }
    }
};

export { pathIsVueRoute, changePage, addVueApp, addAngularApp };
