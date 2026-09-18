export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconImage?: string;
  tag?: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  iconName: string;
  description: string;
  services: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "dev",
    label: "Desarrollo & Tecnología",
    iconName: "Code",
    description: "Soluciones tecnológicas a la medida, plataformas LegalTech, IA y modernización de infraestructura.",
    services: [
      { id: 1, title: "Desarrollo de Software a la Medida", description: "Diseño y construcción de soluciones adaptadas a las necesidades específicas de la organización.", icon: "Cpu", iconImage: "/images/services/icono1.png" },
      { id: 2, title: "Plataformas LegalTech", description: "Gestión jurídica, optimización de procesos legales, cumplimiento normativo y administración de información.", icon: "Gavel", iconImage: "/images/services/icono2.png" },
      { id: 3, title: "Aplicaciones Web y Móviles", description: "Diseño e implementación de aplicaciones modernas, seguras y escalables para Web, Android e iOS.", icon: "Smartphone", iconImage: "/images/services/icono5.png" },
      { id: 4, title: "Automatización de Procesos Jurídicos", description: "Digitalización de tareas repetitivas para reducir errores y agilizar la gestión institucional.", icon: "Cog", iconImage: "/images/services/icono6.png" },
      { id: 5, title: "Integración de Inteligencia Artificial", description: "Modelos de IA para automatizar análisis de información y optimización de decisiones.", icon: "BrainCircuit", iconImage: "/images/services/icono7.png" },
      { id: 6, title: "Firma Electrónica y Expedientes Digitales", description: "Mecanismos avanzados de firma electrónica y gestión integral de expedientes documentales.", icon: "FileSignature", iconImage: "/images/services/icono8.png" },
      { id: 7, title: "Sistemas de Inteligencia Legislativa", description: "Plataformas para el monitoreo, análisis y seguimiento de iniciativas regulatorias.", icon: "Landmark", iconImage: "/images/services/icono9.png" },
      { id: 8, title: "Procesamiento Documental y OCR", description: "Digitalización y extracción automatizada de texto legal e institucional mediante OCR.", icon: "ScanText", iconImage: "/images/services/icono10.png" },
      { id: 9, title: "Desarrollo de Asistentes Virtuales y Chatbots", description: "Soluciones conversacionales inteligentes para atención al usuario y consultas automáticas.", icon: "BotMessageSquare", iconImage: "/images/services/icono11.png" },
      { id: 10, title: "Soluciones Cloud y Arquitectura SaaS", description: "Migración, despliegue y administración de infraestructuras de alta disponibilidad.", icon: "CloudCog", iconImage: "/images/services/icono14.png" },
    ]
  },
  {
    id: "cyber",
    label: "Ciberseguridad",
    iconName: "Shield",
    description: "Protección de activos digitales, auditorías ISO, pruebas de vulnerabilidad y gestión de incidentes.",
    services: [
      { id: 1, title: "Auditoría e Implementación ISO 27001", description: "Adopción de Sistemas de Gestión de Seguridad de la Información (SGSI) alineados a estándares internacionales.", icon: "ShieldCheck", iconImage: "/images/services/icono15.png" },
      { id: 2, title: "Auditoría e Implementación ISO 27032", description: "Estrategias globales de ciberseguridad para fortalecer la defensa en entornos digitales complejos.", icon: "Shield" },
      { id: 3, title: "Pruebas de Penetración (Pentesting)", description: "Simulación de ataques controlados sobre aplicaciones e infraestructura para descubrir brechas.", icon: "Bug" },
      { id: 4, title: "Evaluación de Vulnerabilidades", description: "Identificación, análisis y priorización de riesgos en redes y software corporativo.", icon: "SearchCheck" },
      { id: 5, title: "Inteligencia OSINT (Open Source Intelligence)", description: "Recopilación y análisis de información en fuentes abiertas para mitigación de riesgos.", icon: "Eye" },
      { id: 6, title: "Operación SOC y Caza de Amenazas (Threat Hunting)", description: "Monitoreo continuo 24/7 y búsqueda proactiva de actividades maliciosas evadidas.", icon: "Radar" },
      { id: 7, title: "Gestión y Respuesta a Incidentes (CSIRT / CERT)", description: "Capacidades técnicas de contención, erradicación y recuperación frente a ciberataques.", icon: "Siren" },
      { id: 8, title: "Continuidad del Negocio (BCP / DRP)", description: "Garantía de operación crítica y planes de recuperación ante contingencias tecnológicas.", icon: "LifeBuoy" },
    ]
  },
  {
    id: "legal",
    label: "Soluciones Jurídicas",
    iconName: "Scale",
    description: "Asesoría especializada, prevención de riesgos y acompañamiento en derecho corporativo y administrativo.",
    services: [
      { id: 1, title: "Derecho Comercial y Societario", description: "Constitución de sociedades, reformas estatutarias, actas y acuerdos de accionistas.", icon: "Scale" },
      { id: 2, title: "Derecho Administrativo y Contratación Estatal", description: "Recursos administrativos, conceptos de contratación y observaciones a procesos contractuales.", icon: "Landmark" },
      { id: 3, title: "Derecho Penal Corporativo", description: "Conceptos jurídicos, análisis de riesgos penales para empresas y elaboración de denuncias/querellas.", icon: "Gavel" },
      { id: 4, title: "Derecho Laboral y Cumplimiento (Compliance)", description: "Elaboración de contratos, reglamentos internos, manuales disciplinarios y auditorías.", icon: "ClipboardCheck" },
      { id: 5, title: "Derecho Inmobiliario y Contractual", description: "Estudios de títulos, promesas de compraventa, acuerdos de confidencialidad y contratos.", icon: "Building2" },
      { id: 6, title: "Mecanismos de Solución de Conflictos", description: "Acompañamiento estratégico en procesos de negociación, conciliación y mediación.", icon: "Handshake" },
      { id: 7, title: "Derecho de Consumo y Migratorio", description: "Protección al consumidor, gestión documental de visados y cumplimiento normativo.", icon: "IdCard" },
    ]
  }
];