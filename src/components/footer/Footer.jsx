import React from "react";
import {Link} from"react-router-dom";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaWhatsapp,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Displaying popular movies: When you visit the home page, the app sends a request to the TMDB API to fetch a list of popular movies.
                 The response is then used to display the movie titles and overviews on the page.
                </div>
                <div className="socialIcons">
                    <Link to="/">
                     <span to ="/" className="icon">
                        <FaFacebookF />
                    </span>
                    </Link>
                    <Link to="https://www.instagram.com/ranout_0000/">
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    </Link>
                    <Link to="/">
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    </Link>
                    <Link to="https://www.linkedin.com/in/kunal-singh-35384217a">
                    <span className="icon">
                         <FaLinkedin />
                    </span>
                    </Link>
                     <Link to ="https://wa.me/qr/MM7PGVYMDEI5G1 ">
                    <span className="icon">
                        <FaWhatsapp />
                    </span></Link>
                    
                </div>
                <br/>
                @Ranout_0000
            </ContentWrapper>

        </footer>
    );
};

export default Footer;
