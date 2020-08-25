import './Toolbar.css';
import '../Colors.css';

import React, { Component } from 'react';

class Toolbar extends Component {

    state = { opaque: false, hidden: false, previousScroll: 0 };

    componentDidMount() {
        document.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;
            const previousScroll = this.state.previousScroll;
            this.setState({
                opaque: currentScroll > 100,
                hidden: currentScroll > previousScroll && currentScroll > 800,
            });
            this.setState({
                previousScroll: currentScroll,
            })

        });
    }

    render() {

        const toolbaTabs = [['Blog', '/blogcards'],['Donate', '/donate'],['Team', '/team']]

        const renderTabs = toolbaTabs.map((element, igKey) => {
            return (
                <div className="ToolBarPage">
                    <a href={element[1]}><p>{element[0]}</p></a>
                </div>
            )
        })
        return (
            <div className="ToolBarHolder" style={{ backgroundColor: this.state.opaque ? "#00aeff" : "transparent",
            visibility: this.state.hidden ? "hidden" : "visible",
            transition: "visibility 0.25s, opacity 0.25s linear, background 0.25s linear, background-color 0.25s linear, background-image 0.25s linear",
            // transition: "all 0.25s ease-in-out",
            opacity: this.state.hidden ? "0": "1" ,
            }}>
            <div className="ToolBar">
                {/* <div className="ToolbarBrand">

                </div> */}
                <div className="ToolBarPages">
                    {renderTabs}
                </div>
                <div className="ToolBarMembership">

                </div>
            </div>
            </div>
        );

    }
}

export default Toolbar;
