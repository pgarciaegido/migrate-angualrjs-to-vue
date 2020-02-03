import vueRoutes from './routes/vueRoutes';

const getPath = () => window.location.pathname;

// This function might need to be improved, but for a simple example it works well
const isVueRoute = (givenPath) => () => !!vueRoutes.find(({path}) => givenPath.includes(path) || path.includes(givenPath));

const areInAngular = !!document.getElementById('angular-app');

const pathIsVueRoute = isVueRoute(getPath());

const getAngularScope = () => {
    return new Promise((resolve, reject) => {
        import('angular').then((angular) => {
            return resolve(angular.element(document.querySelector('app')).scope());
        });
    });
}

const UIRouterChangeRoute = (state) => getAngularScope().then(($scope) => $scope.$root.state.go(state));

const changePage = (headingTo) => {
    if (isVueRoute(headingTo)()) {
        if (areInAngular) {
            // Destroy angular app
            // Bootstrap vue app with selected route
        } else {
            // Change vue route
        }
    } else {
        if (areInAngular) {
            UIRouterChangeRoute(headingTo);
        } else {
            // Destroy Vue app
            // Bootstrap angular app with selected route
        }
    }
};

export { pathIsVueRoute, changePage };
