export default function Projects() {
    return (
            <section id="proyectos" className="container py-5">
                <article
                    style={{
                        maxWidth: "1080px",
                        margin: "0 auto",
                        padding: "clamp(24px, 5vw, 48px)",
                        background: "rgba(5, 12, 23, 0.78)",
                        border: "1px solid rgba(174, 196, 211, 0.2)",
                        borderRadius: "10px",
                        boxShadow: "0 24px 64px rgba(0, 0, 0, 0.24)"
                    }}
                >
                    <h2
                        style={{
                            margin: "0 0 28px",
                            color: "#f4f7fa",
                            fontSize: "30px",
                            fontWeight: 700,
                            lineHeight: 1.2,
                            textAlign: "center"
                        }}
                    >
                        Proyecto Destacado
                    </h2>

                    <h3
                        style={{
                            margin: "0 0 16px",
                            color: "#f4f7fa",
                            fontSize: "clamp(1.5rem, 2.7vw, 2rem)",
                            lineHeight: 1.25
                        }}
                    >
                        Sistema UNIMAS
                    </h3>

                    <p
                        style={{
                            maxWidth: "760px",
                            margin: "0 0 24px",
                            color: "#b1bdc9",
                            lineHeight: 1.7,
                            fontSize: "17px",
                            textAlign: "justify"
                        }}
                    >
                        Solución financiera digital desarrollada con<br />
                        una arquitectura moderna basada en tecnologías<br />
                        web y servicios en la nube.
                    </p>

                    <div
                        aria-label="Tecnologías del proyecto"
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "10px",
                            marginBottom: "28px"
                        }}
                    >
                        {["React", ".NET 8", "Azure", "SQL Server"].map((technology) => (
                            <span
                                key={technology}
                                style={{
                                    padding: "8px 13px",
                                    background: "rgba(255, 255, 255, 0.06)",
                                    border: "1px solid rgba(174, 196, 211, 0.12)",
                                    borderRadius: "6px",
                                    color: "#d2dbe3",
                                    fontSize: "15px"
                                }}
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    <a
                        href="https://cooperativa.mandersystems.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brand-button brand-button--primary"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "10px",
                            maxWidth: "100%",
                            padding: "15px 24px",
                            borderRadius: "6px",
                            textDecoration: "none",
                            fontSize: "17px",
                            fontWeight: 800,
                            textAlign: "center"
                        }}
                    >
                        Conocer Sistema UNIMAS <span aria-hidden="true">↗</span>
                    </a>
                </article>
            </section>
    );
}