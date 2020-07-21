import React from 'react';

import './AboutUs.css'

const AboutUs = (props) => {

    return (
        <div>
            <div className="AboutUsTextHolder">
                <div className="AboutUsText">
                    <div className="AboutUsHeaderText">
                        <p>About Us</p>
                    </div>
                    <div className="AboutUsSubHeaderText">
                        <p className="bold">A Community-Based Organization and Student Volunteer Group Aimed Towards Providing Improved Healthcare and Immunization Globally in Support of UNICEF.</p>
                    </div>
                    <div className="AboutUsSubText">
                        <p>As a small volunteer group of high school students within Frisco, Texas we are committed to investing our expertise and resources through the youth-led UNICEF UNITE grassroots movement in order to further achieve our cause. It is UNICEF USA's goal to empower youth in the United States with the resources and skills to be effective global citizens - thinking globally and acting locally for the world's most vulnerable children in over 190 countries. Just imagine what we can achieve together!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;