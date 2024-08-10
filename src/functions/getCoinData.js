// import axios from "axios";
// export const getCoinData = function (id) {
//   const myData = axios
//     .get(`https://api.coingecko.com/api/v3/coins/${id}`)
//     .then((response) => {
//       if (response.data) {
//         return response.data;
//       }
//     })
//     .catch((error) => {
//       console.log("error", error);
//     });
//   return myData;
// };
import axios from "axios";

export const getCoinData = (id) => {
  const coin = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((e) => {
      console.log(e.message);
    });

  return coin;
};