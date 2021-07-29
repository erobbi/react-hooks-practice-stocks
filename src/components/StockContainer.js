import React from "react";
import Stock from "./Stock";

function StockContainer({stockList, setPortfolio, sellTrue}) {
  return (
    <div>
      <h2>Stocks</h2>
        <ul>
          {stockList.map(stock => <Stock sellTrue={sellTrue} setPortfolio={setPortfolio} key={stock.id} stock={stock} />)}
        </ul>
    </div>
  );
}

export default StockContainer;
