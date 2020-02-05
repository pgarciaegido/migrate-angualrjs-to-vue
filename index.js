import './index.css';
import { isVueRoute } from './src/angularToVue';

if (isVueRoute()) {
    import('./src/vueApp').then((vueApp) => {
        console.log('Vuejs app loaded!');
    });
} else {
    import('./src/angularApp').then((angularApp) => {
        console.log('AngularJS app loaded!');
    })
}
