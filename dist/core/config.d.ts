declare class Config {
    /** 实例 */
    private static _instance;
    /** 单例模式 */
    static getInstance(): Config;
    /** 请求上传基地址 */
    url: string;
    /** 队列 */
    queueList: any[];
}
declare const _default: Config;
export default _default;
