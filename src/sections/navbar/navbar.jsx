import './navbar.module.scss'

export function Navbar() {

return(
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container">
    <a className="navbar-brand text-bolder text-white" href="#">Moti<span id="vizyon">V</span>asyon</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link text-white" href="#!">Home</a>
        <a className="nav-link text-white" href="#!">Features</a>
        <a className="nav-link text-white" href="#!">Pricing</a>
      </div>
    </div>
  </div>
</nav>
)
}

export default Navbar;