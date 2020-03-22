export const readLS = name => localStorage.getItem(name);

export const setItemLS = (name, value) => {
    if (value) {
        localStorage.setItem(name, value.toString());
    }
};

export const deleteLS = name => localStorage.removeItem(name);

export const isLSEmpty = name => readLS(name) === null || readLS(name) === undefined;

export const removeAllLS = () => {
    localStorage.clear();
};
