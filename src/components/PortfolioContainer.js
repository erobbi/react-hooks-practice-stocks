import React from "react";
import Stock from "./Stock";

function PortfolioContainer({sellTrue, portfolio}) {
  console.log(sellTrue)
  return (
    <div>
      <h2>My Portfolio</h2>
        {portfolio.map(stock => <Stock sellTrue={sellTrue} key={stock.id} stock={stock} />)}
    </div>
  );
}

export default PortfolioContainer;
