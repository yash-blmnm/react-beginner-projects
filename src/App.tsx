import React from 'react';
import './App.css'

const PROJECTS = [
  {
    name: 'Tic Tac Toe',
    link: '/tictactoe',
    description: "A simple tic tac toe game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares"
  },
  {
    name: 'Digital Clock',
    link: '/digitalclock',
    description: 'A digital clock widget  that renders the current time in HH:MM:SS format using a 7-segment digital display.'
  },
  {
    name: 'My Calender',
    link: '/mycalender',
    description: 'A simple calendar play which allows you to add, delete and edit your events'
  }
]

function App() {
  return (
    <>
      <header>
        <div className='flex-row items-center content-center'>
          <h1>React Beginner Projects</h1>
        </div>
      </header>
      <main>
        <h3>Welcome to my React Beginner Projects!</h3>
        <ul className='flex-row gap-4 projects-list p-0'>
          {PROJECTS.map((project) =>
          <li className='projects-list-item'>
            <a href={project.link}>
              <h4>{project.name}</h4>
              <p className='text-justify'>{project.description}</p>
            </a>
          </li>
          )}
        </ul>
      </main>
    </>
  )
}

export default App
