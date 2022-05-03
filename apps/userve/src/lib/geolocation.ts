import axios from 'axios';

import stateList from 'src/components/core/StatePicker/stateList';

// TODO: send ip to backend to avoid exposing ipinfo token 

type ResponseType = {
    ip: string,
    hostname: string,
    region: string,
    country: string,
    [key: string]: unknown; // not unknown but unused
}

const DEFAULT_NO_MATCH="California";
export const getState = async () => {
    const { data: { region, country } } = await axios.get<ResponseType>('https://ipinfo.io/?token=8d569c1240a97f');
    if(country !== "US" || !stateList.includes(region)) return DEFAULT_NO_MATCH;
    return region;
}
