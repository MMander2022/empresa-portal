export default function Contact() {

    return (

        <section
            id="contacto"
            className="container py-5"
        >

            <div
                className="rounded-5 p-5 text-center"
                style={{
                    background:
                        "linear-gradient(135deg,#0f172a,#111827)",
                    border:
                        "1px solid rgba(255,255,255,.06)"
                }}
            >

                <span
                    className="badge rounded-pill px-4 py-2 mb-4"
                    style={{
                        background: "rgba(37,99,235,.15)",
                        color: "#60a5fa"
                    }}
                >
                    En Construcción
                </span>

                <h2
                    className="text-white fw-bold mb-4"
                    style={{
                        fontSize: "3rem"
                    }}
                >
                    Contacto Empresarial
                </h2>

                <p
                    className="mx-auto"
                    style={{
                        maxWidth: "700px",
                        color: "#94a3b8",
                        lineHeight: 1.8,
                        fontSize: "1.1rem"
                    }}
                >

                    Próximamente estaremos habilitando
                    canales corporativos para consultoría,
                    transformación digital y desarrollo
                    de plataformas empresariales.

                </p>

            </div>

        </section>

    );

}