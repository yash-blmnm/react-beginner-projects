import React from 'react';
import './index.css'

type indexProps = {
    activeTab: CalenderTabs,
    setActiveTab: (tab: CalenderTabs) => void
};

export enum CalenderTabs {
    day = 'Day',
    week = 'Week',
    month = 'Month',
    year = 'Year'
}

const TabComponent:React.FC<indexProps> = ({ activeTab, setActiveTab }) => {
    
    return <div className='flex-row content-center'>
        <div className='flex-row tab-component'>{[CalenderTabs.day, CalenderTabs.week, CalenderTabs.month, CalenderTabs.year].map((tab,index) => (
            <div 
                key={index} 
                className={`tab-content ${tab === activeTab ? 'active' : ''}`} 
                onClick={() => tab !== activeTab && setActiveTab(tab)}>{tab}</div>
        ))}
        </div>
    </div>
}
export default TabComponent;