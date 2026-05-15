export default function Hero() {

    return (

        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "120px 24px 80px",
                position: "relative",
                overflow: "hidden"
            }}
        >

            {/* Background glow */}

            <div
                style={{
                    position: "absolute",
                    top: "-250px",
                    right: "-200px",
                    width: "700px",
                    height: "700px",
                    background:
                        "radial-gradient(circle,#2563eb55 0%,transparent 70%)",
                    filter: "blur(80px)"
                }}
            />

            <div
                style={{
                    width: "100%",
                    maxWidth: "1400px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "80px",
                    flexWrap: "wrap"
                }}
            >

                {/* LEFT */}

                <div
                    style={{
                        flex: "1 1 620px",
                        minWidth: "320px"
                    }}
                >

                    <div
                        style={{
                            marginBottom: "24px"
                        }}
                    >

                        <span
                            style={{
                                background:
                                    "rgba(96,165,250,.12)",
                                color: "#93c5fd",
                                border:
                                    "1px solid rgba(147,197,253,.2)",
                                padding:
                                    "10px 18px",
                                borderRadius: "999px",
                                fontSize: ".9rem"
                            }}
                        >
                            Arquitectura Cloud • Fintech • SaaS
                        </span>

                    </div>

                    <h1
                        style={{
                            fontSize:
                                "clamp(3.5rem,7vw,6.2rem)",
                            lineHeight: 1,
                            fontWeight: 800,
                            color: "white",
                            marginBottom: "32px",
                            letterSpacing: "-4px"
                        }}
                    >

                        Plataformas

                        <br />

                        <span
                            style={{
                                background:
                                    "linear-gradient(135deg,#60a5fa,#2563eb)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor:
                                    "transparent"
                            }}
                        >
                            Empresariales
                        </span>

                        <br />

                        Modernas

                    </h1>

                    <p
                        style={{
                            color: "#cbd5e1",
                            fontSize: "1.25rem",
                            lineHeight: 1.9,
                            maxWidth: "680px",
                            marginBottom: "40px"
                        }}
                    >

                        Desarrollo de soluciones tecnológicas
                        modernas, escalables y seguras para
                        empresas, fintech y cooperativas.

                    </p>

                    {/* BUTTONS */}

                    <div
                        style={{
                            display: "flex",
                            gap: "16px",
                            flexWrap: "wrap"
                        }}
                    >

                        <a
                            href="#proyectos"
                            style={{
                                background:
                                    "linear-gradient(135deg,#2563eb,#1d4ed8)",
                                color: "white",
                                padding:
                                    "16px 34px",
                                borderRadius: "999px",
                                textDecoration: "none",
                                fontWeight: 700,
                                boxShadow:
                                    "0 10px 30px rgba(37,99,235,.35)",
                                transition: ".3s"
                            }}
                        >
                            Ver proyectos
                        </a>

                        <a
                            href="#contacto"
                            style={{
                                background:
                                    "rgba(255,255,255,.06)",
                                color: "white",
                                padding:
                                    "16px 34px",
                                borderRadius: "999px",
                                textDecoration: "none",
                                border:
                                    "1px solid rgba(255,255,255,.08)",
                                backdropFilter:
                                    "blur(10px)",
                                fontWeight: 700
                            }}
                        >
                            Contactar
                        </a>

                    </div>

                </div>

                {/* RIGHT CARD */}

                <div
                    style={{
                        flex: "1 1 420px",
                        minWidth: "320px",
                        display: "flex",
                        justifyContent: "center"
                    }}
                >

                    <div
                        style={{
                            width: "100%",
                            maxWidth: "480px",
                            background:
                                "rgba(15,23,42,.72)",
                            backdropFilter: "blur(20px)",
                            border:
                                "1px solid rgba(255,255,255,.08)",
                            borderRadius: "36px",
                            padding: "32px",
                            boxShadow:
                                "0 25px 60px rgba(0,0,0,.35)"
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                gap: "8px",
                                marginBottom: "24px"
                            }}
                        >

                            <div
                                style={{
                                    width: "12px",
                                    height: "12px",
                                    borderRadius: "50%",
                                    background: "#ef4444"
                                }}
                            />

                            <div
                                style={{
                                    width: "12px",
                                    height: "12px",
                                    borderRadius: "50%",
                                    background: "#f59e0b"
                                }}
                            />

                            <div
                                style={{
                                    width: "12px",
                                    height: "12px",
                                    borderRadius: "50%",
                                    background: "#22c55e"
                                }}
                            />

                        </div>

                        <div
                            style={{
                                background:
                                    "linear-gradient(135deg,#1e293b,#0f172a)",
                                borderRadius: "28px",
                                padding: "28px"
                            }}
                        >

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent:
                                        "space-between",
                                    alignItems: "center",
                                    marginBottom: "28px"
                                }}
                            >

                                <span
                                    style={{
                                        background:
                                            "#2563eb",
                                        color: "white",
                                        padding:
                                            "8px 16px",
                                        borderRadius:
                                            "999px",
                                        fontSize: ".85rem",
                                        fontWeight: 700
                                    }}
                                >
                                    Fintech Core
                                </span>

                                <span
                                    style={{
                                        color: "#94a3b8"
                                    }}
                                >
                                    Online
                                </span>

                            </div>

                            <h3
                                style={{
                                    color: "white",
                                    fontWeight: 700,
                                    marginBottom: "28px"
                                }}
                            >
                                Cooperativa UNIMAS
                            </h3>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns:
                                        "1fr 1fr",
                                    gap: "16px"
                                }}
                            >

                                <div
                                    style={{
                                        background:
                                            "rgba(255,255,255,.05)",
                                        padding: "18px",
                                        borderRadius: "18px"
                                    }}
                                >

                                    <div
                                        style={{
                                            color: "#94a3b8",
                                            marginBottom:
                                                "6px"
                                        }}
                                    >
                                        Frontend
                                    </div>

                                    <div
                                        style={{
                                            color: "white",
                                            fontWeight: 700
                                        }}
                                    >
                                        React + TS
                                    </div>

                                </div>

                                <div
                                    style={{
                                        background:
                                            "rgba(255,255,255,.05)",
                                        padding: "18px",
                                        borderRadius: "18px"
                                    }}
                                >

                                    <div
                                        style={{
                                            color: "#94a3b8",
                                            marginBottom:
                                                "6px"
                                        }}
                                    >
                                        Backend
                                    </div>

                                    <div
                                        style={{
                                            color: "white",
                                            fontWeight: 700
                                        }}
                                    >
                                        .NET 8
                                    </div>

                                </div>

                            </div>

                            <a
                                href="https://cooperativa.mandersystems.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "block",
                                    width: "100%",
                                    marginTop: "32px",
                                    background:
                                        "linear-gradient(135deg,#2563eb,#1d4ed8)",
                                    color: "white",
                                    textAlign: "center",
                                    padding: "16px",
                                    borderRadius: "999px",
                                    textDecoration: "none",
                                    fontWeight: 700,
                                    boxShadow:
                                        "0 10px 30px rgba(37,99,235,.35)"
                                }}
                            >
                                Ingresar a Plataforma
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}