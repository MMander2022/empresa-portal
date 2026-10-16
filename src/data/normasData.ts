export interface NormaPublicacion {
  id: string;
  titulo: string;
  entidad: 'Protección de Datos Personales' | 'Gestión de Riesgos' | 'Proyectos / PMO' | 'Inteligencia Artificial';
  fecha: string;
  resumenEjecutivo: string;
  llamadaAccion: string;
  impactoTecnico: string;
}

export const LISTA_NORMAS: NormaPublicacion[] = [
  {
    id: 'norma-sbs-resolucion-2026',
    titulo: 'Ley N° 29733 · D.S. N° 016-2024-JUS Nuevo Reglamento de la Ley de Protección de Datos Personales',
    entidad: 'Protección de Datos Personales',
    fecha: '05 de Octubre, 2026',
    resumenEjecutivo: 'El D.S. N.º 016-2024-JUS aprobó el nuevo Reglamento de la Ley N.º 29733, vigente desde el 30 de marzo de 2025. Refuerza los deberes de información y consentimiento, la respuesta ante incidentes de seguridad y la designación de un Oficial de Datos Personales cuando corresponda.',
    llamadaAccion: 'Descarga el resumen y revisa los puntos que tu organización debería considerar para fortalecer su cumplimiento en protección de datos personales.',
    impactoTecnico: 'Revisar formularios y avisos de privacidad; mantener evidencia de consentimientos, finalidades, transferencias y plazos de conservación; y establecer procesos para atender solicitudes de titulares, registrar incidentes y evaluar notificaciones dentro de los plazos reglamentarios. También se debe evaluar si corresponde designar un Oficial de Datos Personales e inscribir o actualizar los bancos de datos personales.',
  }
];