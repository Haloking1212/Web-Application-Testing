import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import BottomRow from './components/BottomRow';
import ScoreBoard from './components/ScoreBoard';



test("App renders without crashing", () => {
  const component = render(<App />);
})

test("bottomrow renders", () => {
  const bottomRow = render(<BottomRow />)
})

test("scoreboard renders", () => {
  const scoreboard = render(<ScoreBoard />)
})
