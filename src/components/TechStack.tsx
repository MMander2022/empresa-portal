export default function TechStack() {

    const techs = [
        "React",
        ".NET",
        "Azure",
        "SQL Server",
        "TypeScript",
        "Bootstrap"
    ];

    return (

        <section className="container py-5 text-center">

            <h3 className="text-white fw-bold mb-5">
                Stack Tecnológico
            </h3>

            <div className="d-flex flex-wrap gap-3 justify-content-center">

                {
                    techs.map((t) => (

                        <span
                            key={t}
                            className="badge rounded-pill px-4 py-3"
                            style={{
                                background:
                                    "rgba(37,99,235,.12)",
                                color: "#60a5fa",
                                fontSize: "1rem"
                            }}
                        >
                            {t}
                        </span>

                    ))
                }

            </div>

        </section>

    );

}