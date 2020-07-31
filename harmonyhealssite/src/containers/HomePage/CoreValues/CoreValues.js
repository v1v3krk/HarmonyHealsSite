import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


import "./CoreValues.css";
import { FaUsers, FaStar, FaBrain, FaHeart, FaFistRaised, FaHandsHelping } from 'react-icons/fa';


class CoreSection extends Component {

    render() {

        const CoreCardList = [
            [
                "Community",
                <p>Engaging our local area through several <span className="CoreEmphasized">large scale and diverse</span> initiatives and projects.</p>,
                <FaUsers id="CoreEye" style={{ color: "#6342f5" }} />,
                "#6342f5",
                250
            ],
            [
                "Dedication",
                <p>Persisting to provide a <span className="CoreEmphasized">better life</span> for those who are full of talent but are <span className="CoreEmphasized">lacking</span> the gem of opportunity.</p>,
                <FaStar id="CoreSearch" style={{ color: "#f5cb42" }} />,
                "#f5cb42",
                0
            ],
            [
                "Integrity",
                <p>Upholding our <span className="CoreEmphasized">trust</span> and showing our donors the their <span className="CoreEmphasized">potential impact</span>.</p>,
                <FaBrain id="CoreDots" style={{ color: "#7be395" }} />,
                "#7be395",
                500
            ],
            [
                "Compassion",
                <p>Coming together to allow everyone to pursue better lives for <span className="CoreEmphasized">underprivileged</span> children through their <span className="CoreEmphasized">own passions</span>.</p>,
                <FaHeart id="CoreFilter" style={{ color: "#e3493b" }} />,
                "#e3493b",
                500
            ],
            [
                "Empowerment",
                <p>Empowering individuals in <span className="CoreEmphasized">lesser developed countries</span> and opening doors full of opportunity and potential.</p>,
                <FaFistRaised id="CorePaste" style={{ color: "#3b73e3" }} />,
                "#3b73e3",
                250
            ],
            [
                "Leadership",
                <p>Striving to take a stand, lead by example, and instill a <span className="CoreEmphasized">positive</span> change within our community.</p>,
                <FaHandsHelping id="CoreBolt" style={{ color: "#3bcde3" }} />,
                "#3bcde3",
                0
            ]
        ]

        const renderCoreCards = CoreCardList.map(subheader => {
            return (
                <ScrollAnimation animateIn="fadeInUpMod" animateOnce duration={2} delay={subheader[4]}>
                    <div className="CoreCard">
                        <div className="CoreCardIconHolder">
                            <div className="CoreIcon">
                                {subheader[2]}
                            </div>
                        </div>
                        <div className="CoreCardTitle" style={{ color: "rgba(0,0,0,0.9)" }}>
                            <p>{subheader[0]}</p>
                        </div>
                        <div className="CoreCardDesc">
                            {subheader[1]}
                        </div>
                    </div>
                </ScrollAnimation>
            )
        })

        return (
            <div className="CoreTextHolder">
                <ScrollAnimation animateIn="fadeInUpMod" animateOnce duration={2}>

                    <div className="CoreText">
                        <div className="CoreHeaderText">
                            <p>Be a Part of the <span className="mattepurple">Change</span>.</p>

                        </div>
                        <div className="CoreSubHeaderText">
                            <p>A group of <span className="CoreEmphasized">selfless, hardworking, and creative</span> individuals who strive to introduce
                            <span className="CoreEmphasized"> new and unique</span> ways
                            to educate, spread awareness, and fundraise.</p>
                        </div>

                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUpMod" animateOnce duration={2}>
                    <div className="Core">
                        <div className="CoreInfoBox">
                            <ScrollAnimation animateIn="fadeInUpMod" animateOnce duration={2} delay={250}>
                                <div className="CoreCardBoxTitle">
                                    <p>Core Values</p>
                                </div>
                            </ScrollAnimation>
                            <div className="CoreCardsHolder">
                                <div className="CoreCards">
                                    {renderCoreCards}
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        )

    }
}

export default CoreSection;