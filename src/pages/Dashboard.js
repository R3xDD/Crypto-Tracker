import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import Tabs from "../components/Dashboard/tabs/Tabs";
import axios from "axios";
import Search from "../components/Dashboard/Search/Search";
import NotFound from "../components/Dashboard/NotFound";
import PaginationOutlined from "../components/Dashboard/Pagination/Pagination";
import Loader from "../components/Dashboard/Loader/Loader";
import TopButton from "../components/Dashboard/TopButton/TopButton";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);

  const fetchCoins = () => {
    setLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false&price_change_percentage=1h"
      )
      .then((response) => {
        console.log("response", response);
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(1, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const [search, setSearch] = useState("");
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  var filterCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );
  

  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const handlePageChange = (event, value) => {
    setPage(value)
    var initialCount = (value - 1) * 10;
    setPaginatedCoins(coins.slice(initialCount , initialCount+10))
  }

  const [loading, setLoading] = useState(true);

  return (
  <div>
    <Header/>
    <TopButton />
     <div className="px-10 mx-auto">
      {loading ? (
        <Loader />
      ) : (
          <>
            <Search search={search} handleChange={(e) => onSearchChange(e)} />
            {filterCoins?.length > 0 ? <Tabs coins={search ? filterCoins : paginatedCoins} setSearch={setSearch} /> : <NotFound />} 
            {!search && (
              <PaginationOutlined page={page}  handlePageChange={handlePageChange}/> 
            )
            }
          </>
      )
    }
    </div>
  </div>
    
  );
};

export default Dashboard;
