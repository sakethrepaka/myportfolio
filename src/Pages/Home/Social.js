import React from "react";
import {  FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.github.com/sakethrepaka" className="home__social-icon" target="_blank" rel="noreferrer noopener">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/saketh-repaka-99b277241/" className="home__social-icon" target="_blank" rel="noreferrer noopener">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;