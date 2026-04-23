import type React from "react";

export type InstructionItem = {
  id: string;
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  description: string;
};

export type InstructionsCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  items: InstructionItem[];
};
