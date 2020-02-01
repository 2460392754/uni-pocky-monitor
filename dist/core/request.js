import request from '@pocky/uni-request';
import configInstance from './config';
const http = request({
    header: {
        contentType: 'application/x-www-form-urlencoded'
    }
});
http.interceptors.request.use((config) => {
    config.baseURL = configInstance.url;
    return config;
});
http.interceptors.request.use((config) => {
    for (const [key, value] of Object.entries(config.params)) {
        config.params[key] = value === null ? '' : value;
    }
    return config;
});
export default http;
