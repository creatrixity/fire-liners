import linersData from "../../assets/data/liners.json";
import authorsData from "../../assets/data/authors.json";

export const getLinersData = (config) => {
    // If we only need one item from our liners data.
    if (config.id) {
        let liner = linersData.filter(liner => liner.id === config.id);
        return new Promise(resolve => resolve(liner));
    }

    // We track the current set of liners we'd like to load through this variable.
    let linersSetIndex = config.linersSetIndex ? config.linersSetIndex : 0;

    // Since we're only loading 5 items at a time.
    let resultsIndex = (linersSetIndex * 5);

    // We select the range of items we're interested in.
    // Could be all items for index 5 to index 10
    let data = linersData.sort((a, b) => a.id < b.id).slice(resultsIndex, resultsIndex + 5)

    return new Promise(resolve => resolve(data));
};

export const getLinersTotal = () => linersData.length;

export const getAuthorLiners = (author) => linersData.filter(liner => author.name === liner.author);

export const getAuthorsData = (id = null) => {
    if (id) {
        let author = authorsData.filter(author => author.id === id);
        return new Promise(resolve => resolve(author));
    }

    return new Promise(resolve => resolve(authorsData));
};

export const getAuthorLinersData = (config) => {
    let authorLiners = getAuthorLiners(config.author)

    // We track the current set of liners we'd like to load through this variable.
    let linersSetIndex = config.linersSetIndex ? config.linersSetIndex : 0;

    // Since we're only loading 5 items at a time.
    let resultsIndex = (linersSetIndex * 5);

    // We select the range of items we're interested in.
    // Could be all items for index 5 to index 10
    let data = authorLiners.slice(resultsIndex, resultsIndex + 5)

    return new Promise(resolve => resolve(data));
};
