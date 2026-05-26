import React, { useState } from "react";
import logo from "../images/DxLogo.svg";

const Footer = () => {
  const [showTicker, setShowTicker] = useState(true);

  const hideTicker = () => {
    setShowTicker(false);
  };

  return (
    <>
      {/* FOOTER */}
      <footer className="foot">
        <div className="foot-inner">
          <div className="foot-top">
            {/* BRAND */}
            <div className="foot-brand">
              <img
                className="brand-logo-foot"
                src={logo}
                alt="DexKor Logo"
              />

              <p>
                The AI-native helpdesk for B2B SaaS. Resolutive AI.
                14-day migration. Flat platform pricing.
              </p>
            </div>

            {/* HELP DESK */}
            <div className="foot-col">
              <h5>HelpDesk</h5>

              <ul>
                <li>
                  <a href="#helpdesk">
                    Features
                  </a>
                </li>

                <li>
                  <a href="#how">
                    Migration
                  </a>
                </li>

                <li>
                  <a href="#case">
                    Customers
                  </a>
                </li>

                <li>
                  <a href="#faq">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div className="foot-col">
              <h5>Company</h5>

              <ul>
                <li>
                  <a href="#">
                    About
                  </a>
                </li>

                <li>
                  <a href="#case">
                    Customers
                  </a>
                </li>

                <li>
                  <a href="#">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* CONNECT */}
            <div className="foot-col">
              <h5>Connect</h5>

              <ul>
                <li>
                  <a href="#">
                    LinkedIn
                  </a>
                </li>

                <li>
                  <a href="#">
                    X / Twitter
                  </a>
                </li>

                <li>
                  <a href="#form">
                    Book a Demo
                  </a>
                </li>

                <li>
                  <a href="mailto:contact@dexkor.com">
                    contact@dexkor.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* FOOT BOTTOM */}
          <div className="foot-bottom">
            <span>
              © 2026 DexKorCRM Pvt. Ltd. · Innov8, Orchid Center,
              Sector 53, Gurugram, India
            </span>

            <span>
              Privacy · Terms · DPA
            </span>
          </div>
        </div>
      </footer>

      {/* TICKER */}
      {showTicker && (
        <div
          className="ticker"
          id="ticker"
        >
          <button
            className="close"
            onClick={hideTicker}
            aria-label="Close"
          >
            ×
          </button>

          <div
            className="av"
            id="tav"
          >
            VS
          </div>

          <div className="body">
            <div
              className="msg"
              id="tmsg"
            >
              <b>VP Support at FleetPilot</b> just booked a HelpDesk
              demo
            </div>

            <div className="meta">
              <span className="live">
                Live
              </span>

              &nbsp;·&nbsp;

              <span id="ttime">
                2 min ago
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;