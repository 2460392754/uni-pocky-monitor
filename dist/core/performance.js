/**
 * 获取 一些性能参数
 */
export default function getPerformanceTiming() {
    const performance = window.performance;
    if (!performance) {
        console.log('浏览器不支持 performance 接口');
        return;
    }
    const t = performance.timing;
    const data = {
        // 页面加载完成的时间, 几乎代表了用户等待页面可用的时间
        loadPage: t.loadEventEnd - t.loadEventStart,
        // 解析 DOM 树结构的时间
        domReady: t.domComplete - t.responseEnd,
        // 重定向的时间
        redirect: t.redirectEnd - t.redirectStart,
        // DNS 查询时间
        lookupDomain: t.domainLookupEnd - t.domainLookupStart,
        // 读取页面第一个字节的时间, 用户拿到你的资源占用的时间，加异地机房了么，加CDN 处理了么？加带宽了么？加 CPU 运算速度了么
        ttfb: t.responseStart - t.navigationStart,
        // 内容加载完成的时间, 页面内容经过 gzip 压缩了么，静态资源 css/js 等压缩了么
        request: t.responseEnd - t.requestStart,
        // 执行 onload 回调函数的时间
        loadEvent: t.loadEventEnd - t.loadEventStart,
        // DNS 缓存时间
        appcache: t.domainLookupStart - t.fetchStart,
        // 卸载页面的时间
        unloadEvent: t.unloadEventEnd - t.unloadEventStart,
        // TCP 建立连接完成握手的时间
        connect: t.connectEnd - t.connectStart
    };
    return data;
}
