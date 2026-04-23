import {
  AssignmentOutlined,
  BadgeOutlined,
  ContactPageOutlined,
  DescriptionOutlined,
  FactCheckOutlined,
  FileOpenOutlined,
  GroupOutlined,
  HowToRegOutlined,
  InsertChartOutlined,
  PaymentsOutlined,
  QuizOutlined,
  ReceiptLongOutlined,
  ReceiptOutlined,
} from "@mui/icons-material";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

import {
  type NavSection,
  type UserRole,
} from "../shared/common/types/Navigation";

const ASPIRANTE_NAV: NavSection[] = [
  {
    key: "aspirantes",
    label: "Aspirantes",
    Icon: GroupOutlined,
    items: [
      {
        label: "Mi información",
        path: "/mi-informacion",
        Icon: ContactPageOutlined,
      },
    ],
  },
  {
    key: "admisiones",
    label: "Admisiones",
    Icon: AssignmentTurnedInOutlinedIcon,
    items: [
      {
        label: "Solicitud de admisión",
        path: "/admisiones/solicitudes",
        Icon: HowToRegOutlined,
      },
      {
        label: "Evaluación Diagnóstica",
        path: "evaluacion-diagnostica",
        Icon: QuizOutlined,
      },
      {
        label: "Examen de Admisión",
        path: "/admisiones/examen-admision",
        Icon: AssignmentOutlined,
      },
    ],
  },
  {
    key: "documentos",
    label: "Documentos",
    Icon: DescriptionOutlined,
    items: [
      {
        label: "Carga de Documentos",
        path: "/documentos/mis-documentos",
        Icon: FileOpenOutlined,
      },
    ],
  },
  {
    key: "pagos",
    label: "Pagos",
    Icon: PaymentsOutlined,
    items: [
      {
        label: "Pago Derecho a Examen",
        path: "/pagos/pago-derecho-examen",
        Icon: ReceiptLongOutlined,
      },
      {
        label: "Pago de Inscripción",
        path: "/pagos/pago-inscripcion",
        Icon: ReceiptOutlined,
      },
    ],
  },
  {
    key: "resultados",
    label: "Resultados",
    Icon: InsertChartOutlined,
    items: [
      {
        label: "Mis Resultados",
        path: "/resultados/mis-resultados",
        Icon: BadgeOutlined,
      },
      {
        label: "Lista de Aceptados",
        path: "/resultados/lista-aceptados",
        Icon: FactCheckOutlined,
      },
    ],
  },
];

export const getNavByRole = (role: UserRole): NavSection[] => {
  switch (role) {
    case "aspirante":
      return ASPIRANTE_NAV;
    default:
      return [];
  }
};
export { NavSection };
