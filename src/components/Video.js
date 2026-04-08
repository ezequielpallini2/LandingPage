function Video() {
  return (
    <section className="section video-section" aria-labelledby="video-section-title">
      <div className="container video-layout">
        <div className="video-copy">
          <p className="eyebrow">Casos reales</p>
          <h2 id="video-section-title">Lo que una dashcam puede evitar</h2>
          <p className="video-lead">
            En segundos, una situación normal puede convertirse en un problema legal o económico.
            Tener registro de lo que pasó cambia todo.
          </p>
          <ul className="video-list">
            <li>Accidentes donde la culpa no es clara</li>
            <li>Intentos de fraude o estafas</li>
            <li>Discusiones sin pruebas</li>
          </ul>
          <a href="#contacto" className="btn btn-primary">
            Quiero estar protegido
          </a>
        </div>

        <div className="video-frame">
          <div className="video-embed video-embed--square">
            <iframe
              src="https://www.youtube.com/embed/FCmQAtpAmWU"
              title="Casos reales dashcam"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;
