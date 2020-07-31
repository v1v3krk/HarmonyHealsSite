import React, { Component } from 'react';
import TrackVisibility from 'react-on-screen';
import ScrollAnimation from 'react-animate-on-scroll';


import "./Achievements.css";

import CountUp from 'react-countup';
// import NumberFormat from 'react-number-format';



class AchievementSection extends Component {


    render() {

        const numberFormat = (value) =>
            new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(value);

        const MembersJoined = ({ isVisible }) => {
            return (
                <p>
                {isVisible ?
                <CountUp start={0} end={90} duration={2} >
                    
                </CountUp>:
                0}
                </p>
            )
        }

        const MoneyRaised = ({ isVisible }) => {
            return (
                <p>
                {isVisible ?
                <CountUp start={0} end={1180} duration={2} decimal="," formattingFn={numberFormat} suffix={"$1180.00"}>
                    
                </CountUp>:
                "$0.00"}
                </p>
            )
        }

        const ROI = ({ isVisible }) => {
            return (
                <p>
                {isVisible ?
                <CountUp start={0} end={51920} duration={3} formattingFn={numberFormat}>
                    
                </CountUp>:
                "$0.00"}
                </p>
            )
        }

        const LivesSaved = ({ isVisible }) => {
            return (
                <p>
                {isVisible ?
                <CountUp start={0} end={6210} duration={2} >
                    
                </CountUp>:
                0}
                +
                </p>
            )
        }

        

        return (
            <ScrollAnimation animateIn="fadeInUpMod" animateOnce>
            <div className="AchievementHolder">
                <div className="Achievement">
                    <div className="AchievementInfoBox">
                        <div className="AchievementCards">
                            <div className="AchievementCategory">
                                <div className="AchievementCategoryDesc">
                                    <TrackVisibility>
                                        <MembersJoined />
                                    </TrackVisibility>
                                </div>
                                <div className="AchievementCategoryTitle">
                                    <p>Members.</p>
                                </div>

                            </div>
                            <div className="AchievementCategory">
                                <div className="AchievementCategoryDesc">
                                    <TrackVisibility>
                                        <MoneyRaised />
                                    </TrackVisibility>
                                </div>
                                <div className="AchievementCategoryTitle">
                                    <p>Donated.</p>
                                </div>

                            </div>
                            <div className="AchievementCategory">
                                <div className="AchievementCategoryDesc">
                                    <TrackVisibility>
                                        <ROI />
                                    </TrackVisibility>
                                </div>
                                <div className="AchievementCategoryTitle">
                                    <p>ROI.</p>
                                </div>
                            </div>
                            <div className="AchievementCategory">
                                <div className="AchievementCategoryDesc">
                                    <TrackVisibility>
                                        <LivesSaved />
                                    </TrackVisibility>
                                </div>
                                <div className="AchievementCategoryTitle">
                                    <p>Lives Helped.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </ScrollAnimation>
        )

    }
}

export default AchievementSection;