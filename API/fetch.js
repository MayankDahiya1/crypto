const fetch = require("node-fetch");
const fetching = async () =>{
    const response = await fetch("https://api.wazirx.com/api/v2/tickers");
    const data = await response.json();
    return data;
}
module.exports = fetching;