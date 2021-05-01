import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <div>
        <About></About>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
