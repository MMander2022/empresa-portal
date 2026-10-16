import { useState } from "react";

const serviceAreas = [
  {
    id: "proyectos",
    label: "Proyectos + IA",
    focus: [
      "Automatización empresarial",
      "Planificación y dirección de proyectos",
    ]
  },
  {
    id: "riesgos",
    label: "Riesgo Operacional",
    focus: [
      {
        title: "Gestión del Riesgo Operacional",
        details: [
          {
            title: "Diagnóstico y cumplimiento regulatorio",
            description:
              "Evaluación de brechas, nivel de madurez, cumplimiento regulatorio y elaboración de planes de adecuación."
          },
          {
            title: "Implementación de la gestión de riesgos operacionales",
            description:
              "Metodologías, matrices de riesgos y controles, KRI, apetito y tolerancia, seguimiento de planes de acción."
          },
          {
            title: "Gestión de eventos de pérdida operacional",
            description:
              "Diseño de bases de datos, clasificación de eventos, análisis de causas raíz, estadísticas e indicadores de pérdidas."
          },
          {
            title: "Automatización y analítica de riesgos",
            description:
              "Reportes automatizados, tableros de control, indicadores y herramientas de apoyo a la toma de decisiones."
          }
        ]
      }
    ]
  },
  {
    id: "datos",
    label: "Protección de Datos Personales",
    focus: ["Protección de Datos Personales"]
  },
] as const;

type ServiceId = (typeof serviceAreas)[number]["id"];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<ServiceId>("proyectos");
  const activeService = serviceAreas.find((service) => service.id === activeTab)!;

  return (
    <section
      id="inicio"
      style={{
        minHeight: "90vh",
        padding: "120px clamp(24px, 6vw, 80px) 32px",
        backgroundImage:
          "linear-gradient(90deg, rgba(7, 14, 26, 0.94) 0%, rgba(7, 14, 26, 0.82) 55%, rgba(7, 14, 26, 0.68) 100%), linear-gradient(0deg, #070b14 0%, transparent 35%), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2400&q=85')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#f4f7fa"
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto 44px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 800,
            lineHeight: 1.08,
            marginBottom: "24px",
            color: "#f4f7fa"
          }}
        >
          Gestión de Riesgos, <br />
          Proyectos e{" "}
          <span style={{ color: "#65d2bd" }}>IA Aplicada</span>
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: "#b1bdc9",
            marginBottom: "36px",
            maxWidth: "760px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          Ayudamos a las organizaciones a gestionar sus riesgos y transformar
          sus procesos mediante soluciones de inteligencia artificial,
          alineadas con sus necesidades de negocio y basadas en las mejores
          prácticas de seguridad y gestión responsable de la IA.
        </p>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <a
            href="#contacto"
            className="brand-button brand-button--primary"
            style={{
              padding: "14px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px"
            }}
          >
            Agendar asesoría
          </a>
          <a
            href="#servicios"
            className="brand-button brand-button--secondary"
            style={{
              padding: "14px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px"
            }}
          >
            Conocer servicios
          </a>
        </div>
      </div>

      <div
        id="servicios"
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          padding: "clamp(22px, 4vw, 40px)",
          background: "rgba(5, 12, 23, 0.78)",
          border: "1px solid rgba(174, 196, 211, 0.2)",
          borderRadius: "10px",
          boxShadow: "0 24px 64px rgba(0, 0, 0, 0.24)"
        }}
      >
        <p
          style={{
            margin: "0 0 18px",
            color: "#f4f7fa",
            fontSize: "30px",
            fontWeight: 700,
            lineHeight: 1.2,
            textAlign: "center"
          }}
        >
          Servicios
        </p>

        <div
          role="tablist"
          aria-label="Servicios"
          style={{
            display: "flex",
            gap: "8px",
            borderBottom: "1px solid rgba(174, 196, 211, 0.2)",
            marginBottom: "24px",
            justifyContent: "center"
          }}
        >
          {serviceAreas.map((service) => {
            const isActive = activeTab === service.id;

            return (
              <button
                key={service.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(service.id)}
                className="brand-tab"
                style={{
                  flex: "1 1 220px",
                  padding: "12px 14px",
                  border: `1px solid ${isActive ? "rgba(101, 210, 189, 0.5)" : "transparent"}`,
                  borderBottom: isActive ? "3px solid #65d2bd" : "3px solid transparent",
                  borderRadius: "6px 6px 0 0",
                  background: isActive ? "rgba(101, 210, 189, 0.12)" : "transparent",
                  color: isActive ? "#f4f7fa" : "#b1bdc9",
                  cursor: "pointer",
                  fontSize: "clamp(15px, 2vw, 17px)",
                  fontWeight: isActive ? 700 : 500
                }}
              >
                {service.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          aria-label={activeService.label}
          style={{ maxWidth: "900px", margin: "0 auto", padding: "4px 0" }}
        >
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: "12px",
              listStyle: "none",
              margin: 0,
              padding: 0,
              marginBottom: activeTab === "proyectos" ? "24px" : 0
            }}
          >
            {activeService.focus.map((item) => (
              <li
                key={typeof item === "string" ? item : item.title}
                style={{
                  gridColumn: typeof item !== "string" && "details" in item ? "1 / -1" : undefined,
                  display: typeof item !== "string" && "details" in item ? "block" : "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  color: "#d2dbe3",
                  fontSize: "17px",
                  lineHeight: 1.5,
                  padding: "14px 16px",
                  background: "rgba(255, 255, 255, 0.045)",
                  border: "1px solid rgba(174, 196, 211, 0.12)",
                  borderRadius: "6px"
                }}
              >
                {typeof item === "string" ? (
                  <>
                    <span
                      aria-hidden="true"
                      style={{
                        width: "8px",
                        height: "8px",
                        flex: "0 0 8px",
                        marginTop: "8px",
                        background: "#65d2bd"
                      }}
                    />
                    {item}
                  </>
                ) : (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                      gap: "24px",
                      alignItems: "center"
                    }}
                  >
                    <div>
                      <h3 style={{ margin: "0 0 14px", color: "#f4f7fa", fontSize: "19px" }}>
                        {item.title}
                      </h3>
                      <ol style={{ display: "grid", gap: "16px", margin: 0, paddingLeft: "22px" }}>
                        {item.details.map((detail) => (
                          <li key={detail.title} style={{ paddingLeft: "4px" }}>
                            <strong style={{ color: "#f4f7fa" }}>{detail.title}</strong>
                            <p style={{ margin: "4px 0 0", color: "#b1bdc9", fontSize: "15px" }}>
                              {detail.description}
                            </p>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <img
                      src="/operational-risk-categories.png"
                      alt="Infografía de riesgo operacional: personas, procesos, sistemas y eventos externos"
                      style={{
                        display: "block",
                        width: "100%",
                        maxHeight: "360px",
                        objectFit: "contain",
                        borderRadius: "6px"
                      }}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}