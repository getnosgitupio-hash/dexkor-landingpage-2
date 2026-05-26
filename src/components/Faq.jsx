import React from "react";

const FAQSection = () => {
  return (
    <section
      className="s"
      id="faq"
    >
      <div className="s-inner">
        <div className="faq-grid">
          {/* LEFT */}
          <div>
            <div className="s-eyebrow">
              <span className="em"></span>
              FAQ
            </div>

            <h2 className="section">
              The questions <em>before</em> you book.
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <details className="qa" open>
              <summary>
                How is DexKor HelpDesk different from Zendesk and Freshdesk?
              </summary>

              <p>
                DexKor HelpDesk is one platform: inbox, knowledge base, voice,
                AI, reporting, all native. Zendesk and Freshdesk both require 4
                to 7 bolt-on tools to do the same work. Our AI is resolutive
                (closes tickets autonomously inside guardrails) where Zendesk AI
                and Freddy AI are cosmetic (canned-reply suggestions and
                sentiment tags). And our pricing is flat platform-based, not
                per-agent with annual hikes and tier games.
              </p>
            </details>

            <details className="qa">
              <summary>
                What's actually involved in migrating from our current helpdesk?
              </summary>

              <p>
                14 days, end to end. Days 1 to 3 we map your workflows and
                import historical data. Days 4 to 11 we configure routing,
                SLAs, and tune AI against your real ticket flow with a pilot
                team running in parallel. Days 12 to 14 the full team cuts over
                and legacy goes read-only. Concierge migration is included.
                There is no professional-services SOW.
              </p>
            </details>

            <details className="qa">
              <summary>
                How does Dexy AI actually work? We've been burned before.
              </summary>

              <p>
                Fair concern. Most "AI" in support today is cosmetic. Dexy is
                resolutive: it closes tickets autonomously inside confidence
                guardrails you set. Typical performance is 25 to 40% of tier-1
                volume resolved without human touch by day 30. We can show you
                exact numbers on your own ticket data in the working session,
                not on cherry-picked demos.
              </p>
            </details>

            <details className="qa">
              <summary>
                What does HelpDesk pricing look like?
              </summary>

              <p>
                Flat platform pricing. No per-agent squeeze. No
                Growth-to-Pro-to-Enterprise feature gates. No annual hikes that
                show up unexpectedly. The Q2 Early Access program offers 50% off
                year one for the first 100 B2B SaaS teams switching from
                Zendesk or Freshdesk. Specific pricing is shared in your working
                session once we know your size and use case.
              </p>
            </details>

            <details className="qa">
              <summary>
                Do you integrate with the rest of our stack?
              </summary>

              <p>
                Yes. Native integrations across the tools B2B SaaS support teams
                typically run: Slack, Notion, Linear, Salesforce, HubSpot,
                GitHub, Stripe, Segment, and more. If something's missing, we
                ship it inside two weeks for early-access customers.
              </p>
            </details>

            <details className="qa">
              <summary>
                You're early-stage. Will you still exist in two years?
              </summary>

              <p>
                Honest question, and the right one to ask. We're funded for the
                next 36 months at current burn. The founders have direct support
                contracts with our customers. Source-code escrow is available
                for enterprise deals. Best move: book a working session and
                meet the team behind the platform.
              </p>
            </details>

            <details className="qa">
              <summary>
                What happens after I submit the form?
              </summary>

              <p>
                You go straight to the booking calendar. Pick a slot that works
                for you. The session is 20 minutes, usually with one of our
                co-founders. Before the call we ask you to share rough ticket
                volume and current vendor names, nothing else. After the call
                you get a one-page side-by-side and a migration sketch. No deck,
                no follow-up cadence.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;