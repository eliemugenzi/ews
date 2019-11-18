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
        <div className="mobile">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 mobile__image">
                        <img src="http://ejobu-ews.netlify.com/assets/img/banner/about2.png" alt=""/>
                    </div>
                    <div className="offset-lg-2 col-lg-5">
                    <div className="mobile__container">
                    <div className="mobile__container--item">
                        <h1 className="mobile__heading">Mobile Application</h1>
                        <div className="mobile__grid">
                            <div className="mobile__grid--item icon">
                                <i className="ti-layers" />
                            </div>
                            <div className="mobile__grid--item desc">
                               <h3 className="mobile__grid--heading">Android Development</h3>
                               <p className="mobile__grid--details">
                               Need a mobile app? We analyze your needs and use the right stack. 
                               Depending on the scope of your project , we use (Kotlin,Java,Flutter or NativeScript)
                               </p>
                            </div>
                        </div>
                        <div className="mobile__grid next">
                            <div className="mobile__grid--item icon">
                                <i className="ti-layers" />
                            </div>
                            <div className="mobile__grid--item desc">
                               <h3 className="mobile__grid--heading">USSD</h3>
                               <p className="mobile__grid--details">
                               Operating in Africa means that most of your clients will have feature phones or be in areas without internet. 
                               Let them access your services via a USSD
                               </p>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="desktop mt-5 mb-5">
            <div className="container">
                <div className="desktop__grid">
                    <div className="desktop__grid--item">
                        <div className="desktop__grid--image">
                            <img src="http://ejobu-ews.netlify.com/assets/img/banner/about3.png" alt=""/>
                        </div>
                    </div>
                    <div className="desktop__grid--item mt-5">
                        <h1 className="desktop__title">Desktop Applications</h1>
                        <h5 className="desktop__subtitle">If you need an offline solution</h5>
                        <p className="desktop__desc">
                        Desktops application are not dead! If your business application need a performance that the web can not offer, a desktop app can be the solution. We use C++, the fatest language , to build high performant and flawless application.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="work mt-5 mb-5">
            <div className="container">
               <h1 className="work__title mt-5 mb-5">Some of our work</h1>
               <div className="work__grid grid--first">
                   <div className="work__grid--item">
                       <img src="http://ejobu-ews.netlify.com/assets/img/apple.jpg" alt=""/>
                       <div className="work__desc">
                           <div className="desc__flex">
                               <div className="desc__flex--item">
                                   <span>Website/Dashboard</span>
                               </div>
                               <div className="desc__flex--item">
                                   <p>eJobu | The platform for jobs and application process management</p>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="work__grid--item">
                       <div>
                         <img src="http://ejobu-ews.netlify.com/assets/img/embassy.jpg" alt=""/>
                         <div className="work__more">
                         <div className="desc__flex no--transform">
                               <div className="desc__flex--item">
                                   <span>Website/Fintech</span>
                               </div>
                               <div className="desc__flex--item">
                                   <p>Embassy of Rwanda in France</p>
                               </div>
                           </div>
                         </div>
                       </div>
                   </div>
               </div>
               <div className="work__grid grid--last mt-5 mb-5">
                   <div className="work__grid--item">
                       <img src="http://ejobu-ews.netlify.com/assets/img/hope.jpg" alt=""/>
                       <div className="work__more">
                         <div className="desc__flex no--transform">
                               <div className="desc__flex--item">
                                   <span>Website/Fintech</span>
                               </div>
                               <div className="desc__flex--item">
                                   <p>Embassy of Rwanda in France</p>
                               </div>
                           </div>
                         </div>
                   </div>
                   <div className="work__grid--item">
                       <div>
                         <img src="http://ejobu-ews.netlify.com/assets/portfolio/hellomed.PNG" alt=""/>
                         <div className="work__desc">
                         <div className="desc__flex">
                               <div className="desc__flex--item">
                                   <span>Software/Dashboard</span>
                               </div>
                               <div className="desc__flex--item">
                                   <p>HelloMed, find a doctor online</p>
                               </div>
                           </div>
                         </div>
                       </div>
                   </div>
               </div>
            </div>
        </div>
        <div className="sponsors mt-5 mb-5">
            <div className="container">
                <div className="sponsors__grid">
                    <div className="sponsors__grid--item">
                        <img src="http://ejobu-ews.netlify.com/assets/img/logo/ambassade.jpeg" alt=""/>
                    </div>
                    <div className="sponsors__grid--item">
                        <img src="http://ejobu-ews.netlify.com/assets/img/logo/future.png" alt=""/>
                    </div>
                    <div className="sponsors__grid--item">
                        <img src="http://ejobu-ews.netlify.com/assets/img/logo/clot.jpg" alt=""/>
                    </div>
                    <div className="sponsors__grid--item">
                        <img src="http://ejobu-ews.netlify.com/assets/img/logo/smile.png" alt=""/>
                    </div>
                    <div className="sponsors__grid--item">
                        <img src="http://ejobu-ews.netlify.com/assets/img/logo/cross.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
