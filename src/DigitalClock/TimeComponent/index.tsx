import React, { useEffect, useState } from "react";
import EachDigit from "../EachDigit";
import TimeComponentSeparator from "../TimeComponentSeparator";
import { TimeFormat } from "../TimeFormatToggle";
import { MeridiamValues } from "../MeridiamSwitch";

type indexProps = {
	changeMeridiam: (meridiam:MeridiamValues) => void
	timeFormat: TimeFormat
	currentDate?: string
	changeDate: (value:string) => void
};

type TimeObjectProps = {
	hours: number,
	mins: number,
	secs: number,
}

const TimeComponent:React.FC<indexProps> = ({ timeFormat, currentDate, changeMeridiam, changeDate }) => {
	const [timeNow, setTimeNow] = useState<TimeObjectProps>(() => {
		let date = new Date();
		// changeDate(`${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`)
		changeDate(date.toDateString())
		return {
			hours: date.getHours(),
			mins: date.getMinutes(),
			secs: date.getSeconds()
		};
	});

	useEffect(() => {
		const timeout = setTimeout(() => {
			let date = new Date();
			let hours = date.getHours(); 
			// let newCurrentDate = `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`
			let newCurrentDate = date.toDateString();
			setTimeNow({
				...timeNow,
				hours: ((timeFormat === TimeFormat.twelve && hours > 12) ? hours - 12 : hours),
				mins: date.getMinutes(),
				secs: date.getSeconds(),
			});
			if(currentDate !== newCurrentDate) {
				// changeDate(`${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`);
				changeDate(newCurrentDate)
			}
		}, 1000);
		return () => clearTimeout(timeout);
	}, [timeNow]);

	useEffect(() => {
		let date = new Date();
		if(timeFormat === TimeFormat.twentyFour) {
			setTimeNow({...timeNow, hours: date.getHours()})
		}else {
			let hours = date.getHours();
			setTimeNow({...timeNow, hours: (hours > 12 ? (hours - 12) : hours)})
			changeMeridiam((hours > 12 ? MeridiamValues.pm : MeridiamValues.am))
		}
	}, [timeFormat])

	return <>
		{Object.values(timeNow).map((timeComponent:number, index1:number) => {
			return <React.Fragment key={index1}>
				<div className="flex-row">
				{timeComponent
					.toString()
					.padStart(2, '0')
					.split("")
					.map((value:string, index2:number) => {
						return <EachDigit key={index2} value={Number(value)} />;
					})}
			</div>
			{(index1 + 1) < Object.values(timeNow).length ? <TimeComponentSeparator /> : ''}
			</React.Fragment>
		})}
	</>
}
export default TimeComponent;