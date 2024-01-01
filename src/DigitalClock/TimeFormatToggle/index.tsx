import React from 'react';
import './index.css'

type indexProps = {
    timeFormat: string
    changeFormat: (format:TimeFormat) => void
};

export enum TimeFormat {
    twentyFour = '24hr',
    twelve = '12hr'
}

const TimeFormatToggle:React.FC<indexProps> = ({ timeFormat, changeFormat }) => {
    
    return <div className='flex-row time-format-toggle'>
        {[TimeFormat.twentyFour, TimeFormat.twelve]
        .map(format => 
            <button className={`time-format ${format === timeFormat ? 'active' : ''}`} onClick={() => changeFormat(format)}>{format}</button>
        )}
    </div>
}
export default TimeFormatToggle;