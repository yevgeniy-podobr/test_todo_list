import React from 'react';
import './app.scss';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import * as route from './services/routes'
import { AllToDos, CompletedToDos, Input } from './components';

function App() {
  const navigation = useNavigate()
  return (
    <div className="app">
      <header className='app__header container'>
        <Input />
        <div className="app__header-tabs">
          <button className='app__header-tabs_tab button' onClick={() => navigation(`${route.all}`)}>All</button>
          <button className='app__header-tabs_tab button' onClick={() => navigation(`${route.completed}`)}>Completed</button>
        </div>
      </header>
      <main className="app__main container">
        <Routes>
          <Route path={route.all} element={<AllToDos/>}/>
          <Route path={route.completed} element={<CompletedToDos />}/>
          <Route path="*" element={<Navigate replace to={route.all} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
