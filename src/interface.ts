// export interface IOpts {
//     /** 性能监控 */
//     pre: boolean;

//     /** js错误监控 */
//     jsError: boolean;

//     /** 上报的信息是否压缩 */
//     compress: boolean;

//     /** 业务系统ID */
//     appId: string;

//     /** 业务系统ID的名称 */
//     appName: string;

//     /** 监控信息接收的地址 */
//     url: string;
// }
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
