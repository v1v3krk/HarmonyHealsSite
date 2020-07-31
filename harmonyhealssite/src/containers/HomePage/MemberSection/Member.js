import React, { Component } from 'react';

import "./Member.css";
import ScrollAnimation from 'react-animate-on-scroll';

import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";


class MemberSection extends Component {

    render() {

        return (
            <div className="MemberPointsHolder">
                <ScrollAnimation animateIn="fadeInUpMod" animateOnce duration={2}>
                    <div className="MemberTitle">
                        <p>Join the <span className="mattered">Community</span></p>
                    </div>
                    <div className="MemberSocialIconHolder">
                        <div className="MemberSocialIcons">
                            <div className="MemberSocialIcon">
                                <FaInstagram />
                            </div>
                            <div className="MemberSocialIcon">
                                <FaTwitter />
                            </div>
                            <div className="MemberSocialIcon">
                                <FaFacebook />
                            </div>
                            <div className="MemberSocialIcon">
                                <FaLinkedin />
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                <div className="MemberPoints">
                    <ScrollAnimation animateIn="fadeInUpMod" animateOnce duration={2} delay={250}>
                        <div className="MemberPoint">
                            <div className="MemberPointImage" id="memberimg"> </div>
                            <div className="MemberPointTitle mattered">
                                Join as a Member
                            </div>
                            <div className="MemberSubHeaderText">
                                <p>Join us to receive updates about our <span className="MemberEmphasized">ambitions, volunteer opportunities, and tips</span> to spread awareness for our cause.</p>
                            </div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScLs-saLFJm4KBVrZDjhqg52hcB9O7YHZIXF2Zf9E1R1x98eQ/viewform?usp=sf_link">
                                <div className="MemberButton">
                                    <p>Join Now!</p>
                                </div>
                            </a>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUpMod" animateOnce duration={2} delay={0}>

                        <div className="MemberPoint">
                            <div className="MemberPointImage" id="partnerimg"></div>
                            <div className="MemberPointTitle mattered">
                                Join as a Partner
                            </div>
                            <div className="MemberSubHeaderText">
                                <p>Collaborate with us to take our <span className="MemberEmphasized">initiatives</span> and societal impact to the <span className="MemberEmphasized">next level</span>, while reaching our goals faster.</p>
                            </div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6YEEHLrhIumIv8Dwa7ZTGtax8wIKDjD_c9TDovZWhPWssJw/viewform?usp=sf_link">
                                <div className="MemberButton">
                                    <p>Partner Up!</p>
                                </div>
                            </a>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUpMod" animateOnce duration={2} delay={500}>

                        <div className="MemberPoint">
                            <div className="MemberPointImage" id="sponsorimg"></div>
                            <div className="MemberPointTitle mattered">
                                Join as a Sponsor
                            </div>
                            <div className="MemberSubHeaderText">
                                <p>Sponsor us to <span className="MemberEmphasized">contribute</span> to those in need and be promoted through our <span className="MemberEmphasized">projects, website, merchandise, and social media</span>.</p>
                            </div>
                            <div className="MemberButton">
                                <p>Sponsor Us!</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

            </div>
        )

    }
}

export default MemberSection;