import React, { useState, useEffect } from "react";

//components
import Loader from "./Loader";
import Coin from "./Coin";

//css
import styles from "./Landing.module.css";

//API
import { getCoins } from "../services/api";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoins();
      setCoins(data);
    };

    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedCoins = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        className={styles.input}
        placeholder="Search..."
        value={search}
        onChange={searchHandler}
      />
      {coins.length ? (
        <div className={styles.coinContainer}>
          {searchedCoins.map((item) => (
            <Coin
              key={item.id}
              symbol={item.symbol}
              name={item.name}
              image={item.image}
              price={item.current_price}
              marketCap={item.market_cap}
              changePrice={item.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
