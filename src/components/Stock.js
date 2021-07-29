import React, {useEffect, useState} from "react";


function Stock({sellTrue, setPortfolio, stock, stock: {ticker, name, type, price, id}}) {

 function handleBuy(stock) {
    console.log(stock)
    setPortfolio(portfolioOld => {
      const portfolioNew = [...portfolioOld , stock]
      return portfolioNew
    })
  }

  function handleSell(stock) {
    console.log(stock)
    // setPortfolio(portfolio.filter(())
    // })  need to add delete function here
  }

  console.log(sellTrue)


  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
          {sellTrue ? (
          <button id={name} onClick={e => handleSell(stock)}>Sell</button>
          ) : (
          <button id={name} onClick={e => handleBuy(stock)}>Buy</button>
          )}
          <br/>
          <br/>
        </div>
      </div>
    </div>
  );
}
export default Stock;
