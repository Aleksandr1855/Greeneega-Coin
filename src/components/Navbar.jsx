export default function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="container nav-inner">
        <div className="brand">Greeneega Coin (GNEGA)</div>
        <nav aria-label="Primary" className="nav-links">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#tokenomics">Tokenomics</a>
          <a className="nav-link" href="#how-to-buy">How to Buy</a>
          <a className="nav-link" href="#community">Community</a>
        </nav>
      </div>
    </header>
  )
}