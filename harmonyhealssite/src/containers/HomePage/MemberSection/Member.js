import React, { Component } from 'react';

import "./Member.css";

class MemberSection extends Component {

    render() {

        return (
            <div className="MemberHolder">
                <div className="Member">
                    <div className="MemberInfoBox">
                        <div className="MemberCardBoxTitle">
                            <p>Be Part of the Change</p>
                        </div>
                        <div className="MemberCards">
                            <div className="MemberCategory">
                                <div className="MemberCategoryTitle">
                                    <p>As a Member</p>
                                </div>
                                <div className="MemberCategoryDesc">
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "</p>
                                </div>
                            </div>
                            <div className="MemberCategory">
                                <div className="MemberCategoryTitle">
                                    <p>As an Ambassador</p>
                                </div>
                                <div className="MemberCategoryDesc">
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "</p>
                                </div>
                            </div>
                            <div className="MemberCategory">
                                <div className="MemberCategoryTitle">
                                    <p>As a Partner</p>
                                </div>
                                <div className="MemberCategoryDesc">
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "</p>
                                </div>
                            </div>
                            <div className="MemberCategory">
                                <div className="MemberCategoryTitle">
                                    <p>As a Sponsor</p>
                                </div>
                                <div className="MemberCategoryDesc">
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

export default MemberSection;