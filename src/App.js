import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function App() {
  return (
    <div className="App">
     

 <Tabs />


     
    </div>
  );
}

export default App;
