import request from '@pocky/uni-request';
import configInstance from './config';
const init = function (opts) {
    const http = request({
        baseURL: opts.BASE_URL
    });
    http.interceptors.request.use((config) => {
        config.baseURL = configInstance.url;
        return config;
    });
    http.interceptors.request.use((config) => {
        for (const [key, value] of Object.entries(config.params || {})) {
            config.params[key] = value === null ? '' : value;
        }
        return config;
    });
    if (typeof opts.request === 'function') {
        http.interceptors.request.use((config) => {
            return opts.request(config);
        });
    }
    if (typeof opts.response === 'function') {
        http.interceptors.response.use((config, res) => {
            return opts.response(config, res);
        });
    }
    return http;
};
export default init;
