export const clone = value => {
    if (typeof globalThis.structuredClone === 'function') {
        return globalThis.structuredClone(value);
    }

    return JSON.parse(JSON.stringify(value));
};

export const deepMergeRight = (left, right) => {
    if (
        typeof left === 'object' &&
        typeof right === 'object' &&
        left !== null &&
        right !== null &&
        !Array.isArray(left) &&
        !Array.isArray(right)
    ) {
        const result = { ...left };

        for (const key of Object.keys(right)) {
            if (key in left) {
                result[key] = deepMergeRight(left[key], right[key]);
            } else {
                result[key] = clone(right[key]);
            }
        }

        return result;
    }

    return clone(right);
};
