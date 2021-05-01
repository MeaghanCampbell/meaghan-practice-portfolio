import React from 'react'
import AboutImage from '../../../../assets/about-image.jpg'

function About() {
    return (
        <section id="about" className="about">
        <h2>ABOUT</h2>
        <div className="about-content">
            <img src={AboutImage} alt="Meaghan Campbell Headshot" />
            <div className="about-paragraph">
                <p>
                    Hey! My name is Meaghan. I am a full stack web developer and graphic designer who specializes in branding (or as I like to 
                    say “making stuff look cool”). I have always pursued different creative outlets, starting with music 
                    at young age. After graduating with a degree in Music Business and Marketing from the University of 
                    Miami, I packed up my creativity and took it to Nashville, Tennessee, where I would eventually land as the 
                    Director of Branding for Climb, premiere rock climbing gyms in the Southeast. 
                    When I am not designing you will find me feeding my love for the outdoors. 
                    Whether I’m snowboarding, rock climbing, backpacking, or training, I am definitely striving to 
                    spend 1/4 of my life sleeping in a tent. If you’re looking for a stand-out website 
                    that tells a story with a slight hint of adventure, you’ve come to the right place. Let me help 
                    you make your stuff look cool.
                </p>
            </div>    
        </div>
        </section>
    )
}

export default About;