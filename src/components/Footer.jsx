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
  <div className="fixed bottom-5 left-5 z-[9999] flex w-[370px] items-center rounded-[999px] bg-[#1f6fbf] px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">

    {/* CLOSE */}
    <button
      className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#D9D9DE] text-[16px] text-gray-600"
      onClick={hideTicker}
      aria-label="Close"
    >
      ×
    </button>

    {/* AVATAR */}
    <div className="mr-3 flex h-[68px] w-[68px] flex-shrink-0 items-center justify-center rounded-full bg-[#DCE3F8]">

      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="#5B6EE8"
      >
        <path d="M12 2C8.69 2 6 4.69 6 8c0 4.25 6 12 6 12s6-7.75 6-12c0-3.31-2.69-6-6-6zm0 8.5A2.5 2.5 0 1 1 12 5.5a2.5 2.5 0 0 1 0 5z"/>
      </svg>

    </div>

    {/* CONTENT */}
    <div className="flex-1 leading-tight">

      <div className="text-[14px] font-[600] text-white">
        Head of CX, Series B SaaS{" "}
        <span className="font-[400] text-white/90">
          just downloaded the playbook
        </span>
      </div>

      <div className="mt-2 flex items-center gap-2 text-[12px] text-white/90">

        <span>2 min ago</span>

        <span className="h-[4px] w-[4px] rounded-full bg-white/70"></span>

        <span className="flex items-center gap-1 font-[700] text-white">

          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M12 2L14.9 8.1L22 9.2L17 14L18.2 21L12 17.8L5.8 21L7 14L2 9.2L9.1 8.1L12 2Z"/>
          </svg>

          Verified by Proof
        </span>

      </div>

    </div>

  </div>
)}
    </>
  );
};

export default Footer;