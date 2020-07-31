import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import './Team.css'

const Team = (props) => {

    return (
        <div>
            <ScrollAnimation animateIn="fadeInUpMod" animateOnce duration={2}>
                <div className="CoreTextHolder">
                    <div className="CoreText">
                        <div className="CoreHeaderText">
                            <p>A <span className="mattegreen">Diverse</span> Team.</p>

                        </div>
                        <div className="CoreSubHeaderText">
                            <p>A <span className="CoreEmphasized"> multitalented </span>
                                group of individuals with highly reputable skills in <span className="CoreEmphasized">business, medicine, computer
                                science, and robotics</span> ready to change the world.</p>
                        </div>
                        <div className="DonationNonPic">
                        <a href="https://charity.gofundme.com/o/en/campaign/harmonyhealstx">
                            <div className="TeamButton">
                                <p>Learn More</p>
                            </div>
                        </a>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <div className="TeamPictures">

            </div>
        </div>
    );
}

export default Team;