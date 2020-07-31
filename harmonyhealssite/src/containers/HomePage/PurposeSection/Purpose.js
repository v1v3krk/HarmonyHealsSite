import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import './Purpose.css'

const Purpose = (props) => {

    return (
        <ScrollAnimation animateIn="fadeInUpMod" animateOnce duration={2}>
            <div className="CoreTextHolder">
                <div className="CoreText">
                    <div className="CoreHeaderText">
                        <p>Striving to <span className="mattepink">Change</span> the World.</p>

                    </div>
                    <div className="CoreSubHeaderText">
                        <p>Driven by a single goal: to <span className="CoreEmphasized">provide opportunities</span> for 
                        <span className="CoreEmphasized"> vulnerable children</span> worldwide in support of <span className="CoreEmphasized">UNICEF</span>.</p>
                    </div>

                </div>
            </div>
        </ScrollAnimation>
    );
}

export default Purpose;