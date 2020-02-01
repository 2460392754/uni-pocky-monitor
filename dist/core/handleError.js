/**
 * 处理错误
 * @param msg 错误信息
 */
export default function (msg) {
    throw new Error(`[uni-monitor] ${msg}`);
}
