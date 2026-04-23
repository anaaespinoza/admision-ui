import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import "@/app/globals.css";
import { Navbar } from "@/packages/shared/common";
import RightPanel from "@/packages/shared/common/rightpanel/Rightpanel";
import Sidebar from "@/packages/shared/common/sidebar/Sidebar";
import {
  madaniThin,
  madaniExtraLight,
  madaniLight,
  madaniRegular,
  madaniMedium,
  madaniSemiBold,
  madaniBold,
  madaniExtraBold,
  madaniBlack,
} from "@/packages/shared/themes/fonts";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convocatoria",
  description: "Convocatoria Admision TSJ",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const fontVariables = [
    madaniThin.variable,
    madaniExtraLight.variable,
    madaniLight.variable,
    madaniRegular.variable,
    madaniMedium.variable,
    madaniSemiBold.variable,
    madaniBold.variable,
    madaniExtraBold.variable,
    madaniBlack.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontVariables}>
      <body style={{ margin: 0 }}>
        <AppRouterCacheProvider>
          <Navbar />
          <div style={{ paddingTop: "80px" }}>
            <Sidebar>{children}</Sidebar>
            <RightPanel />
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
