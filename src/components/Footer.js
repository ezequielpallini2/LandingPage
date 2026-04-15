import logo from '../Logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="brand">
          <img src={logo} alt="Logo de Intellaut" className="brand-logo" />
          <span className="brand-text">Intellaut</span>
        </div>

        <div className="footer-links">
          <a href="#particulares">Particulares</a>
          <a href="#flotas">Flotas</a>
          <a href="mailto:ventas@intellaut.com">ventas@intellaut.com</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Intellaut. Todos los derechos reservados.</span>
        <span>Camaras vehiculares para manejar con tranquilidad.</span>
      </div>
    </footer>
  );
}

export default Footer;
