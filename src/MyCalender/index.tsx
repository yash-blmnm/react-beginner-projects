import React from 'react';
import './index.css'
import Header from '../components/Header';
import { CalenderContextProvider } from './context';
import CalenderBody from './CalenderBody';

const MyCalender:React.FC = () => {
    return <>
        <Header projectName={"My Calender"} />
        <section className="main-section">
            <div className='flex-col font-style-sans calender'>
                <CalenderContextProvider>
                    <CalenderBody />
                </CalenderContextProvider>
            </div>
        </section>
    </>
}
export default MyCalender;