import React from 'react';
import './index.css'

type indexProps = {
    activeTab: CalenderTabs
};

export enum CalenderTabs {
    day = 'Day',
    week = 'Week',
    month = 'Month',
    year = 'Year'
}

const TabComponent:React.FC<indexProps> = ({ activeTab }) => {
    
    return <div className='flex-row tab-component content-center'>
        {[CalenderTabs.day, CalenderTabs.week, CalenderTabs.month, CalenderTabs.year].map((tab,index) => (
            <div key={index} className={`tab-content ${tab === activeTab ? 'active' : ''}`}>{tab}</div>
        ))}
    </div>
}
export default TabComponent;