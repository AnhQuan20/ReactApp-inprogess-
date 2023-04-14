import React,{Component} from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Create from './Router/create';
import Edit from './Router/edit';
import Index from "./Router/index";



function App() {
  return (
    <div>
    <nav className='topnav'>
    <a href="/">Home</a>
    <a href="/Create">Create</a>
    <a href="/Index">Index</a>
    </nav>
    <h1></h1>


    <Routes>
    <Route exact path='/Create' element={<Create/>} />
    <Route path='/edit/:id' element={<Edit/>} />
    <Route path='/Index' element={<Index/>} />
    </Routes>
  </div>
  )
}

export default App;
