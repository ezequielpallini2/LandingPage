function Hero() {
  return (
    <header id="inicio" className="hero">
      <div className="hero-glow" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Seguridad vehicular para todos los dias</p>
          <h1>Si algo sucediera en el camino, es mejor tener pruebas </h1>
          <p className="hero-subtitle">
            Un 70% de los accidentes no tienen un culpable claro, lo decide el seguro,
            ahora con una dashcam simple y confiable tenes respaldo cuando mas lo necesites.
            Maneja con tranquilidad sabiendo que siempre estas filmando todo lo que sucede.
          </p>
          <div className="hero-actions">
            <a href="https://intellaut.mitiendanube.com/productos/camara-vehicular-para-particulares/" className="btn btn-primary">
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
          <p className="hero-card-price">A tan solo $43000</p>
        </div>
      </div>
    </header>
  );
}

export default Hero;
