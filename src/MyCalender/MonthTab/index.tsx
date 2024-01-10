import React, { useEffect, useState } from 'react';
import { LEAP_YEAR_MONTH, MONTH_MAP } from '../constant';
import EachMonth from '../EachMonth';
import { getFullCalenderArray } from '../lib';

type indexProps = {
    
};

type calenderPramsType = {
    array?: Date[][]
}

enum ChangeMonthProperty {
    today = 'Today',
    previous = 'Previous',
    nextMonth = 'Next'
}

const MonthTab:React.FC<indexProps> = () => {
    const [currentDate, setCurrentDate] = useState<Date>(() => {
        const date = new Date()
        return date;
    });

    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth() + 1)

    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())

    const [calenderPrams, setCalenderPrams] = useState<calenderPramsType>({})

    useEffect(() => {
        let daysInCurrentMonth = MONTH_MAP[currentMonth - 1].daysPerMonth;
        if((currentYear % 4 === 0) && currentMonth === LEAP_YEAR_MONTH) {
            daysInCurrentMonth = MONTH_MAP[currentMonth - 1]?.leapYearDaysPerMonth || daysInCurrentMonth;
        }
        let date = currentDate.getDate() === daysInCurrentMonth ? 1 : (currentDate.getDate() + 1);
        let month = date === 1 ? (currentMonth + 1 > MONTH_MAP.length ? 1 : currentMonth + 1) : currentMonth;
        let year = (currentMonth === MONTH_MAP.length && month === 1) ? currentYear + 1 : currentYear;
        let nextDay = new Date(`${month}/${date}/${year}`)
        let milliSecsRemaining = nextDay.getTime() - currentDate.getTime();
        let timeout = setTimeout(() => {
            setCurrentDate(new Date());
            month !== currentMonth && setCurrentMonth(month);
            year !== currentYear && setCurrentMonth(year);
        }, milliSecsRemaining)

        return () => clearTimeout(timeout);
    }, [currentDate])

    

    useEffect(() => {
        setCalenderPrams({array: getFullCalenderArray(currentMonth, currentYear)})
    }, [currentDate, currentMonth, currentYear])

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

    return <>
    <div className='flex-row content-between items-center'>
        <h2>
            <strong>{MONTH_MAP[currentMonth - 1].name}</strong>
            <span className='font-weight-light'>{` ${currentYear}`}</span>
        </h2>
        <div className='flex-row'>
            <button className='shift-btn' onClick={() => updateCurrentMonth(ChangeMonthProperty.previous)}>{"<"}</button>
            <button className='shift-btn' onClick={() => updateCurrentMonth(ChangeMonthProperty.today)}>{"Today"}</button>
            <button className='shift-btn' onClick={() => updateCurrentMonth(ChangeMonthProperty.nextMonth)}>{">"}</button>
        </div>
    </div>
    <EachMonth monthArr={calenderPrams?.array} currentDate={currentDate} currentMonth={currentMonth}/>
    </>
}
export default MonthTab;