const totalSupply = '1,000,000,000 GNEGA' // easy to edit
const distribution = [
  { label: 'Liquidity / pump.fun', value: '50%' },
  { label: 'Community, airdrops, rewards', value: '30%' },
  { label: 'Marketing & partnerships', value: '20%' },
]

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="section" aria-labelledby="tokenomics-heading">
      <div className="container">
        <h2 id="tokenomics-heading" className="section-title">Tokenomics</h2>
        <p className="section-subtext">Simple, loud, and easy to change.</p>

        <div className="token-grid">
          <div className="token-card">
            <h3 className="card-title">Total Supply</h3>
            <p className="card-value">{totalSupply}</p>
          </div>

          {distribution.map((item) => (
            <div key={item.label} className="token-card">
              <h3 className="card-title">{item.label}</h3>
              <p className="card-value">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}