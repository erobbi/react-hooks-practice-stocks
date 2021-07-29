import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  // should start full
  const [stockList, setStockList] = useState([])
  
  // should start empty
  const [portfolio, setPortfolio] = useState([])
  
  useEffect(()=> {
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(json => setStockList(json))
  },[])
  
  const [sellTrue, setSellTrue] = useState(false)
  // setPortfolio()

//filter on stocklist by id that was passed up
// then filter the id element from stockList, 

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer sellTrue={false} setPortfolio={setPortfolio} stockList={stockList} />
        </div>
        <div className="col-4">
          <PortfolioContainer sellTrue={true} portfolio={portfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;


// Render all the stocks onto the page. The styling of how a Stock should look like is already in the Stock component.

// Allow a user to buy a stock by clicking on it and when it is bought, it should be added to MyPortfolio.

// Allow a user to sell a stock in their Portfolio by clicking on the stock and it should be removed from their Portfolio.

// Allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.

// Allow a user to filter stocks based on the type of the stock.
