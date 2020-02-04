const actions = {
    web() {
        // window.onerror = function(msg, url, line, col, error) {
        //     const errobj = {
        //         msg: `错误：${msg}`,
        //         url: `URL：${url}`,
        //         line: `行：${line}`,
        //         col: `列：${col}`,
        //         error: `错误对象：${error}`
        //     };
        // };
        window.onerror = function(event: Event | string, source?: string, lineno?: number) {};
    },

    mini() {}
};
