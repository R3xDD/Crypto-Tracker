// import axios from "axios";


// export const getPrices = function (id, days, priceType) {
//     const prices = axios
//       .get(
//         `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
//       )
//       .then((response) => {
//         if (response.data) {
//           return response.data[priceType]
//         }
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//     return prices;
//   };
import axios from "axios";

export const getPrices = (id, days, priceType) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      if (response.data) {
        console.log("Prices>>>", response.data);
        if (response.data) {
                    return response.data[priceType]
                  }
      }
    })
    .catch((e) => {
      console.log(e.message);
    });

  return prices;
};