import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <div className="home">
            <div className="container">
                <div className="hero row">
                    <div className="col-sm-12 col-md-6"></div>
                    <div className="col-sm-12 col-md-6 mt-5">
                        <h1 className="hero__title">Bring your idea to life</h1>
                        <h6 className="hero__subtitle">Let's build something that your users will love</h6>
                        <p>Ejobu web service is a design and development startup that brings your digital product ideas to life.</p>
                        <Link to="/" className="home__link" style={{textDecoration:'none'}}>
                            <span>Talk to us</span>
                            <div className="link__overlay">
                               <i className="ti-arrow-right" />
                            </div> 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="services mt-5">
            <div className="container">
                <div className="services__grid">
                    <div className="services__item">
                        <div className="services__icon">
                            <i className="ti-pencil-alt" />
                        </div>
                        <h4 className="services__title">Unique Design</h4>
                        <p className="services__desc">
                        We work with you to identify and create the best designs to serve your business's needs and attract you more customers.
                        </p>
                    </div>
                    <div className="services__item">
                    <div className="services__icon">
                            <i className="ti-image" />
                        </div>
                        <h4 className="services__title">Business Solution</h4>
                        <p className="services__desc">
                        We build the software with your feedback and reviews to make sure it suits what you wanted it to be.
                        </p>
                    </div>
                    <div className="services__item">
                    <div className="services__icon">
                            <i className="ti-headphone-alt" />
                        </div>
                        <h4 className="services__title">Customer support</h4>
                        <p className="services__desc">
                        Our team is available 24/7 via both email and Phone to help you. you can also find us at our office from Monday to Friday 9-5
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="web">
            <div className="container">
                <div className="web__grid">
                    <div className="web__grid--item">
                        <h1 className="web__title">Websites &amp; Web applications</h1>
                        <h6 className="web__subtitle">We are experienced in building outstanding websites and web applications. 
                           We have expertise in front-end development (Angular, React) and backend development (Python/Django, Rest Api)
                        </h6>
                        <p className="web__desc">We create web apps powered by the latest technologies to produce efficient user experience and get you the security you need.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
