import uniPockyMonitor from '../../dist';
import Vue from 'vue';

Vue.use(uniPockyMonitor.install, {
    BASE_URL: 'http://localhost:3000/monitor',
    performance: '/performance',
    system: '/system',
    location: '/location',
    router: '/router',
    view: '/view',
    request(config) {
        return config;
    }
});
