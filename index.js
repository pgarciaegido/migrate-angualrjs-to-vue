import './index.css';
import './src/sidebar/sidebar';
import { pathIsVueRoute, addVueApp, addAngularApp } from './src/angularToVue';


if (pathIsVueRoute()) {
    addVueApp();
    import('./src/vueApp').then((vueApp) => {
        vueApp.default();
        console.log('se ha cargado el módulo de vueApp');
    });
} else {
    addAngularApp();
    import('./src/angularApp').then((angularApp) => {
        angularApp.default();
        console.log('se ha cargado el módulo de angularApp');
    })
}
