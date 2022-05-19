// import logo from './logo.svg';
import React from 'react';
import './App.css';
import TabForm from "./components/TabForm";
import Header from "./components/Header";
import AddressTab from './components/AddressTab';


function App() {
  return (
    <div className="App">
      <Header />
      <TabForm /> 
    </div>
  );
}

export default App;
