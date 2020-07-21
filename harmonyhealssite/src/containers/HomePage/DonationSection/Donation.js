import React from 'react';

import './Donation.css'

const Donation = (props) => {

    return (
        <div className="Donation">
            <div className="DonationTextHolder">
                <div className="DonationText">
                    <div className="CharityImage">
                    </div>
                    <div className="DonationNonPic">
                        <div className="DonationHeaderText">
                            <p>Donate to a Preventable Cause</p>
                        </div>
                        <div className="DonationSubHeaderText">
                            <p className="bold">Each $1.00 invested in childhood vaccination produces a return on investment of $44.00 in low and middle-income countries.</p>
                        </div>
                        <div className="DonationSubText">
                            <p>Every day, roughly 15,000 children under the age of 5 die from preventable causes. Therefore, Harmony Heals has decided to step up and address such a significant crisis in our world. We fully support the fundamental idea that every child deserves to learn, grow, and prosper. All profits and proceeding will be given to UNICEF in order to serve those in lesser-developed countries.</p>
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
    );
}

export default Donation;