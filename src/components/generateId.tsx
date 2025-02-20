export const generateId = (prefix) => {
    const key = `${prefix}Counter`;
    const counter = parseInt(localStorage.getItem(key), 10) || 1;

    const newId = `${prefix}-${String(counter).padStart(3, "0")}`;
    localStorage.setItem(key, String(Number(counter) + 1));

    return newId;
};