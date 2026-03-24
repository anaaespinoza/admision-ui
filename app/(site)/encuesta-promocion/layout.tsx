import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promoción",
  description: "Encuesta de promoción para estudiantes",
};

export default function PromocionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
