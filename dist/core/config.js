class Config {
    constructor() {
        /** 请求上传基地址 */
        this.url = '';
        /** 队列 */
        this.queueList = [];
    }
    /** 单例模式 */
    static getInstance() {
        if (!Config._instance) {
            Config._instance = new Config();
        }
        return Config._instance;
    }
}
/** 实例 */
Config._instance = null;
export default Config.getInstance();
