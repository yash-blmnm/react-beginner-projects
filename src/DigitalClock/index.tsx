import { useEffect, useState } from "react";
import EachDigit from "./EachDigit";
import TimeComponentSeparator from "./TimeComponentSeparator";
import "./index.css";
import TimeFormatToggle, { TimeFormat } from "./TimeFormatToggle";
import MeridiamSwitch, { MeridiamValues } from "./MeridiamSwitch";

type TimeObjectProps = {
  hours: number,
  mins: number,
  secs: number,
  meridiam?: MeridiamValues
}

export default function DigitalClock() {
  const [timeNow, setTimeNow] = useState<TimeObjectProps>(() => {
    let date = new Date();
    return {
      hours: date.getHours(),
      mins: date.getMinutes(),
      secs: date.getSeconds()
    };
  });

  const [timeFormat, setTimeFormat] = useState(TimeFormat.twentyFour)

  useEffect(() => {
    const timeout = setTimeout(() => {
      let date = new Date();
      let hours = date.getHours(); 
      setTimeNow({
        ...timeNow,
        hours: ((timeFormat === TimeFormat.twelve && hours > 12) ? hours - 12 : hours),
        mins: date.getMinutes(),
        secs: date.getSeconds(),
      });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [timeNow]);

  useEffect(() => {
    let date = new Date();
    if(timeFormat === TimeFormat.twentyFour) {
      setTimeNow({...timeNow, hours: date.getHours(), meridiam: undefined})
    }else {
      let hours = date.getHours();
      setTimeNow({...timeNow, hours: (hours > 12 ? (hours - 12) : hours), meridiam: (hours > 12 ? MeridiamValues.pm : MeridiamValues.am)})
    }
  }, [timeFormat])

  return (
    <div className="flex-col clock">
      <TimeFormatToggle  timeFormat={timeFormat} changeFormat={setTimeFormat} />
      <div className="flex-row ">
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
        <MeridiamSwitch meridiamValue={timeNow.meridiam}/>
      </div>
    </div>
  );
}
