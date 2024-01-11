import React, { useContext, useMemo } from 'react';
import TabComponent, { CalenderTabs } from '../TabsComponent';
import MonthTab from '../MonthTab';
import YearTab from '../YearTab';
import { CalenderContext } from '../context';
import ShiftBtn from '../ShiftBtn';

type indexProps = {
    
};

const CalenderBody:React.FC<indexProps> = () => {

    const { calenderState: { activeTab }, dispatch} = useContext(CalenderContext)

    const tabResult = useMemo(() => {
        switch (activeTab) {
            case CalenderTabs.day: return <></>;
            break;
            case CalenderTabs.week: return <></>;
            break;
            case CalenderTabs.month: return <MonthTab />;
            break;
            case CalenderTabs.year: return <YearTab />;
            break;
        }
    }, [activeTab])
    
    return <>
        <TabComponent activeTab={activeTab} setActiveTab={(tab) => dispatch({type: "updateActionTab",value: tab})} />
        <ShiftBtn />
        {tabResult}
    </>
}
export default CalenderBody;