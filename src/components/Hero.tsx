export default function Hero() {

    return (

        <section
            className="container py-5 text-center"
            style={{
                minHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}
        >

            <div
                className="mb-4"
            >

                <span
                    className="badge rounded-pill px-4 py-2"
                    style={{
                        background: "rgba(37,99,235,.15)",
                        color: "#60a5fa",
                        border: "1px solid rgba(96,165,250,.2)"
                    }}
                >
                    Arquitectura Empresarial • Cloud • Fintech
                </span>

            </div>

            <h1
                className="fw-bold text-white mb-4"
                style={{
                    fontSize: "clamp(3rem,7vw,6rem)",
                    lineHeight: 1.05
                }}
            >

                Soluciones
                <br />

                <span
                    style={{
                        background:
                            "linear-gradient(135deg,#60a5fa,#2563eb)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                >
                    Tecnológicas
                </span>

                <br />

                Empresariales

            </h1>

            <p
                className="mx-auto mb-5"
                style={{
                    maxWidth: "850px",
                    color: "#94a3b8",
                    fontSize: "1.3rem",
                    lineHeight: 1.8
                }}
            >

                Desarrollo de plataformas modernas,
                escalables y seguras para empresas,
                cooperativas y transformación digital.

            </p>

            <div
                className="d-flex gap-3 justify-content-center flex-wrap"
            >
<a
    href="#proyectos"
    className="text-decoration-none"
>

    <div
        className="d-inline-flex align-items-center gap-3 px-4 py-3 rounded-pill"
        style={{
            background:
                "rgba(255,255,255,.04)",
            border:
                "1px solid rgba(255,255,255,.08)",
            backdropFilter: "blur(12px)",
            transition: "all .25s ease",
            cursor: "pointer"
        }}
    >

        <div
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
                width: "42px",
                height: "42px",
                background:
                    "linear-gradient(135deg,#2563eb,#1d4ed8)"
            }}
        >

            <i
                className="bi bi-grid-1x2-fill text-white"
            ></i>

        </div>

        <div className="text-start">

            <div
                style={{
                    color: "#e2e8f0",
                    fontWeight: 700,
                    fontSize: ".95rem"
                }}
            >
                Explorar Proyectos
            </div>

            <div
                style={{
                    color: "#94a3b8",
                    fontSize: ".8rem"
                }}
            >
                Plataformas empresariales modernas
            </div>

        </div>

        <i
            className="bi bi-arrow-down"
            style={{
                color: "#60a5fa"
            }}
        ></i>

    </div>

</a>

                <button
                    className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill"
                >
                    Ver Proyectos
                </button>

            </div>

        </section>

    );

}