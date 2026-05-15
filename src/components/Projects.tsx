export default function Projects() {

    return (

        <section
            id="proyectos"
            className="container py-5"
        >

            <div className="text-center mb-5">

                <h2
                    className="text-white fw-bold mb-3"
                    style={{
                        fontSize: "3rem"
                    }}
                >
                    Proyecto Destacado
                </h2>

            </div>

            <div
                className="rounded-5 overflow-hidden"
                style={{
                    background:
                        "linear-gradient(135deg,#0f172a,#111827)",
                    border:
                        "1px solid rgba(255,255,255,.06)",
                    boxShadow:
                        "0 30px 60px rgba(0,0,0,.35)"
                }}
            >

                <div className="row g-0 align-items-center">

                    <div className="col-lg-6 p-5">

                        <span
                            className="badge bg-primary mb-4"
                        >
                            Fintech
                        </span>

                        <h2
                            className="text-white fw-bold mb-4"
                        >
                            Plataforma Cooperativa UNIMAS
                        </h2>

                        <p
                            style={{
                                color: "#94a3b8",
                                lineHeight: 1.9,
                                fontSize: "1.1rem"
                            }}
                        >

                            Sistema financiero cooperativo
                            desarrollado con arquitectura moderna
                            basada en React, .NET 8 y Azure Cloud.

                        </p>

                        <div
                            className="d-flex gap-2 flex-wrap my-4"
                        >

                            {
                                ["React", ".NET 8", "Azure", "SQL Server"]
                                    .map((t) => (

                                        <span
                                            key={t}
                                            className="badge rounded-pill px-3 py-2"
                                            style={{
                                                background:
                                                    "rgba(255,255,255,.06)",
                                                color: "#cbd5e1"
                                            }}
                                        >
                                            {t}
                                        </span>

                                    ))
                            }

                        </div>

                        <a
                            href="https://cooperativa.mandersystems.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold"
                        >
                            Ver Plataforma
                        </a>

                    </div>

                    <div className="col-lg-6 p-5">

                        <div
                            className="rounded-5 p-4"
                            style={{
                                background:
                                    "rgba(255,255,255,.04)",
                                border:
                                    "1px solid rgba(255,255,255,.06)"
                            }}
                        >

                            <img
                                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
                                alt="dashboard"
                                className="img-fluid rounded-4"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}