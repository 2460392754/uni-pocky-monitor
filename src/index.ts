// https://github.com/zhengguorong/xbossdebug-wechat
// https://developers.weixin.qq.com/community/develop/doc/000e46078b015804f6d6c2dc156006
// https://github.com/unclepan/zui-monitor/tree/dev
// https://mta.qq.com/docs/wechat_mini_program_api.html

import config from './core/config';
import request from './core/request';
import info from './core/info';
import { IOpts } from './interface';

export default class {
    private data: IOpts;

    constructor(opts: IOpts) {
        this._setOptions(opts);
    }

    start() {
        this._performance();
        this._location();
        this._system();
    }

    /** 设置参数 */
    private _setOptions(inputOpts: IOpts) {
        const defaultOpts: IOpts = {
            url: ''
        };

        this.data = { ...defaultOpts, ...inputOpts };
        config.url = this.data.url;
    }

    private _performance() {
        const result = info.performance();

        request.get('/performance', { params: result });
    }

    private async _system() {
        const result = await info.system();

        request.get('/system', { params: result });
    }

    private async _location() {
        const result = await info.location();

        request.get('/location', { params: result });
    }
}
