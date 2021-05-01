import React from 'react'

function Nav(props) {
    const tabs = ['ABOUT', 'WORK', 'RESUME', 'CONTACT']
    return (
        <header>
            <h1>
                <a href="/">MEAGHAN CAMPBELL</a>
            </h1>
            <nav>
                <ul>
                    {tabs.map(tab => (
                        <li key={tab}>
                            <a href={`# ${tab.toLowerCase()}`}
                            onClick={() => props.handlePageChange(tab)}
                            >
                            {tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;