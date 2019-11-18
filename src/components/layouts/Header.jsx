import React, { useState } from 'react'

const Header = () => {
    const [active,setActive]=useState(false);
    return (
        <div className="header">
            <nav>
                <div className="brand">
                    <div className="logo">
                        <img src="http://ejobu-ews.netlify.com/assets/img/logo.png" alt=""/>
                    </div>
                </div>
                <ul className="nav__links">
                    <li className="nav__links--item"><a href="/">Home</a></li>
                    <li className="nav__links--item"><a href="/">Portfolio</a></li>
                    <li className="nav__links--item"><a href="/">Contact</a></li>
                </ul>
                <div className={active? "toggle active" : "toggle"} onClick={()=>setActive(!active)}>
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </div>
            </nav>
            <div className={ active ? "nav__mobile active" : "nav__mobile"}>
                <ul className="nav__mobile--links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Portfolio</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
