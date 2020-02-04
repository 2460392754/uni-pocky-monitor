export interface IOpts {
    /** 监控信息接收的基地址 */
    BASE_URL: string;
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
