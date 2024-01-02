import { useState } from "react";
import "./index.css";
import TimeFormatToggle, { TimeFormat } from "./TimeFormatToggle";
import MeridiamSwitch, { MeridiamValues } from "./MeridiamSwitch";
import TimeComponent from "./TimeComponent";

export default function DigitalClock() {

  const [timeFormat, setTimeFormat] = useState(TimeFormat.twentyFour)

  const [meridiam, setMeridiam] = useState<MeridiamValues>()

  const [currentDate, setCurrentDate] = useState<string>();

  return (
    <div className="flex-col clock">
      <TimeFormatToggle  timeFormat={timeFormat} changeFormat={setTimeFormat} />
      <div className="flex-row ">
        <TimeComponent timeFormat={timeFormat} currentDate={currentDate} changeMeridiam={setMeridiam} changeDate={setCurrentDate}/>
        <MeridiamSwitch hideComponent={timeFormat === TimeFormat.twentyFour} meridiamValue={meridiam}/>
      </div>
      <div className="flex-row">
        <h4>{currentDate}</h4>
      </div>
    </div>
  );
}
