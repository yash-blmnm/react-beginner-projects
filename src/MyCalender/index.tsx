import React from 'react';
import './index.css'
import Header from '../components/Header';
import MonthTab from './MonthTab';
import TabComponent, { CalenderTabs } from './TabsComponent';

const MyCalender:React.FC = () => {

    return <>
    <Header projectName={"My Calender"} />
    <section className="main-section">
        <div className='flex-col font-style-sans calender'>
            <TabComponent activeTab={CalenderTabs.month} />
            <MonthTab />
        </div>
    </section>
    </>
}
export default MyCalender;