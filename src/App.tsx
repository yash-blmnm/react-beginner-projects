import React from 'react';
import './App.css'

const PROJECTS = [
  {
    name: 'Tic Tac Toe',
    link: '/tictactoe'
  },
  {
    name: 'Digital Clock',
    link: '/digitalclock'
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
        <ul className='flex-row projects-list'>
          {PROJECTS.map((project) =>
          <li className='projects-list-item'><a href={project.link}>{project.name}</a></li>
          )}
        </ul>
      </main>
    </>
  )
}

export default App
