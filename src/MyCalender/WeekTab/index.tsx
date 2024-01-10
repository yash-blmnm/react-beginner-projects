import React from 'react';
import { MONTH_MAP } from '../constant';

type indexProps = {
    
};

const WeekTab:React.FC<indexProps> = () => {
    
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
    </>
}
export default WeekTab;