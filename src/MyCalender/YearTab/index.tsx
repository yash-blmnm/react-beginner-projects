import React, { useEffect, useState } from 'react';
import { DAYS_MAP, MONTH_MAP } from '../constant';
import './index.css';
import { getFullCalenderArray } from '../lib';
import EachMonth from '../EachMonth';

type indexProps = {
};

enum ChangeMonthProperty {
    today = 'Today',
    previous = 'Previous',
    nextMonth = 'Next'
}

const YearTab:React.FC<indexProps> = () => {

    const [currentYear, setCurrentYear] = useState(() => {
        let date = new Date();
        return date.getFullYear()
    })

    const [monthArray, setMonthArray] = useState<Date[][][]>();

    useEffect(() => {
        const monthArr = MONTH_MAP.map((m, index) => {
            return getFullCalenderArray(index+1, currentYear)
        })
        setMonthArray(monthArr);
    }, [currentYear])

    const updateCurrentYear = (month: ChangeMonthProperty) => {
        switch (month) {
            case ChangeMonthProperty.today: {
                let today = new Date();
                if(currentYear !== today.getFullYear()) {
                    setCurrentYear(today.getFullYear())
                }
                break;
            }
            case ChangeMonthProperty.previous: {
                setCurrentYear(currentYear-1);
                break;
            }
            case ChangeMonthProperty.nextMonth: {
                setCurrentYear(currentYear+1)
                break;
            }
        }
    }
    
    return <>
    <div className='year-table' >
        {MONTH_MAP.map((month, i) => <div key={i} className='month-item'>
            <div className='month-name'>{month.name}</div>
            {monthArray ?
                <EachMonth key={i} monthArr={monthArray[i]} currentDate={new Date()} currentMonth={i+1} isYearTab={true} />
            : ''}
        </div>)}
    </div>
</>
}
export default YearTab;