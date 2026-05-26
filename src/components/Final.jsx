import React from "react";

const FinalSection = () => {
  return (
    <section className="final">
      <div className="final-inner">
        {/* EYEBROW */}
        <div className="s-eyebrow">
          <span className="em"></span>
          Ready When You Are
        </div>

        {/* HEADING */}
        <h2>
          Stop renewing a helpdesk you've
          <em> already outgrown.</em>
        </h2>

        {/* DESCRIPTION */}
        <p className="deck">
          Whether the contract on your desk says Zendesk or Freshdesk:
          20 minutes to map your stack. 14 days to migrate. One platform
          to run on for the next decade.
        </p>

        {/* CTA */}
        <div className="cta-row">
          <a
            href="#form"
            className="btn-shine"
          >
            Book a HelpDesk Demo
            <span className="arrow">→</span>
          </a>

          <a
            href="#how"
            className="btn-ghost"
          >
            See Migration Plan
          </a>
        </div>

        {/* FLICKER STRIP */}
        <div className="flicker-strip">
          <span className="live-dot"></span>

          <span>
            Q2 Early Access closes May 31 ·{" "}
            <b>76 spots remaining</b>
          </span>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;