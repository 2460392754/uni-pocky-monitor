/**
 * 获取 一些性能参数
 */
export default function getPerformanceTiming(): {
    loadPage: number;
    domReady: number;
    redirect: number;
    lookupDomain: number;
    ttfb: number;
    request: number;
    loadEvent: number;
    appcache: number;
    unloadEvent: number;
    connect: number;
};
