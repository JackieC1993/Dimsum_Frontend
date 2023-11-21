import React from 'react';
import {FaGithub} from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";
function Footer() {
 return (
    <footer className="dimsums-footer">
      <p>2023 JCDIMSUMS Registered Trademark ™️</p>
      <ul>
        <li><a href="https://www.linkedin.com/in/jackie-cheung-a0b446b3/" target="_blank"><FaLinkedin color={"green"} size={"60px"}/> </a></li>
        <li><a href="https://github.com/JackieC1993" target="_blank"><FaGithub color={"black"} size={"60px"}/> </a></li>
      </ul>
    </footer>
 );
}

export default Footer;