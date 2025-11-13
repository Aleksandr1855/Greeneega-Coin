const steps = [
  {
    step: 1,
    text: 'Install a Solana wallet (Phantom, Backpack, etc.).',
  },
  {
    step: 2,
    text: 'Fund it with SOL on mainnet.',
  },
  {
    step: 3,
    text: 'Open the official Greeneega Coin link on pump.fun and ape responsibly.',
  },
]

export default function HowToBuy() {
  return (
    <section id="how-to-buy" className="section" aria-labelledby="buy-heading">
      <div className="container">
        <h2 id="buy-heading" className="section-title">How to Buy GNEGA</h2>
        <div className="step-grid">
          {steps.map(({ step, text }) => (
            <div key={step} className="step-card">
              <div className="step-number">{step}</div>
              <p className="step-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}