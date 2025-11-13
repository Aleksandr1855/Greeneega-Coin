export default function Tutorial() {
  return (
    <section className="section tutorial" aria-label="Tutorial">
      <div className="container">
        <div className="tutorial-header">
          <h2 className="tutorial-title">TUTORIAL</h2>
          <h3 className="tutorial-subtitle">HOW 2 BUY</h3>
          <p className="tutorial-caption">follow dese steps 2 get ur $GREENEEGA COIN n join da crew</p>
        </div>

        <div className="tutorial-grid">
          <div className="tutorial-card">
            <span className="stripe" aria-hidden="true"></span>
            <div className="tutorial-card-inner">
              <div className="tutorial-step">STEP 1</div>
              <div className="tutorial-head">GET A WALLET</div>
              <p className="tutorial-text">download phantom wallet or whatever solana wallet u like. set dat shit up</p>
            </div>
          </div>

          <div className="tutorial-card">
            <span className="stripe" aria-hidden="true"></span>
            <div className="tutorial-card-inner">
              <div className="tutorial-step">STEP 2</div>
              <div className="tutorial-head">GET SOME SOL</div>
              <p className="tutorial-text">buy SOL from coinbase or somethin n send it 2 ur phantom wallet ya feel me</p>
            </div>
          </div>

          <div className="tutorial-card">
            <span className="stripe" aria-hidden="true"></span>
            <div className="tutorial-card-inner">
              <div className="tutorial-step">STEP 3</div>
              <div className="tutorial-head">GO TO RAYDIUM</div>
              <p className="tutorial-text">head to raydium n connect ur wallet. paste da $GREENEEGA contract addy</p>
            </div>
          </div>

          <div className="tutorial-card">
            <span className="stripe" aria-hidden="true"></span>
            <div className="tutorial-card-inner">
              <div className="tutorial-step">STEP 4</div>
              <div className="tutorial-head">SWAP FOR $GREENEEGA</div>
              <p className="tutorial-text">swap ur SOL for $GREENEEGA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}