import React, { useState } from 'react';
import { LISTA_NORMAS } from '../data/normasData';

export const BlogNormas: React.FC = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('Todas');
  const [busqueda, setBusqueda] = useState<string>('');

  const categorias = ['Todas', 'Protección de Datos Personales', 'Gestión de Riesgos', 'Proyectos / PMO', 'Inteligencia Artificial'];

  const normasFiltradas = LISTA_NORMAS.filter((norma) => {
    const coincideCategoria = categoriaSeleccionada === 'Todas' || norma.entidad === categoriaSeleccionada;
    const coincideTexto =
      norma.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      norma.resumenEjecutivo.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideTexto;
  });

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage:
          "linear-gradient(90deg, rgba(7, 14, 26, 0.94) 0%, rgba(7, 14, 26, 0.82) 55%, rgba(7, 14, 26, 0.68) 100%), linear-gradient(0deg, #070b14 0%, transparent 35%), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2400&q=85')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        color: '#f8fafc',
        padding: '120px 24px 80px'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Cabecera */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 900,
              marginTop: '18px',
              letterSpacing: '-0.02em'
            }}
          >
            Resúmenes de Normas & Insights
          </h1>
        </div>

        {/* Barra de Filtros y Búsqueda */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px'
          }}
        >
          {/* Categorías */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaSeleccionada(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '10px',
                  border: '1px solid',
                  borderColor: categoriaSeleccionada === cat ? '#38bdf8' : 'rgba(255, 255, 255, 0.08)',
                  background: categoriaSeleccionada === cat ? 'rgba(56, 189, 248, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                  color: categoriaSeleccionada === cat ? '#ffffff' : '#94a3b8',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Input Buscador */}
          <input
            type="text"
            placeholder="Buscar norma, tema o palabra clave..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{
              padding: '10px 18px',
              borderRadius: '10px',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              fontSize: '14px',
              outline: 'none',
              minWidth: '280px'
            }}
          />
        </div>

        {/* Listado de Normas */}
        {normasFiltradas.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748b' }}>
            No se encontraron publicaciones con ese criterio.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {normasFiltradas.map((item) => (
              <article
                key={item.id}
                style={{
                  background: 'rgba(13, 22, 41, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#38bdf8',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      padding: '4px 10px',
                      borderRadius: '6px'
                    }}
                  >
                    {item.entidad}
                  </span>
                  <span style={{ fontSize: '13px', color: '#64748b' }}>{item.fecha}</span>
                </div>

                <div className="norma-layout">
                  <div>
                    <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
                      {item.titulo}
                    </h2>

                    <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: 1.6, marginBottom: '12px', textAlign: 'justify' }}>
                      {item.resumenEjecutivo}
                    </p>

                    <p style={{ color: '#83cdbb', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px', textAlign: 'justify' }}>
                      {item.llamadaAccion}
                    </p>

                    <div
                      style={{
                        background: 'rgba(2, 6, 23, 0.6)',
                        borderLeft: '4px solid #38bdf8',
                        padding: '14px 18px',
                        borderRadius: '0 8px 8px 0',
                        marginBottom: '20px'
                      }}
                    >
                      <strong style={{ display: 'block', fontSize: '13px', color: '#38bdf8', marginBottom: '4px' }}>
                        Impacto en Procesos y Sistemas:
                      </strong>
                      <span style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.5 }}>
                        {item.impactoTecnico}
                      </span>
                    </div>

                    <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                      <a
                        href="/docs/Reglamento-Ley-29733-Resumen.pdf"
                        download="Reglamento-Ley-29733-Resumen.pdf"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                          color: '#ffffff',
                          padding: '10px 20px',
                          borderRadius: '10px',
                          textDecoration: 'none',
                          fontSize: '13px',
                          fontWeight: 700,
                          transition: 'opacity 0.2s'
                        }}
                      >
                        <span>Descargar resumen</span>
                        <span aria-hidden="true">↓</span>
                      </a>
                    </div>
                  </div>

                  <img
                    className="norma-illustration"
                    src="/privacy-data-illustration.svg"
                    alt="Ilustración de protección de datos personales"
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};