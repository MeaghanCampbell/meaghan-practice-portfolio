import React from 'react'

function Work() {
    return (
        <section id="work" className="work">
            <h2>WORK</h2>
                    <div className="work-items">
                            <article className="disc-live">
                                <a href="https://meaghancampbell.github.io/disc-live/" target="_blank" rel="noreferrer">
                                    <h3>Disc Live</h3>
                                    <p>Front-End Application using Server Side API's</p>
                                    <a href="https://github.com/MeaghanCampbell/disc-live">View CODE</a>
                                </a>
                            </article>
                            <article className="rock-fit">
                                <a href="https://rockfitapp.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <h3>Rock Fit</h3>
                                    <p>Full Stack Application using MySQL and Sequelize</p>
                                    <a href="https://github.com/MeaghanCampbell/rock-fit">View CODE</a>
                                </a>
                            </article>
                    </div>
        </section>
    )
}

export default Work;