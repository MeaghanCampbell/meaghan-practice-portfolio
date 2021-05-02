import React from 'react'
import RockFitImage from '../../../../assets/rock-fit.jpg'
import DiscLiveImage from '../../../../assets/disc-live.jpg'


function Work() {

    const workItems = [
        {
            id: 1,
            name: "Disc Live",
            image: DiscLiveImage,
            description: "Front End application build with Server Side & Web API's",
            repo: "https://github.com/MeaghanCampbell/disc-live",
            app: "https://meaghancampbell.github.io/disc-live/"
          },
          {
            id: 2,
            name: "Rock Fit",
            image: RockFitImage,
            description: "Full Stack application built with Node, Express, Sequelize and MySQL",
            repo: "https://github.com/MeaghanCampbell/rock-fit",
            app: "https://rockfitapp.herokuapp.com/"
          }
    ]

    return (
        <section id="work" className="work">
            <h2>WORK</h2>
            { workItems.map((projects) => (
                <div 
                    className="card"
                    id={projects.id}
                    key={projects.id}
                    name={projects.name}
                    image={projects.image}
                    description={projects.description}
                    repo={projects.repo}
                    app={projects.app}
                >
                        <div className="img-container">
                            <img className="workImage" alt={projects.name} src={projects.image} />
                        </div>
                        <div className="content">
                            <ul>
                            <li className="projectTitle">
                                {projects.name}
                            </li>
                            <li>
                                {projects.description}
                            </li>
                            <li>
                                <a href={projects.app}>View The App</a>
                            </li>
                            <li>
                                <a href={projects.repo}>View The Code</a>
                            </li>
                            </ul>
                        </div>
                    </div>
            ))}
        </section>
    )
}

export default Work;