export default function Services() {

    const servicios = [

        {
            titulo: "Consultoría TI",
            icono: "bi-diagram-3-fill"
        },

        {
            titulo: "Sistemas Financieros",
            icono: "bi-bank2"
        },

        {
            titulo: "Arquitectura Cloud",
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
                    Soluciones tecnológicas empresariales
                </p>

            </div>

            <div className="row g-4">

                {
                    servicios.map((s, i) => (

                        <div
                            className="col-lg-4"
                            key={i}
                        >

                            <div
                                className="rounded-5 p-5 h-100"
                                style={{
                                    background:
                                        "rgba(15,23,42,.65)",
                                    border:
                                        "1px solid rgba(255,255,255,.06)",
                                    backdropFilter:
                                        "blur(14px)"
                                }}
                            >

                                <i
                                    className={`bi ${s.icono}`}
                                    style={{
                                        fontSize: "3rem",
                                        color: "#60a5fa"
                                    }}
                                ></i>

                                <h3
                                    className="text-white fw-bold my-4"
                                >
                                    {s.titulo}
                                </h3>

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

                    ))
                }

            </div>

        </section>

    );

}