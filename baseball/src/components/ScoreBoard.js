//User records activity of player at bat
//Series of buttons: strike, ball, hit and foul
//MVP includes strike, ball, hit and foul button
//Logic:
//User can increase the number of strikes, balls, hits, and fouls
//Reset count to 0 for hit input
//Reset count to 0 for 3 strikes
//Reset count to 0 for 4 balls
//Foul increments strikes +1

//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";



function ScoreBoard() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [homeCount, setHomeCount] = useState(0);
const [awayCount, setAwayCount] = useState(0);
const [homeFieldGoal, setHomeFieldGoal] = useState(0);
const [awayFieldGoal, setAwayFieldGoal] = useState(0);
const [inn, setInn] = useState(0)



  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeCount + homeFieldGoal}</div>
          </div>
  <div className="timer" >Inn
  <div className="home__score">{inn}</div>
  
  </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayCount + awayFieldGoal}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeCount(homeCount + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeFieldGoal(homeFieldGoal + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayCount(awayCount + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayFieldGoal(awayFieldGoal + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default ScoreBoard;
