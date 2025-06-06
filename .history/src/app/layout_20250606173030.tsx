import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Já pode ir embora?",
  description:
    "Descubra de forma divertida e rápida se você já completou sua jornada de trabalho. Ideal para estagiários, CLTs e PJs. Com ícones animados, confete, som e até Rickroll!",
  icons: {
    icon: "/favicon.ico", // substitua se tiver um favicon diferente
  },
  openGraph: {
    title: "Já pode ir embora?",
    description:
      "Ferramenta divertida para saber se o seu expediente já terminou. Estagiário, CLT ou PJ? Descubra agora com estilo.",
    url: "https://ja-pode-ir-embora.vercel.app",
    siteName: "Já pode ir embora?",
    images: [
      {
        url: "https://i.imgur.com/y1UytS4.gif", // ou uma imagem .jpg/.png otimizada
        width: 1200,
        height: 630,
        alt: "Já pode ir embora?",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Já pode ir embora?",
    description:
      "Estagiário, CLT ou PJ? Descubra se seu expediente já acabou — com animações, som e humor!",
    images: ["https://i.imgur.com/y1UytS4.gif"],
    creator: "@samuelluzsantana", // se tiver Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
