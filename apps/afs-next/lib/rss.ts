import axios from 'axios';

export const readRSS = async (url: string) => {
    const { data } = await axios.get(url);
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'application/xml');
    return doc;    
};
