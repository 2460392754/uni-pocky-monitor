/**
 * 处理错误
 * @param msg 错误信息
 */
export default function(msg: string): never {
    throw `[uni-monitor] ${msg}`;
}
