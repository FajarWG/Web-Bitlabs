import axios from "axios";

const main = () => {
  const baseUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  axios
    .get(baseUrl)
    .then((response) => {
      const coins = response.data;
      let content = "";
      coins.forEach((coin) => {
        content += `
            <div class="coin">
                    <img src="${coin.image}" alt="${coin.name}">
                    <div class="card-body">
                        <h4>${coin.name}</h4>
                        <p>Current Price: <span class="price">$${coin.current_price}</span></p>
                        <p>Market Cap: $${coin.market_cap}</p>
                        <p>Total Volume: $${coin.total_volume}</p>
                        <p>Price Change(24h): ${coin.price_change_percentage_24h}%</p>
                    </div>
            </div>
            `;
      });
      document.getElementById("coins").innerHTML = content;
    })
    .catch((error) => {
      console.log(error);
    });
};

/*
For detail page and recent update
<div class="d-flex justify-content-between align-items-center">
                            
                            <div class="btn-group">

                                <a href="detail.html?id=${coin.id}" class="btn btn-sm btn-outline-secondary">View</a>
                            </div>
                            <small class="text-muted
                            ">Last updated 3 mins ago</small>
                        </div>
*/

export default main;
