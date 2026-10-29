export interface Partner {
  id: number;
  name: string;
  logo: string;
  lightBg?: boolean;
}

export const partnersData: Partner[] = [
  {
    id: 1,
    name: "Congreso de la República",
    logo: "/images/partners/congreso de la republica.jpeg",
  },
  {
    id: 2,
    name: "Cámara de Representantes",
    logo: "/images/partners/camara de respresentantes.jpeg",
  },
  {
    id: 3,
    name: "Organización Gacetas de Colombia",
    logo: "/images/partners/logo-gacetas.png",
  },
  {
    id: 4,
    name: "Red de Prensa Colombiana",
    logo: "/images/partners/logo-rpc.png",
  },
  {
    id: 5,
    name: "Confianza23 Inteligencia y Seguridad",
    logo: "/images/partners/logo-confianza-23.png",
    lightBg: true,
  },
  {
    id: 6,
    name: "Delta IT Solutions",
    logo: "/images/partners/logo-delta-solutions1.png",
    lightBg: true,
  },
  
  {
    id: 7,
    name: "La Voz V.I.P. Radio Online",
    logo: "/images/partners/logo-voz.png",
  },
   {
    id: 8,
    name: "KAI-BOT-ZENT",
    logo: "/images/partners/logo-kai-bot-zent.png",
  },
];
