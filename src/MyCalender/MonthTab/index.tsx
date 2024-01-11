import React, { useContext, useEffect, useState } from 'react';
// import { LEAP_YEAR_MONTH, MONTH_MAP } from '../constant';
import EachMonth from '../EachMonth';
import { getFullCalenderArray } from '../lib';
import { CalenderContext } from '../context';

type indexProps = {
    
};

type calenderPramsType = {
    array?: Date[][]
}

const MonthTab:React.FC<indexProps> = () => {
    // const [currentDate, setCurrentDate] = useState<Date>(() => {
    //     const date = new Date()
    //     return date;
    // });

    // const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth() + 1)

    // const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())

    const { calenderState: { currentDate, currentMonth, currentYear }} = useContext(CalenderContext)


    const [calenderPrams, setCalenderPrams] = useState<calenderPramsType>({})

    // useEffect(() => {
    //     let daysInCurrentMonth = MONTH_MAP[currentMonth - 1].daysPerMonth;
    //     if((currentYear % 4 === 0) && currentMonth === LEAP_YEAR_MONTH) {
    //         daysInCurrentMonth = MONTH_MAP[currentMonth - 1]?.leapYearDaysPerMonth || daysInCurrentMonth;
    //     }
    //     let date = currentDate.getDate() === daysInCurrentMonth ? 1 : (currentDate.getDate() + 1);
    //     let month = date === 1 ? (currentMonth + 1 > MONTH_MAP.length ? 1 : currentMonth + 1) : currentMonth;
    //     let year = (currentMonth === MONTH_MAP.length && month === 1) ? currentYear + 1 : currentYear;
    //     let nextDay = new Date(`${month}/${date}/${year}`)
    //     let milliSecsRemaining = nextDay.getTime() - currentDate.getTime();
    //     let timeout = setTimeout(() => {
    //         setCurrentDate(new Date());
    //         month !== currentMonth && setCurrentMonth(month);
    //         year !== currentYear && setCurrentMonth(year);
    //     }, milliSecsRemaining)

    //     return () => clearTimeout(timeout);
    // }, [currentDate])

    

    useEffect(() => {
        setCalenderPrams({array: getFullCalenderArray(currentMonth, currentYear)})
    }, [currentDate, currentMonth, currentYear])



    return <>
    
    <EachMonth monthArr={calenderPrams?.array} currentDate={currentDate} currentMonth={currentMonth}/>
    </>
}
export default MonthTab;