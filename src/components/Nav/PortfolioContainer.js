import React, { useState } from 'react'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Work from './Pages/Work'
import Resume from './Pages/Resume'
import Nav from '../Nav'

function PortfolioContainer() {

    const [currentPage, handlePageChange] = useState('ABOUT');

    const renderPage = () => {
        switch (currentPage) {
            case "ABOUT":
                return <About />
            case "WORK":
                return <Work />
            case "RESUME":
                return <Resume />
            case "CONTACT":
                return <Contact />
        }
    }

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                {
                    renderPage()
                }
            </div>
        </div> 
    )
}

export default PortfolioContainer;