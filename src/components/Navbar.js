function Navbar() {
  return (
    <nav className="navbar container">
      <a href="#inicio" className="brand" aria-label="Ir al inicio de Intellaut">
        <span className="brand-mark">I</span>
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
