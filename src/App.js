/*
 * @Author: 陈巧龙
 * @Date: 2024-04-24 20:29:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-24 21:25:01
 * @FilePath: \react-app\src\App.js
 * @Description: 
 */
import React from 'react';
import './App.css';
import Navbar from './Navbar'
import HomePage from './Home';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
