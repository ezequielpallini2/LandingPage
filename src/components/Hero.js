function Hero() {
  return (
    <header id="inicio" className="hero">
      <div className="hero-glow" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Seguridad vehicular para todos los dias</p>
          <h1>Nunca mas estes solo en un accidente</h1>
          <p className="hero-subtitle">
            Una dashcam simple y confiable te da respaldo cuando mas lo necesitas.
            Maneja con tranquilidad sabiendo que siempre tenes una prueba de lo que paso.
          </p>
          <div className="hero-actions">
            <a href="#particulares" className="btn btn-primary">
              Quiero proteger mi auto
            </a>
            <a href="#flotas" className="btn btn-secondary">
              Soluciones para flotas
            </a>
          </div>
        </div>

        <div className="hero-card">
          <h2>Respaldo real en segundos</h2>
          <ul>
            <li>Instalacion simple en minutos</li>
            <li>Grabacion continua de tus trayectos</li>
            <li>Soporte 24/7 cuando lo necesites</li>
          </ul>
          <p className="hero-card-price">A tan solo $30000</p>
        </div>
      </div>
    </header>
  );
}

export default Hero;
