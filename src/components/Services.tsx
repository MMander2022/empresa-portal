export default function Services() {

    const servicios = [

        {
            titulo: "Consultoría TI",
            descripcion:
                "Arquitectura empresarial y transformación digital.",
            icono: "bi-diagram-3-fill"
        },

        {
            titulo: "Sistemas Financieros",
            descripcion:
                "Plataformas modernas para cooperativas y fintech.",
            icono: "bi-bank2"
        },

        {
            titulo: "Cloud & Azure",
            descripcion:
                "Infraestructura escalable y segura en la nube.",
            icono: "bi-cloud-fill"
        }

    ];

    return (

        <section
            id="servicios"
            className="container py-5"
        >

            <div className="text-center mb-5">

                <h2
                    className="text-white fw-bold mb-3"
                    style={{
                        fontSize: "3rem"
                    }}
                >
                    Servicios
                </h2>

                <p
                    style={{
                        color: "#94a3b8"
                    }}
                >
                    Soluciones empresariales modernas
                </p>

            </div>

            <div className="row g-4">

                {
                    servicios.map((s, i) => (

                        <div
                            className="col-md-4"
                            key={i}
                        >

                            <div
                                className="rounded-5 p-5 h-100 position-relative overflow-hidden"
                                style={{
                                    background:
                                        "linear-gradient(135deg,#0f172a,#111827)",
                                    border:
                                        "1px solid rgba(255,255,255,.06)"
                                }}
                            >

                                <div
                                    className="mb-4"
                                >

                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded-4"
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            background:
                                                "rgba(37,99,235,.12)"
                                        }}
                                    >

                                        <i
                                            className={`${s.icono}`}
                                            style={{
                                                fontSize: "2rem",
                                                color: "#60a5fa"
                                            }}
                                        ></i>

                                    </div>

                                </div>

                                <h4
                                    className="text-white fw-bold mb-3"
                                >
                                    {s.titulo}
                                </h4>

                                <p
                                    style={{
                                        color: "#94a3b8",
                                        lineHeight: 1.8
                                    }}
                                >
                                    {s.descripcion}
                                </p>

                                <div className="mt-4">

                                    <span
                                        className="badge rounded-pill px-3 py-2"
                                        style={{
                                            background:
                                                "rgba(245,158,11,.12)",
                                            color: "#fbbf24"
                                        }}
                                    >
                                        En construcción
                                    </span>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

        </section>

    );

}