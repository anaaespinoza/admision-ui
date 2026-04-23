import { type SvgIconComponent } from "@mui/icons-material";
export type NavItem = {
  label: string;
  path: string;
  Icon: SvgIconComponent;
};

export type NavSection = {
  key: string;
  label: string;
  Icon: SvgIconComponent;
  items: NavItem[];
};

export type UserRole = "aspirante" | "alumno" | "docente" | "admin";
