import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import SelectCoin from "../components/Compare/SelectCoin";
import DaySelect from "../components/Coin/Select/Select";
import { getPrices } from "../functions/getPrices";
import { getCoinData } from "../functions/getCoinData";
import { coinObject } from "../functions/CoinObject";
import Loader from "../components/Dashboard/Loader/Loader";
const Compare = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [days, setDays] = useState(30);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData()
  }, []);

  async function getData() {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);
    if (data1) {
      coinObject(data1, setCrypto1Data);
    }
    if (data2) {
      coinObject(data2, setCrypto2Data);
    }
    if (data1 && data2) {
      const prices1 = await getPrices(crypto1, days, "prices");
      const prices2 = await getPrices(crypto2, days, "prices");
      if (prices1?.length > 0 && prices2?.length > 0) {
        console.log("............" , crypto1 , crypto2);
        setIsLoading(false);
      }
    }
  }

  function handleDaysChange(event) {
    setDays(event.target.value);
  }
  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true)
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      if (data) {
        coinObject(data, setCrypto2Data);
        const prices = await getPrices(event.target.value, days, "prices");
        if (prices?.length > 0) {
          // settingChartData(setChart, prices);
          setIsLoading(false);
        }
      }
    } else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      if (data) {
        coinObject(data, setCrypto1Data);
        const prices = await getPrices(event.target.value, days, "prices");
        if (prices?.length > 0) {
          // settingChartData(setChart, prices);
          setIsLoading(false);
        }
      }
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <SelectCoin
            crypto1={crypto1}
            setCrypto1={setCrypto1}
            crypto2={crypto2}
            setCrypto2={setCrypto2}
          />
          <DaySelect days={days} handleDaysChange={handleDaysChange} />
        </div>
      )}
    </div>
  );
};

export default Compare;
