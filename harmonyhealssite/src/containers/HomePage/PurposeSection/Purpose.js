import React from 'react';

import './Purpose.css'

const Purpose = (props) => {

    return (
        <div>
            <div className="PurposeTextHolder">
                <div className="PurposeText">
                    <div className="PurposeHeaderText">
                        <p>Our Purpose</p>
                    </div>
                    <div className="PurposeSubHeaderText">
                        <p className="bold">Providing Opportunities for Vulnerable Children Worldwide</p>
                    </div>
                    <div className="PurposeSubText">
                        <p>At HarmonyHeals, we are driven by a single goal: providing opportunities for vulnerable children worldwide. As a result, we are strong believers in the mission of UNICEF, the United Nations Children's Fund, and chose to support them to bring awareness and collect funds for their lifesaving work in health and immunization. UNICEF has helped save more children’s lives than any other humanitarian organization by providing health care and immunizations, safe water and sanitation, nutrition, education, emergency relief, and more.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Purpose;