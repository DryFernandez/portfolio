import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dary Fernández | Desarrollador Full Stack",
  description: "Portafolio profesional de Dary Fernández, desarrollador de software junior especializado en desarrollo web full stack con React, Node.js, Express y MySQL.",
  keywords: ["portafolio", "desarrollador", "full stack", "programador", "web", "react", "node.js", "Dary Fernández"],
  authors: [{ name: "Dary Fernández" }],
  openGraph: {
    title: "Dary Fernández | Desarrollador Full Stack",
    description: "Portafolio profesional de desarrollo web",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
