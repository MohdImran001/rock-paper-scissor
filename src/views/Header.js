import React from 'react';
import '../css/Header.scss';

const Header = (props) => {
    return (
        <div className="header">
            <div className="logo">
                <img src="/images/logo.svg" alt="logo" />
            </div>

            <div className="score-card">
                <p className="text">SCORE</p>
                <p className="score">{props.score}</p>
            </div>
        </div>
    );
}

export default Header;