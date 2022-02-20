import React, { useEffect, useState } from "react";

const App = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    let time = new Date().toLocaleString();
    setDate(time);
    let tim = setInterval(() => {
      let times = new Date().toLocaleString();
      setDate(times);
    }, 1000);
    return () => {
      clearInterval(tim);
    };
  }, []);

  return (
    <div id="main">
      <div className="date-time"> {date}</div>
    </div>
  );
};
export default App;
