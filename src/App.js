import React from 'react'
import About from './components/Nav/Pages/About'
import Contact from './components/Nav/Pages/Contact'
import Work from './components/Nav/Pages/Work'
import Resume from './components/Nav/Pages/Resume'
import Footer from './components/Footer'
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
