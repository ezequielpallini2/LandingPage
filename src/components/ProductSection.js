function ProductSection() {
  return (
    <section id="particulares" className="section product-section">
      <div className="container product-layout">
        <div>
          <p className="eyebrow">Particulares</p>
          <h2>Protege tu auto con una dashcam simple y confiable</h2>
          <p className="product-copy">
            Tu camara se instala facil, graba cada trayecto y te da respaldo ante cualquier imprevisto.
            No necesitas conocimientos tecnicos para empezar.
          </p>

          <ul className="product-list">
            <li>Evidencia clara ante accidentes</li>
            <li>Mayor tranquilidad para vos y tu familia</li>
            <li>Funcionamiento estable para uso diario</li>
          </ul>
        </div>

        <aside className="pricing-card">
          <p className="pricing-label">Precio accesible</p>
          <p className="pricing-value">$5000</p>
          <p className="pricing-period">ARS / mes</p>
          <p className="pricing-note">
            Suscripcion mensual para que empieces a proteger tu auto sin una inversion inicial alta.
          </p>
          <a href="#contacto" className="btn btn-primary btn-block">
            Quiero proteger mi auto
          </a>
        </aside>
      </div>
    </section>
  );
}

export default ProductSection;
