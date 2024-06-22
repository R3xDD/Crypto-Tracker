import React, { useState } from "react";
import "./style.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { convertNumber } from "../../../functions/convertNumber";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";


function List({ coin }) {
  // const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  // const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin?.id));
  const oldDate = new Date(coin?.last_updated)
  const newDate=oldDate.getDate()+ "/" + (oldDate.getMonth()+1) 
  return (
    <div className=" ">
      <a href={`/coin/${coin?.id}`} className="">
        <motion.tr
          className="list-row "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Tooltip title="Last Updated Today">
            <td className="text-[#888] text-sm md:block text-center  ml-2 hidden md:text-xl font-bold ">
              {newDate}
            </td>
          </Tooltip>
          <Tooltip title="coin Image">
            <td className="td-img md:m-0 ml-4  ">
              <img src={coin?.image} className="coin-image coin-image-td" />
            </td>
          </Tooltip>
          <Tooltip title="coin Info" placement="bottom-start">
            <td className="td-info">
              <div className="info-flex">
                <p className="coin-symbol td-p text-white ">{coin?.symbol}</p>
                <p className="coin-name td-p text-white ">{coin?.name}</p>
              </div>
            </td>
          </Tooltip>
          <Tooltip
            title="Coin Price Percentage In 24hrs"
            placement="bottom-start"
          >
            {coin?.price_change_percentage_24h >= 0 ? (
              <td>
                <div className="chip-flex">
                  <div className="price-chip">
                    {coin?.price_change_percentage_24h?.toFixed(2)}%
                  </div>
                  <div className="chip-icon td-chip-icon">
                    <TrendingUpRoundedIcon />
                  </div>
                </div>
              </td>
            ) : (
              <td>
                <div className="chip-flex">
                  <div className="price-chip  red">
                    {coin?.price_change_percentage_24h?.toFixed(2)}%
                  </div>
                  <div className="chip-icon td-chip-icon red">
                    <TrendingDownRoundedIcon />
                  </div>
                </div>
              </td>
            )}
          </Tooltip>
          <Tooltip title="Coin Price In USD" placement="bottom-end">
            {coin?.price_change_percentage_24h >= 0 ? (
              <td className="current-price text-lg  td-current-price">
                ${coin?.current_price?.toLocaleString()}
              </td>
            ) : (
              <td className="current-price-red td-current-price text-lg">
                ${coin?.current_price?.toLocaleString()}
              </td>
            )}
          </Tooltip>
          <Tooltip title="Coin Total Volume" placement="bottom-end">
            <td className="coin-name td-totalVolume">
              {coin?.total_volume?.toLocaleString()}
            </td>
          </Tooltip>
          <Tooltip title="Coin Market Capital" placement="bottom-end">
            <td className="coin-name td-marketCap">
              ${coin?.market_cap?.toLocaleString()}
            </td>
          </Tooltip>
          <td className="coin-name mobile mr-4">
            ${convertNumber(coin?.market_cap)}
          </td>
          {/* <td
          className={`watchlist-icon ${
            coin?.price_change_percentage_24h < 0 && "watchlist-icon-red"
          }`}
          onClick={(e) => {
            if (isCoinAdded) {
              // remove coin
              removeItemToWatchlist(e, coin?.id, setIsCoinAdded);
            } else {
              setIsCoinAdded(true);
              saveItemToWatchlist(e, coin?.id);
            }
          }}
        >
          {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
        </td> */}
        </motion.tr>
      </a>
    </div>
  );
}

export default List;








