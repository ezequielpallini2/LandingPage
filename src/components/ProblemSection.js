function ProblemSection() {
  return (
    <section className="section problem-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">El problema</p>
          <h2>Sin pruebas, un accidente puede salirte muy caro</h2>
        </div>

        <div className="problem-grid">
          <article className="problem-item">
            <h3>Versiones cruzadas</h3>
            <p>Cuando cada parte cuenta algo distinto, demostrar la verdad se vuelve dificil.</p>
          </article>
          <article className="problem-item">
            <h3>Problemas con seguros</h3>
            <p>Sin evidencia clara, los reclamos se alargan y podes terminar perdiendo dinero.</p>
          </article>
          <article className="problem-item">
            <h3>Tiempo y estres</h3>
            <p>Resolver un choque sin respaldo te hace gastar energia, tiempo y tranquilidad.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
