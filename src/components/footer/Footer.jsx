import React from "react";
import "components/footer/footer.scss";
import logo from "images/vector/default-monochrome-white.svg";
import linkedinLogo from "images/linkedin.png";
import githubLogo from "images/gitHub.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footer_container">
      <img src={logo} alt="logo" />
      <div className="developer_info">
        <p>
          Created by &nbsp;<span>Artur Oganesian</span> &nbsp;&copy;
          {currentYear}
        </p>
        <a href="https://www.linkedin.com/in/artur-oganesian/">
          <img src={linkedinLogo} alt="Linkedin Logo" />
        </a>
        <a href="https://github.com/ArturOganesian">
          <img src={githubLogo} alt="GitHub Logo" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
