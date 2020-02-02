import vueRoutes from './routes/vueRoutes';

const getPath = () => window.location.pathname;

// This function might need to be improved, but for a simple example it works well
const isVueRoute = () => !!vueRoutes.find(({path}) => getPath().includes(path));

export { isVueRoute };
