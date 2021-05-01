import React from 'react'

function Resume() {
    return (
        <section className="resume">
            <h2>RESUME</h2>
            <div>
                <h3>Front-end Proficiencies</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>responsive design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
            </div>
            <div>
                <h3>Back-end Proficiencies</h3>
                    <ul>
                        <li>API's</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                    </ul>
            </div>
        </section>
    )
}

export default Resume;