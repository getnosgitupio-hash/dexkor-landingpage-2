import React from "react";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-deco-1"></div>

      <div className="hero-inner">
        {/* LEFT CONTENT */}
        <div>
          <div className="eyebrow">
            <span className="pdot"></span>
            The HelpDesk for B2B SaaS
          </div>

          <h1 className="display">
            Zendesk Charges Per Agent.
            <em> DexKor Just Closes the Ticket.</em>
          </h1>

          <p className="subdeck">
            Most support teams are reacting. DexKor HelpDesk resolves tier-1
            tickets autonomously so your 2-person team handles enterprise volume
            without the burnout, the backlog, or the Zendesk renewal bill.
          </p>

          {/* CTA BLOCK */}
          <div className="cta-block">
            <div className="btn-row">
              <a href="#form" className="btn-shine">
                Book a 20-Min HelpDesk Demo
                <span className="arrow">→</span>
              </a>

              <a href="#how" className="btn-ghost">
                See Migration Plan
              </a>
            </div>

            <div className="flicker-strip">
              <span className="live-dot"></span>

              <span>
                <b>14 SaaS teams</b> started evaluating DexKor HelpDesk in the
                last 7 days
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <div className="vsl-wrap">
          <div className="vsl-frame">
            <iframe
              src="https://fast.wistia.net/embed/iframe/83v5gb3j5g"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="DexKor Video"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;