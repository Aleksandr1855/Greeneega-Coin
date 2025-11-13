export default function Hero() {
const pumpUrl = import.meta.env.VITE_PUMP_FUN_URL || 'https://pump.fun/coin/GrEEN1GoVy9QYTshC9yNwJf1wa3MM53Ag2FTqgEJf8UL'
  return (
    <section id="hero" className="section hero" aria-label="Hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <h1 className="title">Greeneega Coin (GNEGA)</h1>
          <p className="subtitle">Born on Solana. Raised in Pure Green Chaos.</p>
          <p className="description">
            Greeneega is a pure green Solana meme coin. Green candles and thing about money, fast cars and bad girls.
          </p>
          <div className="actions">
            <a
              className="btn btn-primary"
              href={pumpUrl}
              target="_blank"
              rel="noreferrer"
            >
              Buy on Pump Fun
            </a>
            <a className="btn btn-secondary" href="https://x.com/Greeneega_coin" target="_blank" rel="noreferrer">Twitter (X)</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="banner-placeholder" aria-label="Greeneega banner placeholder">
            <img
              className="banner-img"
              src="/1500x500.jpeg"
              alt="Greeneega banner"
              onLoad={(e) => {
                const parent = e.currentTarget.parentElement
                const label = parent?.querySelector('span')
                if (label) label.style.display = 'none'
              }}
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <span>Greeneega banner placeholder</span>
          </div>
        </div>
      </div>
    </section>
  )
}
