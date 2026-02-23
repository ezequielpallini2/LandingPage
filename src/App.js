import './App.css';

function App() {
  return (
    <div className="app">
      {/* Hero principal */}
      <header className="hero">
        <div className="hero-overlay" />
        <nav className="navbar">
          <div className="navbar-brand">
            <span className="logo-mark">I</span>
            <span className="logo-text">Intellaut</span>
          </div>
          <div className="navbar-links">
            <a href="#particulares">Particulares</a>
            <a href="#flotas">Flotas</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Inteligencia aplicada al transporte,
              <span className="accent"> hoy y a futuro</span>
            </h1>
            <p className="hero-subtitle">
              Intellaut conecta cámaras vehiculares con una plataforma robusta preparada para IA.
              Más control, menos riesgos y datos listos para escalar cuando tu operación lo requiera.
            </p>
            <div className="hero-actions">
              <a href="#particulares" className="btn btn-primary">
                Para particulares
              </a>
              <a href="#flotas" className="btn btn-outline">
                Para flotas
              </a>
            </div>
            <div className="hero-badges">
              <span>Arquitectura cloud-first</span>
              <span>Listo para analítica avanzada</span>
              <span>Enfoque en seguridad vial</span>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-metric">
              <h2>+10x</h2>
              <p>Visibilidad sobre lo que pasa en ruta</p>
            </div>
            <div className="hero-grid">
              <div className="hero-card">
                <span className="hero-label">Particulares</span>
                <p>Instalación plug &amp; play para que manejes con tranquilidad.</p>
              </div>
              <div className="hero-card">
                <span className="hero-label">Flotas</span>
                <p>Infraestructura preparada para IA, sin rediseños futuros.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sección particulares */}
      <section id="particulares" className="section section-particulares">
        <div className="section-inner">
          <div className="section-header">
            <h2>Seguridad para conductores particulares</h2>
            <p>
              Cámaras vehiculares simples, confiables y fáciles de usar. Pensadas para acompañarte todos los días,
              sin configuraciones complicadas ni infraestructura corporativa.
            </p>
          </div>

          <div className="particulares-grid">
            <div className="card card-highlight">
              <h3>Cámaras plug &amp; play</h3>
              <p>
                Instalación rápida y sin intervención técnica. Conectás, fijás la cámara y empezás a grabar cada
                trayecto.
              </p>
              <ul>
                <li>Grabación continua de alta definición</li>
                <li>Evidencia ante accidentes o incidentes</li>
                <li>Diseñadas para uso diario en ciudad y ruta</li>
              </ul>
              <div className="price-row">
                <span className="price-label">Desde</span>
                <span className="price-amount">$5.000</span>
                <span className="price-currency">ARS / mes</span>
              </div>
              <p className="price-note">Suscripción mensual accesible, sin inversión inicial elevada.</p>
              <a href="#contacto" className="btn btn-primary btn-full">
                Solicitar información
              </a>
            </div>

            <div className="card card-features">
              <h4>Beneficios para particulares</h4>
              <ul>
                <li>Protección ante situaciones inesperadas en calle o ruta.</li>
                <li>Registro objetivo para seguros y autoridades.</li>
                <li>Mayor tranquilidad para vos y tu familia.</li>
                <li>Soporte remoto para configuración y consultas.</li>
              </ul>
              <div className="note">
                Pensamos la solución para que la tecnología no sea un obstáculo,
                sino una capa silenciosa de seguridad cada vez que encendés el motor.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección flotas y planes */}
      <section id="flotas" className="section section-flotas">
        <div className="section-inner">
          <div className="section-header section-header-centered">
            <h2>Plataforma profesional para flotas</h2>
            <p>
              Combinamos cámaras Howen V3 y V8 con una arquitectura SaaS modular. Empezá con visibilidad básica
              y escalá hacia analítica con IA sin rediseñar tu stack.
            </p>
          </div>

          <div className="flotas-layout">
            <div className="flotas-copy">
              <h3>Control operativo hoy, IA mañana</h3>
              <p>
                La plataforma de Intellaut está diseñada para acompañar la evolución de tu flota:
                desde el registro de video y ubicación hasta detección inteligente de eventos en tiempo real.
              </p>
              <ul>
                <li>Infraestructura preparada para modelos de IA de próxima generación.</li>
                <li>Arquitectura modular: sumá capacidades sin detener la operación.</li>
                <li>APIs abiertas para integrarte con TMS, ERPs y soluciones propias.</li>
                <li>
                  Diseño resiliente para flotas en crecimiento, sin rediseños traumáticos cuando aumente la escala.
                </li>
              </ul>
            </div>

            <div className="plans-grid">
              {/* Starter */}
              <article className="plan-card">
                <div className="plan-header">
                  <h4>Starter</h4>
                  <p>El punto de partida para ordenar tu operación.</p>
                </div>
                <div className="plan-price">
                  <span className="plan-amount">USD 99</span>
                  <span className="plan-period">/ mes</span>
                </div>
                <ul className="plan-features">
                  <li>Instalación base en unidades seleccionadas.</li>
                  <li>Dashboard estándar para monitoreo básico.</li>
                  <li>1 integración con sistema existente.</li>
                  <li>Soporte por email en horario laboral.</li>
                </ul>
                <a href="#contacto" className="btn btn-outline btn-full">
                  Hablar con un asesor
                </a>
              </article>

              {/* Pro (destacado) */}
              <article className="plan-card plan-card-featured">
                <div className="plan-tag">Más elegido</div>
                <div className="plan-header">
                  <h4>Pro</h4>
                  <p>Operación de flota con visión de largo plazo.</p>
                </div>
                <div className="plan-price">
                  <span className="plan-amount">USD 249</span>
                  <span className="plan-period">/ mes</span>
                </div>
                <ul className="plan-features">
                  <li>Todo lo incluido en Starter.</li>
                  <li>Integraciones ilimitadas con tu ecosistema.</li>
                  <li>Reportes avanzados y análisis de patrones.</li>
                  <li>Plataforma preparada para capacidades de IA futura.</li>
                  <li>API abierta para desarrollos y automatizaciones.</li>
                  <li>Soporte prioritario para equipos de operación.</li>
                </ul>
                <a href="#contacto" className="btn btn-primary btn-full">
                  Solicitar demo
                </a>
              </article>

              {/* Enterprise */}
              <article className="plan-card">
                <div className="plan-header">
                  <h4>Enterprise</h4>
                  <p>Arquitectura dedicada para flotas críticas.</p>
                </div>
                <div className="plan-price">
                  <span className="plan-amount">Contactar</span>
                </div>
                <ul className="plan-features">
                  <li>Arquitectura y entorno dedicados.</li>
                  <li>Infraestructura optimizada para tu operación.</li>
                  <li>Integraciones personalizadas con sistemas core.</li>
                  <li>SLA garantizado y soporte de nivel enterprise.</li>
                </ul>
                <a href="#contacto" className="btn btn-outline btn-full">
                  Diseñar solución a medida
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section id="contacto" className="section section-cta">
        <div className="section-inner section-inner-narrow">
          <div className="section-header section-header-centered">
            <h2>Empecemos a conectar tu flota con el futuro</h2>
            <p>
              Contanos si necesitás una cámara para tu auto o si gestionás una flota completa.
              Te ayudamos a definir el punto de partida y el roadmap tecnológico.
            </p>
          </div>
          <div className="cta-actions">
            <a href="mailto:contacto@intellaut.com" className="btn btn-primary">
              Solicitar demo
            </a>
            <a href="mailto:contacto@intellaut.com?subject=Asesor%20Intellaut" className="btn btn-outline">
              Hablar con un asesor
            </a>
          </div>
          <p className="cta-note">
            Preferís otro canal de contacto? Podemos adaptarnos a los flujos actuales de tu equipo: videollamada,
            email o mensajería corporativa.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="logo-mark">I</span>
            <span className="logo-text">Intellaut</span>
          </div>
          <div className="footer-columns">
            <div className="footer-column">
              <h5>Soluciones</h5>
              <a href="#particulares">Particulares</a>
              <a href="#flotas">Flotas y logística</a>
            </div>
            <div className="footer-column">
              <h5>Plataforma</h5>
              <span>Dashboard web</span>
              <span>Integraciones</span>
              <span>API abierta</span>
            </div>
            <div className="footer-column">
              <h5>Contacto</h5>
              <a href="mailto:contacto@intellaut.com">contacto@intellaut.com</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Intellaut. Todos los derechos reservados.</span>
          <span>Inteligencia aplicada al transporte.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
