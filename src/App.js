import React, { useState, useEffect } from "react";
import moment from "moment";
import "./styles.css";

const D_DAY = 1587315600000 + 60 * 24 * 60 * 60 * 1000;
const splitDuration = () => {
  const duration = moment();

  return [
    (-duration.diff(D_DAY, "days")).toString().padStart(2, "0"),
    (-duration.diff(D_DAY, "hours") % 24).toString().padStart(2, "0"),
    (-duration.diff(D_DAY, "minutes") % 60).toString().padStart(2, "0"),
    (-duration.diff(D_DAY, "seconds") % 60).toString().padStart(2, "0"),
    (1 - -duration.diff(D_DAY, "seconds") / (60 * 24 * 60 * 60)) * 100
  ];
};

const App = () => {
  const [countdown, setCountdown] = useState(splitDuration());
  const [days, hours, minutes, seconds, progress] = countdown;

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(splitDuration());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <fieldset className="App">
      <legend>In @HHP we trust...!</legend>
      <h1>
        <span>{days}</span>
        <span>{":"}</span>
        <span>{hours}</span>
        <span>{":"}</span>
        <span>{minutes}</span>
        <span>{":"}</span>
        <span>{seconds}</span>
      </h1>
      <div>{`${progress.toFixed(4)}%`}</div>
      <div>{"--"}</div>
      <div>{"🍀 May Fortune favors you...! 🍀"}</div>
    </fieldset>
  );
};

export default App;
