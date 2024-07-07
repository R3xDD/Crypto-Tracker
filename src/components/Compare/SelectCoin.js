import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import DaySelect from "../Coin/Select/Select";
function SelectCoin({ crypto1, crypto2, handleCoinChange}) {
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

  return (
    <div className="flex justify-center flex-col md:flex-row items-center gap-10 ml-24">
        <div className="flex items-center w-full">
          <p className="text-[#40afa0] text-sm md:text-md font-normal  md:font-semibold  tracking-normal md:tracking-wide  leading-4 md:leading-6">
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
            {allCoins
            ?.map((coin , i ) => (
              <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
            ))}
          </Select>
        </div>
        <div className="flex items-center w-full">
          <p className="text-[#40afa0] text-sm md:text-md font-normal  md:font-semibold  tracking-normal md:tracking-wide  leading-4 md:leading-6 ">
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
  );
}

export default SelectCoin;
