import React from "react";

//css
import styles from "./Coin.module.css";

const Coin = ({ image, name, symbol, marketCap, price, changePrice }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={name} />
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.price}>$ {price.toLocaleString()}</span>
      <span
        className={
          changePrice > 0 ? styles.greenPriceChange : styles.redPriceChange
        }
      >
        {changePrice}
      </span>
      <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
    </div>
  );
};

export default Coin;
