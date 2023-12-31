import { useEffect, useState } from "react";
import EachDigit from "./EachDigit";
import TimeComponentSeparator from "./TimeComponentSeparator";
import "./index.css";

export default function DigitalClock() {
  const [timeNow, setTimeNow] = useState(() => {
    let date = new Date();
    return {
      hours: date.getHours(),
      mins: date.getMinutes(),
      secs: date.getSeconds(),
    };
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      let date = new Date();
      setTimeNow({
        hours: date.getHours(),
        mins: date.getMinutes(),
        secs: date.getSeconds(),
      });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [timeNow]);
  return (
    <div className="App">
      <div className="flex-row clock">
        <div className="flex-row">
          {timeNow?.hours
            .toString()
            .padStart(2, '0')
            .split("")
            .map((value, index) => {
              return <EachDigit key={index} value={Number(value)} />;
            })}
        </div>
        <TimeComponentSeparator />
        <div className="flex-row">
          {timeNow?.mins
            .toString()
            .padStart(2, '0')
            .split("")
            .map((value, index) => {
              return <EachDigit key={index} value={Number(value)} />;
            })}
        </div>
        <TimeComponentSeparator />
        <div className="flex-row">
          {timeNow?.secs
            .toString()
            .padStart(2, '0')
            .split("")
            .map((value, index) => {
              return <EachDigit key={index} value={Number(value)} />;
            })}
        </div>
      </div>
    </div>
  );
}
