// https://github.com/zhengguorong/xbossdebug-wechat
// https://developers.weixin.qq.com/community/develop/doc/000e46078b015804f6d6c2dc156006
// https://github.com/unclepan/zui-monitor/tree/dev
// https://mta.qq.com/docs/wechat_mini_program_api.html

import request from './core/request';
import info from './core/info';
import ConfigInstance from './core/config';
import { IOpts } from './interface';
import { VueConstructor } from 'vue';

export const install = function(vue: VueConstructor, opts: IOpts) {
    const http = request(opts);

    const actions = {
        // 页面加载性能数据
        performance(url: string) {
            const params = info.performance();

            http.get(url, { params });
        },

        // 设备或浏览器信息
        async system(url: string) {
            const params = await info.system();

            http.get(url, { params });
        },

        // 当前设备所在的地理位置
        async location(url: string) {
            const params = await info.location();

            http.get(url, { params });
        },

        // 页面路由更新记录
        async router(url: string) {
            vue.mixin({
                onLoad() {
                    const params = info.router();

                    http.get(url, { params });
                }
            });
        },

        // 页面浏览记录
        view(url: string) {
            http.get(url);
        }
    };

    (function() {
        ConfigInstance.url = opts.BASE_URL;

        for (const [key, value] of Object.entries(opts || {})) {
            if (actions.hasOwnProperty(key)) {
                actions[key](value);
            }
        }
    })();
};

export default {
    install
};
