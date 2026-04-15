import logo from '../Logo.png';

function Navbar() {
  return (
    <nav className="navbar container">
      <a href="#inicio" className="brand" aria-label="Ir al inicio de Intellaut">
        <img src={logo} alt="Logo de Intellaut" className="brand-logo" />
        <span className="brand-text">Intellaut</span>
      </a>

      <div className="nav-links">
        <a href="#particulares">Particulares</a>
        <a href="#flotas">Flotas</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;
