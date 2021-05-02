import React from 'react'
import PortfolioContainer from './components/Nav/PortfolioContainer'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div>
      <main className="main">
        <PortfolioContainer></PortfolioContainer>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
