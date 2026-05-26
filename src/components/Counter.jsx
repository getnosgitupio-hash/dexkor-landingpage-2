import React from 'react'

const Counter = () => {
  return (
    <section className="stats">
  <div className="stats-inner">
    <div className="stat">
      <div className="num">37%</div>
      <div className="lbl">Tier-1 tickets resolved by Dexy AI without human touch</div>
    </div>
    <div className="stat">
      <div className="num">14d</div>
      <div className="lbl">Concierge migration from Zendesk or Freshdesk, end to end</div>
    </div>
    <div className="stat">
      <div className="num">40%</div>
      <div className="lbl">Lower stack cost vs Zendesk or Freshdesk + 4 bolt-ons</div>
    </div>
    <div className="stat">
      <div className="num">2.1x</div>
      <div className="lbl">CSAT lift in the first 90 days, measured</div>
    </div>
  </div>
</section>
  )
}

export default Counter
