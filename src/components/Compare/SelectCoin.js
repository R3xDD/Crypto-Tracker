import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
function SelectCoin({ crypto1, crypto2, setCrypto1, setCrypto2 }) {
  const [allCoins, setAllCoins] = useState([]);
  useEffect(() => {
    getSelectData();
  }, []);
  async function getSelectData() {
    const coins = await get100Coins();
    setAllCoins(coins);
  }
  async function get100Coins() {
    const myCoins = axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false&price_change_percentage=1h"
      )
      .then((response) => {
        console.log("response", response.data);
        return response.data;
      })
      .catch((error) => {
        console.log("error", error);
      });
    return myCoins;
  }

  const handleCoinChange = async (event, isCoin2) => {
    if (isCoin2) {
      setCrypto2(event.target.value);
    } else {
      setCrypto1(event.target.value);
    }
  };
  return (
    <div className="container">
      <div className="  flex flex-col md:flex-row justify-center items-center gap-2 bg-[#1b1b1b] rounded-lg p-3 my-2 mx-auto">
        <div className="w-[40%] flex justify-start items-center gap-2">
          <p className="text-[#40afa0] text-lg md:text-xl font-normal  md:font-semibold  tracking-normal md:tracking-wide  leading-6 md:leading-8">
            First Crypto :
          </p>
          <Select
            sx={{
              width: "40%",
              color: "var(--white)",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--white)",
              },
              "& .MuiSvgIcon-root": {
                color: "var(--white)",
              },
              "&:hover": {
                "&& fieldset": {
                  borderColor: "#40afa0",
                },
              },
            }}
            value={crypto1}
            label="Crypto 1"
            onChange={(event) => handleCoinChange(event, false)}
          >
            {allCoins?.map((coin , i ) => (
              <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
            ))}
          </Select>
        </div>
        <div className="w-[40%] flex justify-start items-center gap-2">
          <p className="text-[#40afa0] text-lg md:text-xl font-normal  md:font-semibold  tracking-normal md:tracking-wide  leading-6 md:leading-8">
            Second Crypto :
          </p>
          <Select
            sx={{
              width: "40%",
              color: "var(--white)",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--white)",
              },
              "& .MuiSvgIcon-root": {
                color: "var(--white)",
              },
              "&:hover": {
                "&& fieldset": {
                  borderColor: "#40afa0",
                },
              },
            }}
            value={crypto2}
            label="Crypto 2"
            onChange={(event) => handleCoinChange(event, true)}
          >
            {allCoins?.map((coin , i ) => (
              <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
            ))}
          </Select>
        </div>

      </div>
    </div>
  );
}

export default SelectCoin;
