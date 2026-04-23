import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HOHAYÔ Collection | Moda Feminina",
  description:
    "Moda feminina com tecidos premium e caimento perfeito. Vestidos, blusas, calças, conjuntos e linha senhora. Atacado e varejo para todo o Brasil.",
  keywords:
    "moda feminina, roupas femininas, vestidos, blusas, calças, conjuntos, atacado, HOHAYÔ",
  openGraph: {
    title: "HOHAYÔ Collection | Moda Feminina",
    description:
      "Moda feminina com tecidos premium e caimento perfeito. Peças versáteis para todas as ocasiões.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
