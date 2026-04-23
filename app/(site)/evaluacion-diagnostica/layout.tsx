import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evalución",
  description: "Evaluacion Diagnóstica",
};

export default function PromocionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
