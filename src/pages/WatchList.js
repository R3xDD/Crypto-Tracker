import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import TopButton from "../components/Dashboard/TopButton/TopButton";
import Button from "../components/Common/Button/Button";
import Tabs from "../components/Dashboard/tabs/Tabs";
import axios from "axios";

function Watchlist() {

  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [coins, setCoins] = useState([]);


 const get100Coins = () => {
    const coins = axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log("RESPONSE>>>", response.data);
        return response.data;
      })
      .catch((error) => {
        console.log("ERROR>>>", error.message);
      });
  
    return coins;
  };

  useEffect(() => {
    if (watchlist) {
      getData();
    }
  }, []);

  const getData = async () => {
    const allCoins = await get100Coins();
    if (allCoins) {
      setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
    }
  };

  return (
    <div>
      <Header />
      <TopButton />
      {watchlist?.length > 0 ? (
        <Tabs coins={coins} />
      ) : (
        <div className=' flex justif-center items-center flex-col mx-auto my-20 rounded-lg bg-[#1b1b1b] p-20 w-fit'>
          <h1 className="text-center">
            Sorry, No Items In The Watchlist.
          </h1>
          <div className="flex justif-center m-8">
            <a href="/dashboard">
              <Button text="Dashboard" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Watchlist;