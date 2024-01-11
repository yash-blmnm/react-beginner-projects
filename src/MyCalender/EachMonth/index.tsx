import React from 'react';
import './index.css'
import { DAYS_MAP } from '../constant';

type indexProps = {
    monthArr?: Date[][],
    currentMonth: number,
    currentDate: Date
    isYearTab?: boolean
};

const EachMonth:React.FC<indexProps> = ({monthArr, currentDate, currentMonth, isYearTab}) => {
    return <>
    <table className='month-table'>
        <tr>
            {DAYS_MAP.map((day, index) => (
            <th key={index} className=''>
                {isYearTab ? 
                    <div className='day-item'>{day.charAt(0).toUpperCase()}</div> 
                    : 
                    <h4 className={`day-list-heading ${day === DAYS_MAP[0] ? 'sunday' : ''}`}>
                        {`${day.charAt(0).toUpperCase()}${day.substring(1,3)}`}
                    </h4>
                }
            </th>
            ))}
        </tr>
    {monthArr?.map((row:Date[], rindex:number) => (
        <tr key={rindex}>{row?.map((cell:Date, cindex:number) =>{
            return(
            <td key={cindex}>
                {isYearTab ? 
                    <div className={
                        `day-list-item ${cell.getMonth() === (currentMonth -1) ? 'active' : ''} ${cell.getDay() === 0 ? 'sunday' : ''}`
                    }>
                        <span className={`date-component ${cell.toDateString() === currentDate.toDateString() ? 'active' : ''}`}>
                            {cell.getDate()}
                        </span>
                    </div> 
                    : 
                    <div className={
                        `flex-col height-full day-list-item ${cell.getMonth() === (currentMonth -1) ? 'active' : ''} ${cell.getDay() === 0 ? 'sunday' : ''}`
                    }>
                        <span className='self-end p-2'>
                            <span className={`date-component ${cell.toDateString() === currentDate.toDateString() ? 'active' : ''}`}>
                                {cell.getDate()}
                            </span>
                        </span>
                        {/* <span>{cell.toDateString()}</span> */}
                    </div>
                }
            </td>
        )})}</tr>
    ))}</table></>
}
export default EachMonth;