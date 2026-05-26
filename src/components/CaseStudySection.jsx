import React from "react";

const CaseStudySection = () => {
  return (
    <section className="s case-section" id="case">
      <div className="s-inner">
        {/* SECTION HEAD */}
        <div className="s-head">
          <div className="s-eyebrow">
            <span className="em"></span>
            Customer Story
          </div>

          <h2 className="section">
            How a logistics SaaS rebuilt its helpdesk
            <em> in a quarter.</em>
          </h2>
        </div>

        {/* CASE GRID */}
        <div className="case-grid">
          {/* LEFT */}
          <div>
            <div className="case-quote mt-6">
              "We were paying 47k a year for our legacy helpdesk plus four
              bolt-ons and 12 supervisor hours a week just to get a CSAT
              report. DexKor replaced all of it inside 14 days. AI is closing
              38% of tier-1 without us touching it. My VP of Support has her
              Sundays back."
            </div>

            <div className="case-attr">
              <div className="av">VS</div>

              <div className="who">
                <div className="name">
                  VP Support, B2B Logistics SaaS
                </div>

                <div className="role">
                  $18M ARR · 28-agent team · Series B
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="case-results">
            <div className="case-result">
              <div className="num">38%</div>

              <div className="lbl">
                Tier-1 tickets resolved by Dexy AI in month 2
              </div>
            </div>

            <div className="case-result">
              <div className="num">$31k</div>

              <div className="lbl">
                Annual stack cost reduction (helpdesk + 4 tools consolidated)
              </div>
            </div>

            <div className="case-result">
              <div className="num">14d</div>

              <div className="lbl">
                From signed SOW to full team live on DexKor
              </div>
            </div>

            <div className="case-result">
              <div className="num">2.1x</div>

              <div className="lbl">
                CSAT lift, measured at day 90
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;