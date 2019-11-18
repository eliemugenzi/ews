import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer__grid">
                        <div className="footer__grid--item">
                            <h4 className="footer__grid--title">About Us</h4>
                            <p className="footer__grid--desc">
                            Ejobu Web Service is part of Ejobu ltd, we design,develop and test softwares,
                             web applications and mobile applications for clients who are looking for fast, efficient and secure solution.
                            </p>
                        </div>
                        <div className="footer__grid--item">
                            <h4 className="footer__grid--title">Contact Info</h4>
                            <div className="footer__grid--desc">
                                <p>Address: CHIC, First Floor</p>
                                <p>Phone: +250 785 864 371</p>
                                <p>Email: support@ejobu.rw</p>
                            </div>
                        </div>
                        <div className="footer__grid--item">
                            <img src="http://ejobu-ews.netlify.com/assets/img/logo.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
