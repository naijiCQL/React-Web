/*
 * @Author: 陈巧龙
 * @Date: 2024-04-24 20:29:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-26 22:52:32
 * @FilePath: \react-app\src\App.js
 * @Description: 
 */
import './App.css';
import React from 'react';
import About from './views/About';
import Create from './views/Create';
import HomePage from './views/Home';
import { Routes, Route, Navigate } from 'react-router-dom'
import Details from './views/Details';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/blogs" />} />
      <Route path='/blogs' element={<HomePage />} />
      <Route path='/about' element={<About />} />
      <Route path='/create' element={<Create />} />
      <Route path="/blogs/:id" element={<Details />}></Route>
    </Routes>
  );
}

export default App;
