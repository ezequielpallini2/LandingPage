const benefits = [
  'Manejas con tranquilidad porque siempre tenes respaldo.',
  'Te ayuda a defender tu reclamo frente a terceros y seguros.',
  'Reduce discusiones, tiempos de gestion y perdida de dinero.',
  'Aporta seguridad para vos, tu familia y tu vehiculo.'
];

function Benefits() {
  return (
    <section className="section benefits-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Lo que te llevas</p>
          <h2>Una compra simple que te da paz mental todos los dias</h2>
        </div>

        <div className="benefits-box">
          <ul>
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href="#contacto" className="btn btn-secondary">
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
