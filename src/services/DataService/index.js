import linersData from "../../data/liners.json";

export const getLinersData = (id = null) => {
    if (id) {
        let liner = linersData.filter(liner => liner.id === id);
        return new Promise(resolve => resolve(liner));
    }

    return new Promise(resolve => resolve(linersData));
};
