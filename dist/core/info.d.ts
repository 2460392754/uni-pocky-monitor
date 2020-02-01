declare const _default: {
    system(): Promise<any>;
    location(): Promise<any>;
    performance(): {
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
    pv(): void;
    cv(): void;
};
export default _default;
