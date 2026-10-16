import { Mail, Phone } from "lucide-react";

export default function Contact() {
    return (
            <section id="contacto" className="container py-5">
                <div
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
                        Contacto
                    </h2>

                    <div style={{ display: "grid", gap: "14px" }}>
                        <a
                            href="tel:+51981693349"
                            aria-label="Llamar al 981 693 349"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "14px",
                                width: "fit-content",
                                maxWidth: "100%",
                                color: "#e3eaf2",
                                fontSize: "20px",
                                lineHeight: 1.4,
                                textDecoration: "none"
                            }}
                        >
                            <Phone aria-hidden="true" size={30} strokeWidth={2.5} color="#ffffff" />
                            +51 981 693 349
                        </a>
                        <a
                            href="mailto:informes@mandersystem.com"
                            aria-label="Enviar correo a informes@mandersystem.com"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "14px",
                                width: "fit-content",
                                maxWidth: "100%",
                                color: "#e3eaf2",
                                fontSize: "20px",
                                lineHeight: 1.4,
                                textDecoration: "none",
                                overflowWrap: "anywhere"
                            }}
                        >
                            <Mail aria-hidden="true" size={30} strokeWidth={2.5} color="#ffffff" />
                            informes@mandersystem.com
                        </a>
                    </div>
                </div>
            </section>
    );
}