// import React from 'react'
// import { motion, MotionConfig } from "framer-motion"
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import TrendingDownIcon from '@mui/icons-material/TrendingDown';
// import Button from '../../Common/Button/Button';

// const Grid = ({coin,key}) => {
//   return (
//     <div className='grid-container'>
//           <MotionConfig>
//         <div className='hover:scale-[1.05] transition-all'>
//         <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 1 }}
//           className={` flex flex-col gap-6  w-[400px] h-[400px] p-8 bg-[#1b1b1b] rounded-xl border-2 border-solid border-[#1b1b1b] cursor-pointer  transition-all   hover:border-[#61c96f] ${coin.price_change_percentage_24h < 0 && "flex flex-col gap-6  w-[400px] h-[400px] p-8 bg-[#1b1b1b] rounded-xl border-2 border-solid border-[#1b1b1b] cursor-pointer  transition-all   hover:border-[#f94141]"}`}

//         >
//               <div className='flex  justify-start items-center gap-4'>
//                   <img src={coin.image} alt="" className='h-12 w-12  rounded-full' />
//                   <div className='flex w-full justify-between items-center'>
//                     <div className='flex flex-col justify-between gap-1'>
//                         <p className='font-bold m-0 uppercase'>{coin.symbol}</p>
//                         <p className='m-0 font-normal text-[#888] text-sm  ' >{coin.name}</p>
//                     </div>
//                     </div>
//               </div>
//           <div>
//                     <div>
//                       {coin.price_change_percentage_24h.toFixed(2) > 0 ? (
//                         <div className='flex justify-start items-center gap-3  '>
//                             <div className='border-solid rounded-full border-2 border-[#61c96f] px-5 py-2  transition-all hover:bg-[#61c96f] hover:text-white font-semibold text-[#61c96f] '>
//                               {coin.price_change_percentage_24h.toFixed(2) } %
//                         </div>
//                         <TrendingUpIcon className='border-solid rounded-full border-2  text-center transition-all hover:bg-[#61c96f] hover:text-white border-[#61c96f]  font-semibold text-[#61c96f]' />
//                         </div>
//                       ) : (
//                         <div className='flex justify-start items-center gap-3  '>
//                             <div className='border-solid border-2 rounded-full   border-[#f94141] px-5 py-2 transition-all hover:bg-[#f94141] hover:text-white font-semibold  text-[#f94141]  '>
//                               {coin.price_change_percentage_24h.toFixed(2) } %
//                             </div>
//                             <TrendingDownIcon className=' border-solid border-2  text-3xl text-center transition-all hover:bg-[#f94141] hover:text-white rounded-full border-[#f94141]   font-semibold text-[#f94141]  '/>
//                         </div>
//                       )
//                       }
//                       {coin.price_change_percentage_24h >= 0 ? (
//           <p className="text-[#61c96f] transition-all color-[#fff] font-semibold text-xl my-7">
//             ${coin.current_price.toLocaleString()}
//           </p>
//                       ) : (
//           <p className="text-[#f94141] transition-all color-[#fff] font-semibold text-xl my-7">
//             ${coin.current_price.toLocaleString()}
//           </p>
//                       )}
//                       <p className=" my-2 text-lg font-bold ">
//           Total Volume : <span className='text-[#888] font-normal' >${coin.total_volume.toLocaleString()}</span>
//                       </p>
//                       <p className=" my-2 text-lg font-normal ">
//           Market Capital : <span className='text-[#888] font-normal'>${coin.market_cap.toLocaleString()}</span>
//                       </p>
              
//                     </div>
//           </div>
//           </motion.div>
//           </div>
//           </MotionConfig>
//       </div>
//   )
// }




















import React, { useState } from "react";
import "./style.css"
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { MotionConfig, motion } from "framer-motion";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";


function Grid({ coin, delay }) {
  // const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  // const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));

  return (
    <a href={`/coin/${coin.id}` } >
      <MotionConfig>
        <div className="transition-all hover:scale-[1.02]">
        <motion.div
        className={`grid ${coin.price_change_percentage_24h < 0 && "grid-red"}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <div className="img-flex">
          <img src={coin.image} className="coin-image" />
          <div className="icon-flex">
            <div className="info-flex">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
          </div>
        </div>
        {coin.price_change_percentage_24h >= 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="chip-icon">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="chip-icon red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        {coin.price_change_percentage_24h >= 0 ? (
          <p className="current-price">
            ${coin.current_price.toLocaleString()}
          </p>
        ) : (
          <p className="current-price-red">
            ${coin.current_price.toLocaleString()}
          </p>
        )}
        <p className="coin-name">
          Total Volume : {coin.total_volume.toLocaleString()}
        </p>
        <p className="coin-name">
          Market Capital : ${coin.market_cap.toLocaleString()}
        </p>
        {coin.price_change_percentage_24h.toFixed(2) > 0 ? (
                <div className=' transition-all cursor-pointer text-xl font-semibold rounded-3xl px-4 py-2 bg-[#111] border-solid border-2 border-[#40afa0] mt-8 hover:bg-[#40afa0] min-w-36 text-center ' style={{color: "var(--white)" }}>Get Premium</div>
              ): (
                <div className=' transition-all cursor-pointer text-xl font-semibold rounded-3xl px-4 py-2 bg-[#111] border-solid border-2 border-[#911212] mt-8 hover:bg-[#911212] min-w-36 text-center ' style={{color: "var(--white)" }}>Get Premium</div>
              )}
      </motion.div>
        </div>
      </MotionConfig>
    </a>
  );
}

export default Grid;

