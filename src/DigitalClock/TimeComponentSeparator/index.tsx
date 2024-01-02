import { memo } from 'react';
import './index.css'

const TimeComponentSeparator = memo(() => {
    return (
      <div className="flex-col">
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );
  });
  
  export default TimeComponentSeparator;
  