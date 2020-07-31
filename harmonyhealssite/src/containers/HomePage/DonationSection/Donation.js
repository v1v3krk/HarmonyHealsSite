import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


import './Donation.css'

const Donation = (props) => {

    return (
        <ScrollAnimation animateIn="fadeInUpMod" animateOnce>

            <div className="Donation">
                <div className="DonationTextHolder">
                    <div className="DonationText">
                        <div className="CharityImage">
                        </div>
                        <div className="DonationNonPic">
                            <div className="CoreHeaderText">
                                <p>You Can <span className="matteyellow">Save Lives</span> Right Now.</p>

                            </div>
                            <div className="CoreSubHeaderText">
                                <p>Every<span className="CoreEmphasized"> $19.00</span> donated to our organization helps the lives of around
                                    <span className="CoreEmphasized"> 100 vulnerable children</span>. All profits and proceeds are given to <span className="CoreEmphasized">UNICEF</span>.</p>
                            </div>
                            <div className="CoreSubHeaderText">
                                <p><span className="CoreEmphasized">"How much should I donate?" - Check the slider below.</span></p>
                            </div>
                            <a href="https://charity.gofundme.com/o/en/campaign/harmonyhealstx">
                                <div className="DonationButton">
                                    <p>Donate Here</p>
                                </div>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div >
        </ScrollAnimation>
    );
}

export default Donation;