import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3/coins";

export const getCoinsList = () =>{
const url = `${BASE_URL}/markets`;

const params = {
    vs_currency : 'eur',
    order: 'market_cap_desc',
    per_page : 10
};

return axios.get(url,{
    params: params,
    headers :{
        'accept': 'application/json'
    }
})
.then((response) =>{
    console.log("response",response)
    return response;
})
.catch((err) =>{
    console.log("err",err);
    return err;
})
};


export const getCoinById = (coinId : string | undefined) =>{
    const url = `${BASE_URL}/${coinId}?localization=false`;
    
    return axios.get(url,{
        headers :{
            'accept': 'application/json'
        }
    })
    .then((response) =>{
        console.log("response",response)
        return response;
    })
    .catch((err) =>{
        console.log("err",err);
        return err;
    })
};