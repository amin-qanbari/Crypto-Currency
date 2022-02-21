import React, { useState, useEffect } from "react";
import Loader from "./Loader";

//API
import { getCoins } from "../services/api";

const Landing = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoins();
      setCoins(data);
    };

    fetchAPI();
  }, []);

  return (
    <>
      {coins.length ?
      coins.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))
    : <Loader/>
    }
    </>
  );
};

export default Landing;
