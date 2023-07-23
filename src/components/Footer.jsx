import React from "react";
// import { Link } from "react-router-dom";

function Footer(){
    const date=new Date();
    return <footer>
    <div className="footer">
      <div className="footer-outer-wrapper">
        <div className="footer-inner-wrapper">
          <div className="footer-col">
            <h2>Contact Us</h2>
            <p>
              NIT Raipur
              GEC Road,Amanaka,Raipur
              <br />
              Raipur - 492001
            </p>
            <p>
              <a href="mailto:placements@nitrr.ac.in">
                placements@nitrr.ac.in
              </a>
            </p>
          </div>
         
          <div className="footer-col">
            <h2>Links</h2>
            <p>
              <a href="https://www.ncs.gov.in/Pages/default.aspx" target="blank">
                National Career Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-copyright">
      <p>
        ALL RIGHTS RESERVED © {date.getFullYear()}. <strong>NIT RAIPUR.</strong> (Developed
        & Managed By -{" "}
        <a href="https://www.linkedin.com/in/saiprem-kakumani-3a7479226/" target="none">
          Saiprem Kakumani
        </a>
        )
      </p>
    </div>
  </footer>
}

export default Footer;
