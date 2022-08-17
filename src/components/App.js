import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";



function App() {

const [sushiList, setSushiList] = useState([])
const [wallet, setWallet] = useState(100)

function plates(ate) {
  if (wallet >= ate.price) {
    const updatedSushis = sushiList.map((sushi) => {
      if (sushi.id === ate.id) return { ...sushi, eaten: true };
      return sushi;
    });
    setSushiList(updatedSushis);
    setWallet((wallet) => wallet - ate.price);
  } 
  else {
    alert("Need more 💸");
  }
}


const eatenSushis = sushiList.filter((sushi) => sushi.eaten);


useEffect(() => {
  fetch(API)
  .then((r) => r.json())
  .then((data) => {
    const updatedSushi = data.map((sushi) => {
      return {...sushi, eaten: false };
    })
    setSushiList(updatedSushi)
  })
}, [])


  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} plates={plates} />
      <Table wallet={wallet} plates={eatenSushis} />
    </div>
  );
}

export default App;
