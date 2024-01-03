import React, { useEffect, useMemo, useState } from 'react';
import { DAYS_MAP, MONTH_MAP } from './constant';
import './index.css'

type indexProps = {
};

type calenderPramsType = {
    array?: Date[][]
}

const CALENDER_ROWS = 6;

const MyCalender:React.FC<indexProps> = () => {
    const [currentDate, setCurrentDate] = useState<Date>(() => {
        const date = new Date()
        return date;
    });

    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth())

    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())

    const [calenderPrams, setCalenderPrams] = useState<calenderPramsType>({})

    useEffect(() => {
        let date = currentDate.getDate();
        let day = currentDate.getDay();
        let year = currentYear;
        let month = currentMonth;
        let daysInCurrentMonth = MONTH_MAP[currentMonth].daysPerMonth;
        let prevMonth = currentMonth > 0 ? currentMonth - 1 : (MONTH_MAP.length - 1);
        let reachedTopRow = false;
        let arr:Date[] = []

        while (!reachedTopRow) {
            let value = new Date(`${month + 1}/${date}/${year}`)
            arr.push(value)
            date = date - 1;
            if(date === 0) {
                date = MONTH_MAP[prevMonth].daysPerMonth;
                month = prevMonth;
                year = (month === 0) ? year : year - 1;
            }
            day = day === 0 ? DAYS_MAP.length : day - 1;
            if(day === DAYS_MAP.length && currentMonth !== month){
                reachedTopRow = true;
            }
        }
        let numberOfCellsRemaining = (CALENDER_ROWS * DAYS_MAP.length) - arr.length;
        month = currentMonth;
        arr.reverse().push(...Array(numberOfCellsRemaining).fill(0).map((val, i) => {
            let newVal = i + (arr.length ? arr[arr.length - 1].getDate() : 0) + 1;
            if(newVal > daysInCurrentMonth) {
                let value = new Date(`${month + 2}/${newVal - daysInCurrentMonth}/${month + 1 === MONTH_MAP.length ? year : year + 1}`);
                return value;
            }
            return new Date(`${month + 1}/${newVal}/${currentYear}`);
        }))
        let fullCalenderArray = arr.reduce((acc:Date[][], val:Date) => {
            if(!acc?.length || acc[acc?.length -1]?.length === DAYS_MAP.length) {
                acc.push([val])
            }else {
                acc[acc?.length -1]?.push(val)
            }
            return acc;
        },[])
        setCalenderPrams({array: fullCalenderArray})
    }, [])

    // let date = useMemo(() => currentDate.getDate(), [currentDate]);

    // let day = useMemo(() => currentDate.getDay(), [currentDate]);

    // let month = useMemo(() => currentDate.getMonth(), [currentDate]);

    // let year = useMemo(() => currentDate.getFullYear(), [currentDate]);

    // let curCalenderArr = useMemo(() => {
    //     let arr = [];
    //     let curDate = date;
    //     let curMonth = month
    //     let prevDaysOfWeek = Array(day).fill(0).map(val => {
    //         curDate = curDate - 1;
    //         if(curDate > 0) {
    //             return curDate;
    //         }else {
    //             let prevMonth = curMonth > 0 ? curMonth - 1 : 11;
    //             curDate = MONTH_MAP[prevMonth].daysPerMonth;
    //             return curDate;
    //         }
    //     }).reverse()
    //     arr.push([...prevDaysOfWeek, ...Array(7 - day).fill(0).map((v,i) => i + date)])
    //     console.log(arr)
    //     return arr;
    // }, [currentDate])


    return <div className='flex-col font-style-sans'>
        <div className='flex-row content-between items-center'>
            <h2>
                <strong>{`${MONTH_MAP[currentMonth].name} ${currentYear}`}</strong>
            </h2>
            <div className='flex-row'>
                <button className='month-shift-btn' onClick={() => setCurrentMonth((currentMonth === 0 ? MONTH_MAP.length - 1 : currentMonth - 1))}>{"<"}</button>
                <button className='month-shift-btn' onClick={() => (currentMonth !== new Date().getMonth()) && setCurrentMonth(new Date().getMonth())}>{"Today"}</button>
                <button className='month-shift-btn' onClick={() => setCurrentMonth((currentMonth === MONTH_MAP.length - 1 ?  0 : currentMonth + 1))}>{">"}</button>
            </div>
        </div>

        <table className='month-table'>
            <tr>
                {DAYS_MAP.map(day => (
                <th className=''>
                    <h4 className='day-list-heading'>
                        {`${day.charAt(0).toUpperCase()}${day.substring(1,3)}`}
                    </h4>
                </th>
                ))}
            </tr>
            {calenderPrams?.array?.map((row:Date[], rindex:number) => (
                <tr key={rindex}>{row?.map((cell:Date, cindex:number) =>(
                    <td key={cindex}>
                        <div className='flex-col height-full'>
                            <span className='day-list-item'>
                                <span className={`date-component ${cell.toDateString() === currentDate.toDateString() ? 'active' : ''}`}>
                                    {cell.getDate()}
                                </span>
                                
                            </span>
                            <span>{cell.toDateString()}</span>
                        </div>
                    </td>
                ))}</tr>
            ))}
        </table>
    </div>
}
export default MyCalender;