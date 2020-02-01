import uniPockyMonitor from '../../dist';

const monitor = new uniPockyMonitor({
    url: 'http://localhost:3000/monitor',
    preId: 1,
    uaId: 2,
    locationId: 3
});

monitor.start();
