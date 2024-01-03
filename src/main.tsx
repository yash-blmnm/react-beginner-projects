import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TicTacToe from './TicTacToe';
import DigitalClock from './DigitalClock';
import App from './App';
import './index.css'
import MyCalender from './MyCalender';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tictactoe",
    element: <TicTacToe />,
  },
  {
    path: "/digitalclock",
    element: <DigitalClock />,
  },
  {
    path: '/mycalender',
    element: <MyCalender />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
