import UUID from 'uuid-js';

const UUID_NAME = 'UNI_POCKY_MONITOR_UUID';

const setUUID = function(): string {
    const value = UUID.create().toString();

    uni.setStorageSync(UUID_NAME, value);

    return value;
};

export const getUUID = function(): string {
    const value = uni.getStorageSync(UUID_NAME);

    if (value !== '') {
        return value;
    }

    return setUUID();
};

export const removeUUID = function() {
    uni.removeStorageSync(UUID_NAME);
};
