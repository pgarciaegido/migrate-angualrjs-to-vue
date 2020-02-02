import './index.css';
import { isVueRoute } from './src/angularToVue';

if (isVueRoute()) {
    import('./src/vueApp').then((vueApp) => {
        console.log('se ha cargado el módulo de vueApp');
    });
} else {
    import('./src/angularApp').then((angularApp) => {
        console.log('se ha crgado el módulo de angularApp');
    })
}
