export default function Projects() {

    return (

        <section
            id="proyectos"
            className="container py-5"
        >

            <div className="text-center mb-5">

                <h2
                    className="fw-bold text-white mb-3"
                    style={{
                        fontSize: "3rem"
                    }}
                >
                    Proyectos Destacados
                </h2>

                <p
                    style={{
                        color: "#94a3b8",
                        fontSize: "1.1rem"
                    }}
                >
                    Plataformas empresariales modernas
                </p>

            </div>

            <div className="row justify-content-center">

                <div className="col-lg-10">

                    <div
                        className="card border-0 rounded-5 overflow-hidden shadow-lg"
                        style={{
                            background:
                                "linear-gradient(135deg,#0f172a,#111827)",
                            border:
                                "1px solid rgba(255,255,255,.08)"
                        }}
                    >

                        <div className="row g-0">

                            <div className="col-lg-6 p-5">

                                <span
                                    className="badge bg-primary mb-4"
                                >
                                    Fintech
                                </span>

                                <h3
                                    className="text-white fw-bold mb-4"
                                    style={{
                                        fontSize: "2.3rem"
                                    }}
                                >
                                    Plataforma Cooperativa UNIMAS
                                </h3>

                                <p
                                    style={{
                                        color: "#94a3b8",
                                        lineHeight: 1.9
                                    }}
                                >

                                    Sistema financiero cooperativo
                                    desarrollado con arquitectura
                                    moderna basada en React,
                                    .NET 8 y Azure Cloud.

                                </p>

                                <div
                                    className="d-flex gap-2 flex-wrap mb-4"
                                >

                                    <span className="badge bg-dark">
                                        React
                                    </span>

                                    <span className="badge bg-dark">
                                        .NET 8
                                    </span>

                                    <span className="badge bg-dark">
                                        SQL Server
                                    </span>

                                    <span className="badge bg-dark">
                                        Azure
                                    </span>

                                </div>

                                <a
                                    href="https://cooperativa.mandersystems.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary rounded-pill px-4 py-3 fw-bold"
                                >
                                    Ver Plataforma →
                                </a>

                            </div>

                            <div
                                className="col-lg-6 d-flex align-items-center justify-content-center p-5"
                            >

                                <div
                                    className="rounded-5 shadow-lg overflow-hidden"
                                    style={{
                                        background: "#020617",
                                        width: "100%",
                                        minHeight: "320px",
                                        border:
                                            "1px solid rgba(255,255,255,.08)"
                                    }}
                                >

                                    <div
                                        className="p-3 border-bottom"
                                        style={{
                                            borderColor:
                                                "rgba(255,255,255,.08)"
                                        }}
                                    >

                                        <div className="d-flex gap-2">

                                            <div
                                                className="rounded-circle bg-danger"
                                                style={{
                                                    width: 12,
                                                    height: 12
                                                }}
                                            />

                                            <div
                                                className="rounded-circle bg-warning"
                                                style={{
                                                    width: 12,
                                                    height: 12
                                                }}
                                            />

                                            <div
                                                className="rounded-circle bg-success"
                                                style={{
                                                    width: 12,
                                                    height: 12
                                                }}
                                            />

                                        </div>

                                    </div>

                                    <div
                                        className="p-5 text-center"
                                    >

                                        <i
                                            className="bi bi-bank2"
                                            style={{
                                                fontSize: "5rem",
                                                color: "#2563eb"
                                            }}
                                        />

                                        <h4
                                            className="text-white mt-4 fw-bold"
                                        >
                                            Core Cooperativo
                                        </h4>

                                        <p
                                            style={{
                                                color: "#94a3b8"
                                            }}
                                        >
                                            Plataforma financiera moderna
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}