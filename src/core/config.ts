class Config {
    /** 实例 */
    private static _instance = null;

    /** 单例模式 */
    static getInstance(): Config {
        if (!Config._instance) {
            Config._instance = new Config();
        }

        return Config._instance;
    }

    /** 请求上传基地址 */
    url = '';

    /** 队列 */
    queueList = [];
}

export default Config.getInstance();
