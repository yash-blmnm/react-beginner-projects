import React, { useMemo, useState } from 'react';
import './index.css'
import Header from '../components/Header';
import MonthTab from './MonthTab';
import TabComponent, { CalenderTabs } from './TabsComponent';
import YearTab from './YearTab';

const MyCalender:React.FC = () => {
    const [activeTab, setActiveTab] = useState(CalenderTabs.month);

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
    <Header projectName={"My Calender"} />
    <section className="main-section">
        <div className='flex-col font-style-sans calender'>
            <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
            {tabResult}
            {/* <MonthTab /> */}
        </div>
    </section>
    </>
}
export default MyCalender;