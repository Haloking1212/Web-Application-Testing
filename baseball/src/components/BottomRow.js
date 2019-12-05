import React, { useState } from "react";


const BottomRow = () => {
  const [balls, setBalls] = useState(0);
  const [strike, setStrike] = useState(0);
  const [out, setOut] = useState(0);
  const [fouls, setFouls] = useState(0);

  const handleBalls = () => {
    if (balls > 2) {
      setBalls(0)
    } else {
      setBalls(balls + 1)
    }
  }

  const handleStrike = () => {
    if (strike > 1) {
      setOut(out + 1)
      setStrike(0)
    } else {
      setStrike(strike + 1)
    } 
    if (out > 1 && strike > 1) {
      setOut(0)
    } 
  }

  const handleFouls = () => {
    if (fouls > 99) {
      setFouls(0)
    } else {
      setFouls(fouls + 1)
    }
    if (strike <=1) {
      setStrike(strike + 1)
    }
  }

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Balls</h3>
  <div className="down__value">{balls}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">Strike</h3>
  <div className="toGo__value">{strike}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Out</h3>
  <div className="ballOn__value">{out}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Fouls</h3>
  <div className="quarter__value">{fouls}</div>
      </div>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={handleBalls}>Ball</button>
          <button className="homeButtons__fieldGoal" onClick={handleStrike}>Strike</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setOut()}>Out</button>
          <button className="awayButtons__fieldGoal" onClick={handleFouls}>Foul</button>
        </div>
      </section>
    </div>
  );
};

export default BottomRow;