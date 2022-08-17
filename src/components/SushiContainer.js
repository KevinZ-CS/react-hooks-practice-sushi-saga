import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiList, plates }) {

  const [i, setI] = useState(0)
  

  const sushiDisplay = sushiList
  .slice(i, i + 4)
  .map((sushi) => <Sushi key={sushi.id} sushi={sushi} plates={plates} />)

  function moreSushi() {
    setI((i) => (i + 4) % sushiList.length);
  }

  return (
    <div className="belt">
      {sushiDisplay}
      <MoreButton moreSushi={moreSushi} />
    </div>
  );
}

export default SushiContainer;
