import React, { Component } from 'react';

import './AboutUs.css'
import ScrollAnimation from 'react-animate-on-scroll';

import Typist from 'react-typist';
import "../../../ui/Colors.css";



class AboutUs extends Component {

    state = {
        colorIndex: -1,
        colorList: [
            "matteblue",
            "mattepurple",
            "matteyellow",
            "mattegreen",
            "mattered",
        ],
        currentColor: "matteblue"
    }

    changeState = () => {
        let old = this.state.colorIndex;
        const colorList = this.state.colorList;
        let current = old + 1;
        if (old >= 9) {
            current = 0;
        }
        if (current % 2 === 0) {
            this.setState({
                currentColor: colorList[current / 2]
            })
        }
        this.setState({
            colorIndex: current
        })

    }

    render() {

        const animateDuration = 2;

        const backspaceList = [
            ["Children.", "#00aeff"],
            ["Refugees.", "#6342f5"],
            ["Education.", "#f5cb42"],
            ["Social Policy.", "#7be395"],
            ["Healthcare.", "#e3493b"],

        ]

        const finalBackspaceList = [

        ]

        for (let i = 0; i < 100; i++) {
            for (const topic in backspaceList) {
                finalBackspaceList.push(backspaceList[topic]);
            }
        }

        const renderTypist = finalBackspaceList.map((title, igKey) => {
            if (igKey === 0) {
                return (
                    <span><span className="black">{"Working for "}</span><br className="AboutBreakline" />
                        <span style={{ color: title[1] }}>{title[0]}</span>
                        <Typist.Backspace style={{ color: title[1] }} count={title[0].length} delay={1000} />
                    </span>
                );
            }
            else {
                return (
                    <span>
                        <span style={{ color: title[1] }}>{title[0]}</span>
                        <Typist.Backspace style={{ color: title[1] }} count={title[0].length} delay={1000} />
                    </span>
                );
            }
        })

        return (
            <div>
                <ScrollAnimation animateIn="fadeInUpMod" animateOnce duration={animateDuration}>
                    <div className="AboutUsTextHolder">
                        <div className="AboutUsText">
                            <div className="AboutUsHeaderText">
                                <p><Typist cursor={{
                                    hideWhenDone: true,
                                }} stdTypingDelay={2} onLineTyped={this.changeState} className={this.state.currentColor}>
                                    {renderTypist}
                                    <span>Children Worldwide.</span>
                                </Typist>
                                </p>

                            </div>
                            <div className="AboutUsSubHeaderText">
                                <p>A
                                <span className="AboutUsEmphasized"> Community-Based Organization </span>
                                aimed towards providing improved quality of life globally in support of
                                <span className="AboutUsEmphasized"> UNICEF.</span></p>
                            </div>

                        </div>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScLs-saLFJm4KBVrZDjhqg52hcB9O7YHZIXF2Zf9E1R1x98eQ/viewform?usp=sf_link">
                            <div className="AboutUsJoin">
                                <p>Join Now</p>
                            </div>
                        </a>
                    </div>
                </ScrollAnimation>
                <div className="AboutUsPointsHolder">
                    <div className="AboutUsPoints">
                        <ScrollAnimation animateIn="fadeInUpMod" animateOnce duration={animateDuration} delay={250}>
                            <div className="AboutUsPoint">
                                <div className="AboutUsPointImage" id="educateimg"> </div>
                                <div className="AboutUsPointTitle">
                                    Educate.
                            </div>
                                <div className="AboutUsSubHeaderText">
                                    <p>Creating an impact through <span className="AboutUsEmphasized">workshops, lessons/discussions, and blogs</span>, which adderess global injustices and ways we can help.</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpMod" animateOnce duration={animateDuration}>

                            <div className="AboutUsPoint">
                                <div className="AboutUsPointImage" id="awareimg"></div>
                                <div className="AboutUsPointTitle">
                                    Bring Awareness.

                            </div>
                                <div className="AboutUsSubHeaderText">
                                    <p>Promoting and bringing attention to underlooked causes such as <span className="AboutUsEmphasized">healthcare, refugees, and education</span> in several countries.</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUpMod" animateOnce duration={animateDuration} delay={500}>

                            <div className="AboutUsPoint">
                                <div className="AboutUsPointImage" id="fundraiseimg"></div>
                                <div className="AboutUsPointTitle">
                                    Fundraise.
                            </div>
                                <div className="AboutUsSubHeaderText">
                                    <p>Reaching the means to make change through return on investment <span className="AboutUsEmphasized"> - $44.00 returned for every $1.00 donated -</span> helping us create a global impact.</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                </div>
            </div>
        );

    }
}

export default AboutUs;