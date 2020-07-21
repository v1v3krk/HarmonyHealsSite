import React, { Component } from 'react';

import HomeJumbotron from "./HomeJumbotron/HomeJumbotron";
import AboutUs from './AboutUsSection/AboutUs';
import CoreValues from "./CoreValues/CoreValues";

import "./HomePage.css";
import Purpose from './PurposeSection/Purpose';
import Donation from './DonationSection/Donation';

import ScrollAnimation from 'react-animate-on-scroll';
import MemberSection from './MemberSection/Member';


class HomePage extends Component {

    render() {
        return (
            <div>
                <HomeJumbotron></HomeJumbotron>
                <div className="HomePage">
                    <ScrollAnimation animateIn="fadeInUp" animateOnce>
                        <AboutUs></AboutUs>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce>
                        <CoreValues></CoreValues>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce>
                        <MemberSection></MemberSection>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce>
                        <Purpose></Purpose>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce>
                        <Donation></Donation>
                    </ScrollAnimation>
                </div>
            </div>

        )
    }
}

export default HomePage;