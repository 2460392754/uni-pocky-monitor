import handleError from './handleError';
export default {
    system() {
        return new Promise((resolve, reject) => {
            uni.getSystemInfo({
                success(res) {
                    // console.log('');
                    // console.log('ua');
                    console.log(res);
                    resolve(res);
                },
                fail(err) {
                    // reject(new Error('此设备不支持获取系统参数 ' + err));
                    handleError('此设备不支持获取系统参数 ' + err);
                }
            });
        });
    },
    location() {
        return new Promise((resolve, reject) => {
            uni.getLocation({
                type: 'wgs84',
                success(res) {
                    const data = {
                        latitude: res.latitude,
                        longitude: res.longitude,
                        speed: res.speed,
                        accuracy: res.accuracy,
                        altitude: res.altitude,
                        verticalAccuracy: res.verticalAccuracy,
                        horizontalAccuracy: res.horizontalAccuracy
                    };
                    // console.log('');
                    // console.log('location');
                    // console.log(data);
                    resolve(data);
                },
                fail(err) {
                    // reject(new Error('此设备不支持获取地理位置' + err));
                    handleError('此设备不支持获取地理位置 ' + err);
                }
            });
        });
    },
    performance() {
        console.log(performance);
        if (!performance) {
            handleError('浏览器不支持 performance 接口 ');
        }
        const t = performance.timing;
        const data = {
            // 页面加载完成的时间, 几乎代表了用户等待页面可用的时间
            loadPage: t.loadEventEnd - t.loadEventStart,
            // 解析 DOM 树结构的时间
            domReady: t.domComplete - t.domInteractive,
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
        // console.log('');
        // console.log('performance');
        // console.log(data);
        return data;
    },
    pv() { },
    cv() { }
};
