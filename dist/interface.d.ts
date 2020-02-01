export interface IOpts {
    /** 监控信息接收的地址 */
    url: string;
    /** 性能监控 */
    preId?: number | string;
    /** 浏览器参数 */
    uaId?: number | string;
    /** 地理位置 */
    locationId?: number | string;
}
