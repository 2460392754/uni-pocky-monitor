export interface IOpts extends IRequestOpts {
    /** 性能监控 */
    performance?: string;

    /** 设备或浏览器信息 */
    system?: string;

    /** 地理位置 */
    location?: string;

    /** 页面路由 */
    router?: string;

    /** 页面路由 */
    view?: string;
}

export interface IRequestOpts {
    /** 监控信息接收的基地址 */
    BASE_URL: string;

    /** 请求拦截器 */
    request?: Function;

    /** 响应拦截器 */
    response?: Function;
}
