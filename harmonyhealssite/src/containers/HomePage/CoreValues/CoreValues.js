import React, { Component } from 'react';

import "./CoreValues.css";
import {FaEye, FaCommentDots, FaFilter, FaSearch, FaBolt, FaPaste} from 'react-icons/fa';


class CoreSection extends Component {

    render() {

        const CoreCardList = [
            [
                "Core Value",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                <FaEye id="CoreEye" style={{color: "#6342f5"}}></FaEye>
            ], 
            [
                "Core Value", 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                <FaSearch id="CoreSearch" style={{color: "#e3493b"}}></FaSearch>
            ], 
            [
                "Core Value", 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                <FaCommentDots id="CoreDots" style={{color: "#7be395"}}></FaCommentDots>
            ], 
            [
                "Core Value", 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                <FaFilter id="CoreFilter" style={{color: "#3bcde3"}}></FaFilter>
            ], 
            [
                "Core Value", 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                <FaPaste id="CorePaste" style={{color: "#3b73e3"}}></FaPaste>
            ], 
            [
                "Core Value", 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                <FaBolt id="CoreBolt" style={{color: "#f5cb42"}}></FaBolt>
            ]
        ]

        const renderCoreCards = CoreCardList.map(subheader => {
            return (
                <div className="CoreCard">
                    <div className="CoreCardIconHolder">
                        <div className="CoreIcon">
                            {subheader[2]}
                        </div>
                    </div>
                    <div className="CoreCardTitle">
                        <p>{subheader[0]}</p>
                    </div>
                    <div className="CoreCardDesc">
                        <p>{subheader[1]}</p>
                    </div>
                </div>
            )
        })

        return (
            <div className="CoreHolder">
                <div className="Core">
                    <div className="CoreInfoBox">
                        <div className="CoreCardBoxTitle">
                            <p>Core Values</p>
                        </div>
                        <div className="CoreCards">
                            {renderCoreCards}
                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

export default CoreSection;