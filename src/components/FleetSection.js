const plans = [
  {
    name: 'Starter',
    price: 'USD 99',
    description: 'Ideal para comenzar con visibilidad operativa.',
    features: [
      'Instalacion base',
      'Dashboard estandar',
      '1 integracion',
      'Soporte por email'
    ]
  },
  {
    name: 'Pro',
    price: 'USD 249',
    featured: true,
    description: 'El plan recomendado para crecimiento sostenido.',
    features: [
      'Todo lo incluido en Starter',
      'Integraciones ilimitadas',
      'Reportes avanzados',
      'Preparado para IA futura',
      'API abierta',
      'Soporte prioritario'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Contactar',
    description: 'Solucion dedicada para operaciones de alta exigencia.',
    features: [
      'Arquitectura dedicada',
      'Infraestructura optimizada',
      'Integracion personalizada',
      'SLA garantizado'
    ]
  }
];

function FleetSection() {
  return (
    <section id="flotas" className="section fleet-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Fase 2 - Flotas</p>
          <h2>Tambien acompanamos operaciones profesionales</h2>
          <p className="section-supporting">
            Para empresas con flotas, ofrecemos camaras Howen V3 y V8 junto a una plataforma escalable
            con integraciones y preparacion para capacidades de IA futura.
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`plan-card${plan.featured ? ' plan-card-featured' : ''}`}
            >
              {plan.featured ? <span className="plan-badge">Mas elegido</span> : null}
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <p className="plan-price">{plan.price}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FleetSection;
