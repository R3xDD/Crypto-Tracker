import React , {useEffect, useState} from 'react'
import Header from '../components/Common/Header/Header'
import SelectCoin from '../components/Compare/SelectCoin';
import DaySelect from '../components/Coin/Select/Select';
import { getPrices } from '../functions/getPrices';
import { getCoinData } from '../functions/getCoinData';
import { coinObject } from '../functions/CoinObject';
import TopButton from '../components/Dashboard/TopButton/TopButton';
import Loader from '../components/Dashboard/Loader/Loader';
import List from '../components/Dashboard/List/list';
import Info from '../components/Coin/coinInfo/coinInfo';
import { settingChartData } from '../functions/settingChartData';
import LineChart from '../components/Dashboard/LineChart/LineChart';
import ColorToggleButton from '../components/Coin/Toggle/Toggle';
function Compare() {
    const [crypto1 , setCrypto1]=useState("bitcoin");
    const [crypto2 , setCrypto2]=useState("ethereum");
    const [crypto1Data , setCrypto1Data]=useState({});
    const [crypto2Data , setCrypto2Data]=useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [days , setDays]=useState(30);
    const [priceType , setPriceType] = useState("prices");
    const [chart, setChart] = useState({ labels: [], datasets: [{}] });



     


    // const handleDaysChange = async (event) => {
    //     setIsLoading(true);
    //     setDays(event.target.value);
    //     console.log(event.target.value);
    //     const prices = await getPrices(id, event.target.value, priceType);
    //     if (prices?.length > 0) {
    //       settingChartData(setChart, prices);
    //       setIsLoading(false);
    //     }
    //   };




    useEffect(()=>{
        getData();
    }, []);




    async function getData(){
        setIsLoading(true);
        const data1 = await getCoinData(crypto1);
        const data2 = await getCoinData(crypto2);
    if (data1) {
      coinObject(data1, setCrypto1Data);
      
      
    }
    if (data2) {
        coinObject(data2, setCrypto2Data);
        const prices1 = await getPrices(crypto1, days, priceType);
        const prices2 = await getPrices(crypto2, days, priceType);

        settingChartData(setChart, prices1 , prices2);
        console.log("both", prices1 , prices2)
        setIsLoading(false);
      }
      
        
    }

    const handleCoinChange = async (event, isCoin2) => {
        setIsLoading(true)
        if (isCoin2) {
          setCrypto2(event.target.value);
          const data = await getCoinData(event.target.value);
          coinObject(data, setCrypto2Data);

        } else {
          setCrypto1(event.target.value);
          const data = await getCoinData(event.target.value);
          coinObject(data, setCrypto1Data); 
        }

        const prices1 = await getPrices(crypto1, days, priceType);
        const prices2 = await getPrices(crypto2, days, priceType);
        if (prices1?.length > 0 && prices2?.length > 0) {
          // settingChartData(setChart, prices);
          console.log("both", prices1 , prices2)
          setIsLoading(false);
        }
      };
      async function handleDaysChange (e){
        const newDays = e.target.value;
    setIsLoading(true);
    setDays(newDays);
    const prices1 = await getPrices(crypto1, newDays, priceType);
    const prices2 = await getPrices(crypto2, newDays, priceType);
    settingChartData(setChart, prices1, prices2);
    setIsLoading(false);
    }
    const handlePriceTypeChange = async (e) => {
      const newPriceType = e.target.value;
      setIsLoading(true);
      setPriceType(newPriceType);
      const prices1 = await getPrices(crypto1, days, newPriceType);
      const prices2 = await getPrices(crypto2, days, newPriceType);
      settingChartData(setChart, prices1, prices2);
      setIsLoading(false);
    };
  return (
    <div>
        <Header />
        <TopButton />
        <div className='container'>
          {isLoading ? (
            <Loader />
          ) : ( 
            <>
            <div className='bg-[#1b1b1b] rounded-lg  min-h-64'>
            <div className=''>
              <h1 className='flex items-center justify-center my-4 font-semibold text-3xl  text-[#888]'>Check your Compare Choices </h1>
            <div className="  flex flex-col gap-10 justify-evenly   p-3 my-2 mx-auto">
          <SelectCoin 
            crypto1={crypto1} 
            crypto2={crypto2} 
            handleCoinChange={handleCoinChange}
             />
          <div className='flex items-center justify-center ' >
            <DaySelect  handleDaysChange={handleDaysChange} days={days}/>
            </div>
            </div>
            </div>
            </div>
            <div className="bg-[#1b1b1b] rounded-xl  mx-auto my-6 transition-all hover:bg-[#333232] ">
              <List coin={crypto1Data} />
            </div>
            <div className="bg-[#1b1b1b] rounded-xl  mx-auto my-6 transition-all hover:bg-[#333232] ">
              <List coin={crypto2Data} />
            </div>
            <div className="md:p-8 p-1 bg-[#1b1b1b] rounded-xl  w-full mx-auto my-6  transition-all hover:bg-[#333232]">
            <ColorToggleButton
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
                <LineChart chartData={chart} priceType={"prices"} multiAxis={true} />
            </div>
            <div className="block  bg-[#1B1B1B]  my-auto px-6 py-4 rounded-xl  mb-8 leading-8   tracking-wider text-lg">
                <Info title={crypto1Data?.name} desc={crypto1Data?.desc} image={crypto1Data?.image} />
              </div>
              <div className="block  bg-[#1B1B1B]  my-auto px-6 py-4 rounded-xl   leading-8   tracking-wider text-lg">
                <Info title={crypto2Data?.name} desc={crypto2Data?.desc} image={crypto2Data?.image} />
              </div>
            </>
            
           )} 
          
            
        </div>
    </div>
  )
}

export default Compare