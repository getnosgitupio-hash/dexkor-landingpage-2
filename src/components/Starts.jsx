import React from "react";

const HelpdeskSection = () => {
  return (
    <section className="s helpdesk-section" id="helpdesk">
      <div className="s-inner">
        {/* SECTION HEAD */}
        <div className="s-head text-center">
          <div className="s-eyebrow">
            <span className="em"></span>
            DexKor HelpDesk
          </div>

          <h2 className="section center mb-8">
            Built to replace Zendesk and Freshdesk.
            <em> Priced to end the Debate.</em>
          </h2>
        </div>

        {/* GRID */}
        <div className="helpdesk-grid">
          {/* FEATURE LIST */}
          <ul className="feature-list">
            <li>
              <h4>Unified Inbox</h4>

              <p>
                One place for every customer conversation — email, chat, voice,
                in-app. No switching tabs. No losing context.
              </p>
            </li>

            <li>
              <h4>Resolutive AI Dexy</h4>

              <p>
                Dexy doesn't suggest replies for your agents to rewrite. It
                reads the ticket, resolves it, and closes it without anyone
                touching it.
              </p>
            </li>

            <li>
              <h4>SLA Engine</h4>

              <p>
                Set your SLA rules once. Dexy watches them for you and
                escalates 15 minutes before a breach, not after your customer
                already noticed.
              </p>
            </li>

            <li>
              <h4>Executive Reporting</h4>

              <p>
                Your CEO shouldn't need a spreadsheet to see how support is
                performing. Now they don't — every metric, live, in one
                dashboard.
              </p>
            </li>
          </ul>

          {/* PRODUCT MOCKUP */}
          <div className="helpdesk-mock-wrap">
            <div className="helpdesk-mock-eyebrow">
              ◆ Live Inbox · Real Resolution
            </div>

            <div className="helpdesk-mock">
              {/* HEAD */}
              <div className="mock-head">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>

                <div className="url">
                  app.dexkor.com / inbox
                </div>
              </div>

              {/* TICKET */}
              <div className="hd-ticket live">
                <div className="row">
                  <div className="from">
                    <span className="av">OL</span>
                    Operations Lead, FleetPilot
                  </div>

                  <div className="meta">
                    <span className="tag urg">
                      High · Renewal
                    </span>
                  </div>
                </div>

                <div className="body">
                  "Our renewal just came in 38% higher and I'm not sure how
                  to..."
                </div>
              </div>

              {/* AI BLOCK */}
              <div className="hd-ai">
                <div className="ai-head">
                  <span className="spark"></span>
                  Dexy · AI Resolution
                </div>

                <div className="ai-body">
                  Detected <b>renewal-risk signal</b>. Drafted personalized ROI
                  breakdown citing usage from last 90 days. Confidence{" "}
                  <b>94%</b>. Sent. Ticket closed.
                </div>
              </div>

              {/* TICKET */}
              <div className="hd-ticket">
                <div className="row">
                  <div className="from">
                    <span className="av">SE</span>
                    Support Engineer, ElevateHQ
                  </div>

                  <div className="meta">
                    <span className="tag pos">
                      Resolved · 12m
                    </span>
                  </div>
                </div>

                <div className="body">
                  "Loving the new dashboard. Quick question on bulk export
                  limits..."
                </div>
              </div>

              {/* TICKET */}
              <div className="hd-ticket">
                <div className="row">
                  <div className="from">
                    <span className="av">CS</span>
                    CS Manager, Cohira
                  </div>

                  <div className="meta">
                    <span className="tag pos">
                      AI-resolved
                    </span>
                  </div>
                </div>

                <div className="body">
                  "Need to add 4 seats for the new onboarding cohort starting
                  Monday..."
                </div>
              </div>

              {/* STATS */}
              <div className="hd-stats">
                <div className="hd-stat">
                  <div className="num">14m</div>

                  <div className="lbl">
                    Avg first response
                  </div>
                </div>

                <div className="hd-stat">
                  <div className="num">37%</div>

                  <div className="lbl">
                    AI-resolved today
                  </div>
                </div>

                <div className="hd-stat">
                  <div className="num">98%</div>

                  <div className="lbl">
                    SLA met (24h)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-block center">
            <div className="btn-row">
              <a href="#form" className="btn-shine">
                See All Four Working Together Live
                <span className="arrow">→</span>
              </a>
            </div>

            <div className="flicker-strip">
              <span className="live-dot"></span>

              <span className="ml-2 text-white">
                3-minute walkthrough. Real ticket. Real AI. No voiceover, no
                edits.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpdeskSection;
