import React from 'react'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <div className="brand">
                    <h2 className="logo">EJobu</h2>
                </div>
                <ul className="nav__links">
                    <li className="nav__links--item"><a href="/">Home</a></li>
                    <li className="nav__links--item"><a href="/">Portfolio</a></li>
                    <li className="nav__links--item"><a href="/">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
