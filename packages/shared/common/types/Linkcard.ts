import type React from "react";

export type LinkCardProps = {
  icon: React.ReactNode;
  title: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
  buttonTarget?: "_blank" | "_self";
  secureLabel?: string;
  backgroundColor?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  borderColor?: string;
};
