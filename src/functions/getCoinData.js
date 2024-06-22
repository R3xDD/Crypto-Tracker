import axios from "axios";
export const getCoinData = function (id) {
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
  return myData;
};