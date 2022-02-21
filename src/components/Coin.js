import React from 'react'

const Coin = ({image , name , symbol , marketCap , price , changePrice}) => {
  return (
    <div>
        <img src={image} alt={name} />
        <span>{name}</span>
        <span>{symbol.toUpperCase()}</span>
        <span>{price.toLocaleString()}</span>
        <span>{changePrice}</span>
        <span>{marketCap.toLocaleString()}</span>
    </div>
  )
}

export default Coin