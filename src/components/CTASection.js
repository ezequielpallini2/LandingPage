function CTASection() {
  return (
    <section id="contacto" className="section cta-section">
      <div className="container cta-box">
        <h2>Da el siguiente paso con Intellaut</h2>
        <p>
          Si queres proteger tu auto hoy o evaluar una solucion para flotas, te ayudamos a elegir el camino correcto.
        </p>

        <div className="cta-actions">
          <a href="mailto:ventas@intellaut.com?subject=Solicitud%20de%20demo" className="btn btn-primary">
            Solicitar demo
          </a>
          <a href="mailto:ventas@intellaut.com?subject=Hablar%20con%20asesor" className="btn btn-secondary">
            Hablar con un asesor
          </a>
          <a href="https://wa.me/5492395431460" className="btn btn-whatsapp">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
