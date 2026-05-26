import React from "react";

const ComparisonSection = () => {
  return (
    <section className="s">
      <div className="s-inner">
        {/* SECTION HEAD */}
        <div className="s-head text-center">
          <div className="s-eyebrow">
            <span className="em"></span>
            Side by Side
          </div>

          <h2 className="section center">
            Why teams are switching from
            <em> Zendesk and Freshdesk to DexKor.</em>
          </h2>

          <p className="s-deck mx-auto text-center">
            The honest comparison your VP Support wishes existed. No spin.
            Specifics, line by line.
          </p>
        </div>

        {/* TABLE */}
        <div className="compare-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th>What you actually pay for</th>

                <th className="legacy">Zendesk</th>

                <th className="legacy">Freshdesk</th>

                <th className="dexkor">
                  DexKor HelpDesk
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="feature">
                  Stack architecture
                </td>

                <td className="legacy">
                  Suite plus Talk, Guide, Explore, QA, WFM. 4 to 7 SKUs to
                  operate one desk.
                </td>

                <td className="legacy">
                  Freshdesk, Omni, Freshchat, Freshcaller priced separately. 4
                  products to stitch together.
                </td>

                <td className="dexkor">
                  <b>One platform.</b> Inbox, KB, voice, AI, reporting, all
                  native.
                </td>
              </tr>

              <tr>
                <td className="feature">
                  AI capability
                </td>

                <td className="legacy">
                  Advanced AI add-on at $50/agent/month. Autonomous resolutions
                  billed per outcome on top.
                </td>

                <td className="legacy">
                  Freddy Copilot at $29/agent/month plus Freddy Agent at $100
                  per 1,000 sessions. Sessions expire monthly. No rollover.
                </td>

                <td className="dexkor">
                  <b>Resolutive:</b> 25 to 40% of tier-1 tickets closed
                  autonomously. Included.
                </td>
              </tr>

              <tr>
                <td className="feature">
                  Agent workspace
                </td>

                <td className="legacy">
                  3 to 5 windows. Marketplace apps add up. Agents do the
                  joining.
                </td>

                <td className="legacy">
                  Context breaks across Freshdesk, Chat, and Caller. Each
                  module a separate UI.
                </td>

                <td className="dexkor">
                  <b>Single pane.</b> Conversation history that does not break
                  across channels.
                </td>
              </tr>

              <tr>
                <td className="feature">
                  Migration effort
                </td>

                <td className="legacy">
                  5 to 13 weeks for medium teams. Implementation services start
                  near $8k per channel.
                </td>

                <td className="legacy">
                  3 to 6 weeks. Partner SOW for routing, Freddy training, and
                  Omni stitching.
                </td>

                <td className="dexkor">
                  <b>14 days.</b> Concierge included. No SOW.
                </td>
              </tr>

              <tr>
                <td className="feature">
                  Pricing model
                </td>

                <td className="legacy">
                  Per-agent. Suite Team $55, Pro $115, Enterprise $169.
                  Renewals up 5 to 16% annually.
                </td>

                <td className="legacy">
                  Per-agent. Growth $15, Pro $49, Enterprise $79. Copilot $29
                  extra. Sessions billed on top.
                </td>

                <td className="dexkor">
                  <b>Flat platform.</b> No per-agent squeeze. Locked rate at
                  signup.
                </td>
              </tr>

              <tr>
                <td className="feature">
                  Reporting overhead
                </td>

                <td className="legacy">
                  Custom reporting gated to Pro. Explore add-on for anything
                  past basic. 15 to 25 supervisor hrs/month.
                </td>

                <td className="legacy">
                  Custom dashboards locked to $49 Pro tier. CSV exports
                  stitched in spreadsheets.
                </td>

                <td className="dexkor">
                  <b>2 to 4 hours/month.</b> Real-time dashboards your CEO
                  opens.
                </td>
              </tr>

              <tr>
                <td className="feature">
                  Implementation partner
                </td>

                <td className="legacy">
                  Routed through SI. Co-founders unreachable. Premier Support is
                  20 to 35% of contract value.
                </td>

                <td className="legacy">
                  Routed through Freshworks partner network. Long ticket queues
                  for complex setups.
                </td>

                <td className="dexkor">
                  <b>Founders in your Slack.</b> Direct support contracts
                  available.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="cta-block center">
          <div className="btn-row">
            <a href="#form" className="btn-shine">
              Get a Side-by-Side ROI for Your CFO
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
