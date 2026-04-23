import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capacidades",
  description: "Encuesta de capacidades motrices para estudiantes",
};

export default function CapacidadesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
