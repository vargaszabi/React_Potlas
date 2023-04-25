import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Fooldal from './Pages/Fooldal';
//import Hibajelentes from './Pages/Hibajelentes';
import Karakterek from './Pages/Karakterek';
import Footer from './Components/Footer';
import Header from './Components/Header';

class App extends Component{
  render(): React.ReactNode {
    return <div>
      <Header/>
      <Routes>
        <Route path='/' element = {<Fooldal/>}/>
        
        <Route path='karakterek' element={<Karakterek/>}/>
      </Routes>
      <Footer/>
    </div>
  }
}

export default App;
