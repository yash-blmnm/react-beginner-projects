import { useEffect, useRef, useState } from "react";
import "./index.css";
import TimeFormatToggle, { TimeFormat } from "./TimeFormatToggle";
import MeridiamSwitch, { MeridiamValues } from "./MeridiamSwitch";
import TimeComponent from "./TimeComponent";
import Header from "../components/Header";

export type TimeObjectProps = {
	hours: number,
	mins: number,
	secs: number,
}

export default function DigitalClock() {

  const [timeFormat, setTimeFormat] = useState(TimeFormat.twentyFour)

  const [meridiam, setMeridiam] = useState<MeridiamValues>()

  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const [timeNow, setTimeNow] = useState<TimeObjectProps>(() => {
    let hours = currentDate.getHours();
		hours = (timeFormat === TimeFormat.twelve && hours > 12) ? (hours - 12) : hours;
		return {
			hours,
			mins: currentDate.getMinutes(),
			secs: currentDate.getSeconds()
		};
  })

  const intervalRef = useRef<any>(null)

  useEffect(() => {
    console.log('mount')
    intervalRef.current = setInterval(() => {
      let date = new Date();
      if(date.toDateString() === currentDate.toDateString()) {
        setCurrentDate(date);
      }
      let hours = date.getHours();
      hours = (timeFormat === TimeFormat.twelve && hours > 12) ? (hours - 12) : hours
      setTimeNow({
        hours,
        mins: date.getMinutes(),
        secs: date.getSeconds()
      })
    }, 1000)
    return () => {
      console.log('unmount')
      clearInterval(intervalRef.current);
    }
  }, [])

  const updateTimeFormat = (format: TimeFormat) => {
    setTimeFormat(format);
    const date = new Date();
    let hours = date.getHours();
    hours = (timeFormat === TimeFormat.twelve && hours > 12) ? (hours - 12) : hours;
    hours !== timeNow.hours && setTimeNow({...timeNow, hours})
    setMeridiam((hours > 12 ? MeridiamValues.pm : MeridiamValues.am))
  }

  return (
    <>
    <Header projectName={"Digital Clock"} />
    <section className="main-section">
      <div className="flex-col clock">
        <TimeFormatToggle  timeFormat={timeFormat} changeFormat={updateTimeFormat} />
        <div className="flex-row ">
          <TimeComponent timeNow={timeNow} />
          <MeridiamSwitch hideComponent={timeFormat === TimeFormat.twentyFour} meridiamValue={meridiam}/>
        </div>
        <div className="flex-row">
          <h4>{currentDate.toDateString()}</h4>
        </div>
      </div>
    </section>
    </>
  );
}
