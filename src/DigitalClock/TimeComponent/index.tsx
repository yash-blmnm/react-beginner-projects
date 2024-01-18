import React from "react";
import EachDigit from "../EachDigit";
import TimeComponentSeparator from "../TimeComponentSeparator";
import { TimeObjectProps } from "..";

type indexProps = {
	timeNow: TimeObjectProps
};

const TimeComponent:React.FC<indexProps> = ({ timeNow }) => {
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