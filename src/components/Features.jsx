import React from "react";

const ProblemSection = () => {
  return (
    <section className="s" id="problem">
      <div className="s-inner">
        {/* SECTION HEAD */}
        <div className="s-head">
          <div className="s-eyebrow">
            <span className="em"></span>
            The Problem
          </div>

          <h2 className="section">
            You're Running a 2026 Support Team
            <em> In 2012 Infrastructure.</em>
          </h2>

          <p className="s-deck">
            Your renewal just went up 38%. Your queue is growing faster than
            your team. And the "AI" on your current plan is still just drafting
            replies that your agents rewrite anyway. That's not a tooling
            problem. That's a category problem.
          </p>
        </div>

        {/* PROBLEM GRID */}
        <div className="prob-grid">
          <div className="prob-card">
            <div className="num">◆ 01</div>

            <h4>
              Renewal hikes that quietly broke your unit economics
            </h4>

            <p>
              Zendesk and Freshdesk are repricing aggressively. Renewal hikes
              of 30 to 50% are now standard, paired with feature gates that
              push teams from Growth to Pro to Enterprise. The math that worked
              at Series A no longer works at Series B.
            </p>
          </div>

          <div className="prob-card">
            <div className="num">◆ 02</div>

            <h4>
              Ticket volume scaling 3 to 5x faster than headcount
            </h4>

            <p>
              Self-serve growth, free tiers, and AI-curious customers send 3 to
              5x more inbound. Your headcount budget did not get a memo. Your
              ticket queue is the symptom. Your CSAT score is the bill.
            </p>
          </div>

          <div className="prob-card">
            <div className="num">◆ 03</div>

            <h4>"AI" that suggests, never resolves</h4>

            <p>
              Most AI in support today is cosmetic. Zendesk AI drafts replies.
              Freddy AI tags sentiment. Neither closes tickets. You bought the
              add-on. Your agents ignore it. Your CFO is asking why ARR per
              agent is still flat.
            </p>
          </div>
        </div>

        {/* CTA BLOCK */}
        <div className="cta-block">
          <div className="btn-row">
            <a href="#form" className="btn-shine">
              See the Helpdesk That Actually Resolves
              <span className="arrow">→</span>
            </a>
          </div>

          <div className="flicker-strip">
            <span className="live-dot"></span>

            <span>
              20 minutes with a co-founder | 76 spots remaining
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;