import React, { useContext } from 'react';
import { ChangeProperty, MONTH_MAP } from '../constant';
import { CalenderContext } from '../context';
import { CalenderTabs } from '../TabsComponent';

type indexProps = {
    
};

const ShiftBtn:React.FC<indexProps> = () => {

    const { calenderState: { currentDate, currentMonth, currentYear, activeTab }, dispatch} = useContext(CalenderContext)

    const updateCurrentMonth = (month: ChangeProperty) => {
        switch (month) {
            case ChangeProperty.today: {
                let today = new Date();
                if(!(currentMonth - 1 === today.getMonth() && currentYear === today.getFullYear())) {
                    // setCurrentMonth(today.getMonth()+1)
                    // setCurrentYear(today.getFullYear())
                    dispatch({ type: 'updateCalenderState', value: { currentMonth: today.getMonth()+1, currentYear: today.getFullYear()}})
                }
                break;
            }
            case ChangeProperty.previous: {
                let prevMonth = currentMonth - 1;
                let value = {}
                if(prevMonth < 1) {
                    prevMonth = MONTH_MAP.length;
                    // setCurrentYear(currentYear-1)
                    value['currentYear'] = currentYear - 1;
                }
                // setCurrentMonth(prevMonth);
                value['currentMonth'] = prevMonth;
                dispatch({ type: 'updateCalenderState', value})
                break;
            }
            case ChangeProperty.nextMonth: {
                let nextMonth = currentMonth + 1;
                let value = {}
                if(nextMonth > MONTH_MAP.length) {
                    nextMonth = 1;
                    // setCurrentYear(currentYear+1)
                    value['currentYear'] = currentYear + 1;
                }
                // setCurrentMonth(nextMonth);
                value['currentMonth'] = nextMonth;
                dispatch({ type: 'updateCalenderState', value})
                break;
            }
        }
      }

    const updateCalenderState = (state: ChangeProperty) => {
        switch (activeTab) {
            case CalenderTabs.day: 
            break;
            case CalenderTabs.week:
            break;
            case CalenderTabs.month:
                updateCurrentMonth(state);
            break;
            case CalenderTabs.year:
            break;
            default:
            break;
        }
    }



    
    return <div className='flex-row content-between items-center'>
    <h2>
        {activeTab === CalenderTabs.day ? <strong>{currentDate.getDate()}</strong> : ''}
        {[CalenderTabs.day, CalenderTabs.week, CalenderTabs.month].includes(activeTab) ? <strong>{MONTH_MAP[currentMonth - 1].name}</strong> : ''}
        <span className='font-weight-light'>{` ${currentYear}`}</span>
    </h2>
    <div className='flex-row'>
        <button className='shift-btn' onClick={() => updateCalenderState(ChangeProperty.previous)}>{"<"}</button>
        <button className='shift-btn' onClick={() => updateCalenderState(ChangeProperty.today)}>{"Today"}</button>
        <button className='shift-btn' onClick={() => updateCalenderState(ChangeProperty.nextMonth)}>{">"}</button>
    </div>
</div>
}
export default ShiftBtn;