const features = [
  {
    title: 'Instalacion plug and play',
    text: 'La colocas rapido y empezas a grabar sin configuraciones complejas.'
  },
  {
    title: 'Evidencia ante accidentes',
    text: 'Tenes respaldo visual para defender tu version cuando ocurre un incidente.'
  },
  {
    title: 'Soporte local',
    text: 'Te acompanamos en la instalacion y en cualquier duda de uso.'
  }
];

function Features() {
  return (
    <section className="section features-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Por que elegir Intellaut</p>
          <h2>Simple de usar, confiable para protegerte</h2>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
