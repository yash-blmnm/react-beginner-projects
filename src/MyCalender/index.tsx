import React, { useEffect, useMemo, useState } from 'react';
import { DAYS_MAP, MONTH_MAP } from './constant';
import './index.css'

type indexProps = {
};

type calenderPramsType = {
    array?: Date[][]
}

const CALENDER_ROWS = 6;
const LEAP_YEAR_MONTH = 2;

enum ChangeMonthProperty {
    today = 'Today',
    previous = 'Previous',
    nextMonth = 'Next'
}

const MyCalender:React.FC<indexProps> = () => {
    const [currentDate, setCurrentDate] = useState<Date>(() => {
        const date = new Date()
        return date;
    });

    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth() + 1)

    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())

    const [calenderPrams, setCalenderPrams] = useState<calenderPramsType>({})

    useEffect(() => {
        let newDate = new Date(`${currentMonth}/1/${currentYear}`)
        let date = newDate.getDate();
        let day = newDate.getDay()
        let year = newDate.getFullYear();
        let month = currentMonth;
        let daysInCurrentMonth = MONTH_MAP[month - 1].daysPerMonth;
        if((year % 4 === 0) && currentMonth === LEAP_YEAR_MONTH) {
            daysInCurrentMonth = MONTH_MAP[month - 1]?.leapYearDaysPerMonth || daysInCurrentMonth;
        }
        let prevMonth = month > 1 ? month - 1 : (MONTH_MAP.length);
        let reachedTopRow = false;
        let arr:Date[] = []

        while (!reachedTopRow) {
            let value = new Date(`${month}/${date}/${year}`)
            arr.push(value)
            date = date - 1;
            if(date === 0) {
                date = MONTH_MAP[prevMonth - 1].daysPerMonth;
                if((year % 4 === 0) && prevMonth === LEAP_YEAR_MONTH) {
                    date = MONTH_MAP[prevMonth - 1]?.leapYearDaysPerMonth || date;
                }
                month = prevMonth;
                year = (prevMonth === MONTH_MAP.length) ? year - 1 : year;
            }
            day = day === 0 ? DAYS_MAP.length : day - 1;
            if(day === DAYS_MAP.length && currentMonth !== month){
                reachedTopRow = true;
            }
        }
        let numberOfCellsRemaining = (CALENDER_ROWS * DAYS_MAP.length) - arr.length;
        month = currentMonth;
        year = newDate.getFullYear();
        arr.reverse().push(...Array(numberOfCellsRemaining).fill(0).map((val, i) => {
            let newVal = i + (arr.length ? arr[arr.length - 1].getDate() : 0) + 1;
            if(newVal > daysInCurrentMonth) {
                let nextMonth = month === MONTH_MAP.length ? 1 : month + 1;
                let value = new Date(`${nextMonth}/${newVal - daysInCurrentMonth}/${month === MONTH_MAP.length ? year + 1 : year}`);
                return value;
            }
            return new Date(`${month}/${newVal}/${currentYear}`);
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
    }, [currentMonth, currentYear])

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

    const updateCurrentMonth = (month: ChangeMonthProperty) => {
        switch (month) {
            case ChangeMonthProperty.today: {
                let today = new Date();
                if(!(currentMonth - 1 === today.getMonth() && currentYear === today.getFullYear())) {
                    setCurrentMonth(today.getMonth()+1)
                    setCurrentYear(today.getFullYear())
                }
                break;
            }
            case ChangeMonthProperty.previous: {
                let prevMonth = currentMonth - 1;
                if(prevMonth < 1) {
                    prevMonth = MONTH_MAP.length;
                    setCurrentYear(currentYear-1)
                }
                setCurrentMonth(prevMonth);
                break;
            }
            case ChangeMonthProperty.nextMonth: {
                let nextMonth = currentMonth + 1;
                if(nextMonth > MONTH_MAP.length) {
                    nextMonth = 1;
                    setCurrentYear(currentYear+1)
                }
                setCurrentMonth(nextMonth);
                break;
            }
        }
    }

    return <div className='flex-col font-style-sans calender'>
        <div className='flex-row content-between items-center'>
            <h2>
                <strong>{`${MONTH_MAP[currentMonth - 1].name} ${currentYear}`}</strong>
            </h2>
            <div className='flex-row'>
                <button className='month-shift-btn' onClick={() => updateCurrentMonth(ChangeMonthProperty.previous)}>{"<"}</button>
                <button className='month-shift-btn' onClick={() => updateCurrentMonth(ChangeMonthProperty.today)}>{"Today"}</button>
                <button className='month-shift-btn' onClick={() => updateCurrentMonth(ChangeMonthProperty.nextMonth)}>{">"}</button>
            </div>
        </div>

        <table className='month-table'>
            <tr>
                {DAYS_MAP.map(day => (
                <th className=''>
                    <h4 className={`day-list-heading ${day === DAYS_MAP[0] ? 'sunday' : ''}`}>
                        {`${day.charAt(0).toUpperCase()}${day.substring(1,3)}`}
                    </h4>
                </th>
                ))}
            </tr>
            {calenderPrams?.array?.map((row:Date[], rindex:number) => (
                <tr key={rindex}>{row?.map((cell:Date, cindex:number) =>{
                    return(
                    <td key={cindex}>
                        <div className={
                            `flex-col height-full day-list-item ${cell.getMonth() === (currentMonth -1) ? 'active' : ''} ${cell.getDay() === 0 ? 'sunday' : ''}`
                        }>
                            <span className='self-end p-2'>
                                <span className={`date-component ${cell.toDateString() === currentDate.toDateString() ? 'active' : ''}`}>
                                    {cell.getDate()}
                                </span>
                            </span>
                            <span>{cell.toDateString()}</span>
                        </div>
                    </td>
                )})}</tr>
            ))}
        </table>
    </div>
}
export default MyCalender;