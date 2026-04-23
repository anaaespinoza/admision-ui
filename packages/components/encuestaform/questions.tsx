import {
  AddCircleOutlineOutlined,
  CampaignOutlined,
  EmojiObjectsOutlined,
  Headset,
  HistoryEdu,
  MapOutlined,
  Message,
  MoveToInboxOutlined,
  Phonelink,
  StarRate,
} from "@mui/icons-material";

import type { Question } from "@/packages/shared/common/types/question";

export const questions: Question[] = [
  {
    id: "1",
    title: "¿País, estado y municipio de procedencia?",
    iconColor: "var(--blue)",
    icon: <MapOutlined sx={{ color: "var(--blue)" }} />,
    components: [
      {
        type: "select",
        label: "País",
        id: "pais",
        options: [{ label: "México", value: "mx" }],
      },
      {
        type: "select",
        label: "Estado",
        id: "estado",

        options: [
          { label: "Jalisco", value: "jalisco" },
          { label: "Nuevo León", value: "nuevo_leon" },
          { label: "Quintana Roo", value: "quintana_roo" },
        ],
      },
      {
        type: "select",
        label: "Municipio",
        id: "municipio",
        options: [
          { label: "Guadalajara", value: "gdl" },
          { label: "Zapopan", value: "zapopan" },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "¿Bachillerato de procedencia?",
    iconColor: "var(--green)",
    icon: <HistoryEdu sx={{ color: "var(--green)" }} />,
    components: [
      {
        type: "select",
        id: "bachillerato",
        options: [
          { label: "COBAEJ", value: "cobaej" },
          { label: "CETis", value: "cetis" },
          { label: "UDG", value: "udg" },
          { label: "Cesitej", value: "cesitej" },
          { label: "Otro", value: "otro" },
        ],
        allowOther: true,
      },
    ],
  },
  {
    id: "3",
    title: "¿Cuál fue tu primera opción de estudios?",
    iconColor: "var(--orange)",
    icon: <StarRate sx={{ color: "var(--orange)" }} />,
    components: [
      {
        type: "select",
        id: "primera_opcion",
        options: [
          { label: "Instituto Tecnológico Superior de Jalisco", value: "itsj" },
          { label: "Universidad de Guadalajara", value: "udg" },
          { label: "Otra", value: "otra" },
        ],
        allowOther: true,
      },
    ],
  },
  {
    id: "4",
    title: "¿Cómo conociste al TSJ?",
    iconColor: "var(--navyBlue)",
    icon: <CampaignOutlined sx={{ color: "var(--navyBlue)" }} />,
    components: [
      {
        type: "select",
        id: "conocimiento",
        options: [
          { label: "Visita a tu bachillerato", value: "visita" },
          {
            label: "Recomendación de una persona o familiar",
            value: "recomendacion",
          },
          { label: "Televisión", value: "tv" },
          { label: "Radio", value: "radio" },
          { label: "Redes sociales", value: "social" },
          { label: "Visita al Tec", value: "visita_tec" },
          { label: "Google", value: "google" },
          { label: "Página web", value: "web" },
          { label: "Otra", value: "otra" },
        ],
        allowOther: true,
      },
    ],
  },
  {
    id: "5",
    title: "¿Factor más importante para elegir TSJ?",
    iconColor: "var(--red)",
    icon: <EmojiObjectsOutlined sx={{ color: "var(--red)" }} />,
    components: [
      {
        type: "select",
        id: "factor",
        options: [
          { label: "Familiares", value: "familia" },
          { label: "Amigos estudiando aqui", value: "amigos" },
          { label: "Influencia de mis Padres", value: "padres" },
          { label: "Precio", value: "precio" },
          { label: "Prestigio", value: "prestigio" },
          { label: "Plan de estudios", value: "plan" },
          { label: "Ambiente Estudiantil", value: "ambiente" },
          { label: "Cercanía de mi Domicilio", value: "cercania" },
          { label: "laboratorios e Instalaciones", value: "instalaciones" },
          { label: "Inserción laboral", value: "laboral" },
          {
            label: "Oferta académica adecuada a mis necesidades",
            value: "oferta",
          },
          { label: "Nivel académico", value: "nivel" },
          {
            label: "Actividades Deportivas y Culturales",
            value: "actividades",
          },
          { label: "Otra", value: "otra" },
        ],
        allowOther: true,
      },
    ],
  },
  {
    id: "6",
    title: "¿Cómo te gustaría enterarte de la vida universitaria?",
    iconColor: "var(--gold)",
    icon: <MoveToInboxOutlined sx={{ color: "var(--gold)" }} />,
    components: [
      {
        type: "select",
        id: "medio_preferido",
        options: [
          { label: "Correo", value: "correo" },
          { label: "Facebook e Instagram", value: "social" },
          { label: "Página web", value: "web" },
          { label: "Otra", value: "otra" },
        ],
        allowOther: true,
      },
    ],
  },
  {
    id: "7",
    title: "¿Qué otra carrera te gustaría que se ofertara?",
    iconColor: "var(--blue)",
    icon: <AddCircleOutlineOutlined sx={{ color: "var(--blue)" }} />,
    components: [
      {
        type: "select",
        id: "carrera",
        options: [
          { label: "Ingeniería Industrial", value: "industrial" },
          { label: "Sistemas", value: "sistemas" },
        ],
      },
    ],
  },
  {
    id: "8",
    title: "Si no te hubieras inscrito, ¿a dónde irías y por qué?",
    iconColor: "var(--green)",
    icon: <Message sx={{ color: "var(--green)" }} />,
    components: [
      {
        type: "text",
        id: "alternativa",
        placeholder: "Escribe tu respuesta...",
      },
    ],
  },
  {
    id: "9",
    title: "¿En cual de estos medios digitales pasas más tu tiempo libre?",
    iconColor: "var(--orange)",
    icon: <Phonelink sx={{ color: "var(--orange)" }} />,
    components: [
      {
        type: "select",
        id: "medio_digital",
        options: [
          { label: "Facebook", value: "facebook" },
          { label: "Instagram", value: "instagram" },
          { label: "TikTok", value: "tiktok" },
          { label: "Cine", value: "cine" },
          { label: "YouTube", value: "youtube" },
        ],
      },
    ],
  },
  {
    id: "10",
    title: "¿Qué medio frecuentas más?",
    iconColor: "var(--navyBlue)",
    icon: <Headset sx={{ color: "var(--navyBlue)" }} />,
    components: [
      {
        type: "select",
        id: "medio_frecuente",
        options: [
          { label: "Televisión local", value: "tv" },
          { label: "Viendo partidos de Fútbol en TV", value: "futbol" },
          { label: "Realizando Deportes", value: "deportes" },
          { label: "Escuchando el Radio Local", value: "radio" },
          { label: "Escuchando Spotify", value: "spotify" },
        ],
      },
    ],
  },
];
