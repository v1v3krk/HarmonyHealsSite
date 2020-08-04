import React, { Component } from 'react';

import HomeJumbotron from "./HomeJumbotron/HomeJumbotron";
import AboutUs from './AboutUsSection/AboutUs';
import CoreValues from "./CoreValues/CoreValues";
import BlogSnip from "./BlogSection/BlogSnippet"

import "./HomePage.css";
import Purpose from './PurposeSection/Purpose';
import Donation from './DonationSection/Donation';

import ScrollAnimation from 'react-animate-on-scroll';
import MemberSection from './MemberSection/Member';
import Team from './TeamSection/Team';
import AchievementSection from './AchievementSection/Achievements';
import Contact from "./ContactSection/Contact";


class HomePage extends Component {

    render() {

        const animateDuration = 2;

        return (
            <div>
                <HomeJumbotron></HomeJumbotron>
                <div className="HomePage">
                    <AboutUs></AboutUs>
                    <CoreValues></CoreValues>
                    <MemberSection></MemberSection>
                    <Purpose></Purpose>
                    <AchievementSection></AchievementSection>
                    <Donation></Donation>
                    <Team></Team>
                    <BlogSnip></BlogSnip>
                    {/* <Contact></Contact> */}
                </div>
            </div>

        )
    }
}

export default HomePage;
