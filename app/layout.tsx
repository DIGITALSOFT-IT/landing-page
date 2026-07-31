import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Jurytech Solutions S.A.S. | Derecho, Tecnología y Estrategia",
  description: "Soluciones integrales que articulan el conocimiento jurídico, tecnológico y estratégico para el fortalecimiento institucional y la gestión inteligente del riesgo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-[#0A111E] text-slate-100">
        {children}
      </body>
    </html>
  );
}