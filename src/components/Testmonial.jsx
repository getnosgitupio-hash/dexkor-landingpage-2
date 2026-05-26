import React from "react";

const MigrationSection = () => {
  return (
    <section className="s" id="how">
      <div className="s-inner">
        {/* SECTION HEAD */}
        <div className="s-head text-center">
          <div className="s-eyebrow">
            <span className="em"></span>
            Migration
          </div>

          <h2 className="section center">
            From Zendesk or Freshdesk to live on DexKor in
            <em> 14 days.</em>
          </h2>

          <p className="s-deck">
            Concierge migration is included. No professional-services SOW. No
            60-day "discovery". A single Slack channel with our team and yours.
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="steps-grid">
          {/* STEP 1 */}
          <div className="step">
            <div className="num-bg">01</div>

            <div className="step-content">
              <div className="time">Days 1 to 3</div>

              <h3>Workflow Map &amp; Data Import</h3>

              <p>
                We map your routing rules, SLAs, macros, and knowledge base
                articles. Historical tickets imported with full thread fidelity.
                No "best-effort" migration. No data loss.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="step">
            <div className="num-bg">02</div>

            <div className="step-content">
              <div className="time">Days 4 to 11</div>

              <h3>Pilot Team Cuts Over</h3>

              <p>
                A pilot team of 3 to 5 agents goes live on DexKor in parallel
                with your existing helpdesk. Dexy AI is tuned against your real
                ticket flow. Resolution thresholds calibrated to your tolerance.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="step">
            <div className="num-bg">03</div>

            <div className="step-content">
              <div className="time">Days 12 to 14</div>

              <h3>Full Cutover, Legacy Read-Only</h3>

              <p>
                Your full team moves to DexKor. The legacy helpdesk goes
                read-only for the historical record. AI resolution rate,
                deflection rate, and SLA reports live from day 1 of week 3.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-block center">
          <div className="btn-row">
            <a href="#form" className="btn-shine">
              Talk to a Migration Specialist
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationSection;
