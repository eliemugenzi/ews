import React from 'react';

const Portfolio = () => {
    return (
        <>
            <div className="portfolio">
                <div className="container">
                    <h1 className="portfolio__heading text-center">Our Portfolio</h1>
                    <div className="portfolio__grid">
                        <div className="portfolio__grid--item">
                            <img src="http://ejobu-ews.netlify.com/assets/portfolio/hellomed.PNG" alt=""/>
                        </div>
                        <div className="portfolio__grid--item">
                            <img src="http://ejobu-ews.netlify.com/assets/portfolio/fab.PNG" alt=""/>
                        </div>
                        <div className="portfolio__grid--item">
                            <img src="http://ejobu-ews.netlify.com/assets/portfolio/olivier.PNG" alt=""/>
                        </div>
                        <div className="portfolio__grid--item">
                            <img src="http://ejobu-ews.netlify.com/assets/portfolio/osp.PNG" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;
