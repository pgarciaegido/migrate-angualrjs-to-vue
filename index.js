import './index.css';
import './src/sidebar/sidebar';
import { pathIsVueRoute } from './src/angularToVue';

if (pathIsVueRoute()) {
    import('./src/vueApp').then((vueApp) => {
        console.log('se ha cargado el módulo de vueApp');
    });
} else {
    import('./src/angularApp').then((angularApp) => {
        console.log('se ha cargado el módulo de angularApp');
    })
}
