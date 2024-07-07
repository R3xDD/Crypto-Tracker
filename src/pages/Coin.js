import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import { useParams } from "react-router-dom";
import Loader from "../components/Dashboard/Loader/Loader";
import { coinObject } from "../functions/CoinObject";
import List from "../components/Dashboard/List/list";
import CoinInfo from "../components/Coin/coinInfo/coinInfo";
import LineChart from "../components/Dashboard/LineChart/LineChart";
import { convertDate } from "../functions/convertDate";
import DaySelect from "../components/Coin/Select/Select";
import TopButton from "../components/Dashboard/TopButton/TopButton";
import ColorToggleButton from "../components/Coin/Toggle/Toggle";
import { getPrices } from "../functions/getPrices";
import { getCoinData } from "../functions/getCoinData";
import { settingChartData } from "../functions/settingChartData";

const Coin = () => {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [chart, setChart] = useState({ labels: [], datasets: [{}] });
  const [coinData, setCoinData] = useState({});
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");

  async function getData() {
    setIsLoading(true);
    const data = await getCoinData(id);
    if (data) {
      coinObject(data, setCoinData);
      const prices = await getPrices(id, days, priceType);
      if (prices?.length > 0) {
        settingChartData(setChart, prices);
        setIsLoading(false);
      }
    }
  }
  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  // async function settingChartData(setChart, price) {
  //   const prices = await getPrices(id, days);
  //   if (price?.length > 0) {
  //     setChart({
  //       labels: price.map((item) => convertDate(item[0])),
  //       datasets: [
  //         {
  //           label: prices?.prices,
  //           data: price.map((item) => item[1]),
  //           borderWidth: 1,
  //           fill: true,
  //           backgroundColor: "#40afa04e",
  //           tension: 0,
  //           borderColor: "#40afa0",
  //           pointRadius: 2,
  //         },
  //       ],
  //     });
  //   }
  // }

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    console.log(event.target.value);
    const prices = await getPrices(id, event.target.value, priceType);
    if (prices?.length > 0) {
      settingChartData(setChart, prices);
      setIsLoading(false);
    }
  };

  const handlePriceChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices = await getPrices(id, days, newType);
    if (prices?.length > 0) {
      settingChartData(setChart, prices);
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <Header />
      <TopButton />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <div className="bg-[#1b1b1b] rounded-xl  mx-auto my-6 transition-all hover:bg-[#333232] ">
              <List coin={coinData} className="" />
            </div>
            <div>
              <div className="md:p-8 p-1 bg-[#1b1b1b] rounded-xl  w-full mx-auto my-6  transition-all hover:bg-[#333232] ">
                <DaySelect days={days} handleDaysChange={handleDaysChange} />
                <ColorToggleButton
                  priceType={priceType}
                  handlePriceChange={handlePriceChange}
                />
                  <LineChart chartData={chart} priceType={priceType}  />
                  
              </div>
                <div className="block  bg-[#1B1B1B]  my-auto px-6 py-4 rounded-xl   leading-8   tracking-wider text-lg">
                <CoinInfo title={coinData?.name} desc={coinData?.desc} image={coinData?.image} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Coin;
