"use client";

import {
  ComputerOutlined,
  SchoolOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import CarreraCarousel from "@/packages/components/home/carrerascarrousel/Carrerascarrousel";
import CategoryTabs from "@/packages/components/home/categorytab/categorytab";
import PreguntasCard from "@/packages/components/home/preguntascard/preguntascard";

const carrerasPresenciales = [
  {
    title: "Licenciatura en Gastronomía",
    text: "Forma parte de la nueva generación de profesionales de la salud forma parte de la nueva",
    modalidad: "Presencial" as const,
    turno: "Matutino / Vespertino",
    unidades: ["Arandas", "Zapopan", "Puerto Vallarta", "Tomatlán", "Chapala"],
    image: "/assets/resources/lic-gastronomia.webp",
  },
  {
    title: "Ingeniería en Sistemas Computacionales",
    text: "Defiende la justicia y el estado de derecho.",
    modalidad: "Presencial" as const,
    turno: "Matutino/Vespertino",
    unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
    image: "/assets/resources/ing-sist-computacionales.png",
  },
  {
    title: "Ingeniería Industrial",
    text: "Diseña los espacios del futuro.",
    modalidad: "Presencial" as const,
    turno: "Matutino/Vespertino",
    unidades: ["Arandas", "Zapopan", "Puerto Vallarta", "Tomatlán"],
    image: "/assets/resources/ing-industrial.avif",
  },
  {
    title: "Ingeniería Industrial",
    text: "Diseña los espacios del futuro.",
    modalidad: "Presencial" as const,
    turno: "Matutino/Vespertino",
    unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
    image: "/assets/resources/ing-industrial.avif",
  },
  {
    title: "Ingeniería Industrial",
    text: "Diseña los espacios del futuro.",
    modalidad: "Presencial" as const,
    turno: "Matutino/Vespertino",
    unidades: ["Puerto Vallarta", "Arandas", "Zapopan", "Tomatlán"],
    image: "/assets/resources/ing-industrial.avif",
  },
  {
    title: "Ingeniería Industrial",
    text: "Diseña los espacios del futuro.",
    modalidad: "Presencial" as const,
    turno: "Matutino/Vespertino",
    unidades: ["Puerto Vallarta", "Arandas", "Zapopan", "Tomatlán"],
    image: "/assets/resources/ing-industrial.avif",
  },
];
const carrerasEnLinea = [
  {
    title: "Ingeniería en Sistemas Computacionales",
    text: "Desarrolla soluciones tecnológicas de vanguardia.",
    modalidad: "En línea" as const,
    turno: "Flexible",
    unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
    image: "/assets/resources/ing-sist-computacionales.png",
  },
  {
    title: "Ingeniería en Gestión Empresarial",
    text: "Crea experiencias visuales para el mundo digital.",
    modalidad: "En línea" as const,
    turno: "Flexible",
    unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
    image: "/assets/resources/lic-gestion-empresarial.png",
  },
  {
    title: "Ingeniería Industrial",
    text: "Gestiona organizaciones con visión global.",
    modalidad: "En línea" as const,
    turno: "Flexible",
    unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
    image: "/assets/resources/ing-industrial.avif",
  },
  {
    title: "Ingeniería Industrial",
    text: "Gestiona organizaciones con visión global.",
    modalidad: "En línea" as const,
    turno: "Flexible",
    unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
    image: "/assets/resources/ing-industrial.avif",
  },
  {
    title: "Ingeniería Industrial",
    text: "Gestiona organizaciones con visión global.",
    modalidad: "En línea" as const,
    turno: "Flexible",
    unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
    image: "/assets/resources/ing-industrial.avif",
  },
  {
    title: "Ingeniería Industrial",
    text: "Gestiona organizaciones con visión global.",
    modalidad: "En línea" as const,
    turno: "Flexible",
    unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
    image: "/assets/resources/ing-industrial.avif",
  },
];

const maestrias = [
  {
    title: "Maestría en Ingeniería Electrónica",
    text: "Transforma la educación con herramientas digitales.",
    modalidad: "En línea" as const,
    turno: "Flexible",
    unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
    image: "/assets/resources/ing-electronica.jpg",
  },
  {
    title: "Maestría en Administración",
    text: "Lleva tu carrera profesional al siguiente nivel.",
    modalidad: "Presencial" as const,
    turno: "Vespertino",
    unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
    image: "/assets/resources/maestria-admin.jpg",
  },
  {
    title: "Maestría en Sistemas Computacionales",
    text: "Especialízate en el ámbito jurídico empresarial.",
    modalidad: "Presencial" as const,
    turno: "Matutino / Vespertino",
    unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
    image: "/assets/resources/ing-sist-computacionales.png",
  },
  {
    title: "Maestría en Sistemas Computacionales",
    text: "Especialízate en el ámbito jurídico empresarial.",
    modalidad: "Presencial" as const,
    turno: "Matutino / Vespertino",
    unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
    image: "/assets/resources/ing-sist-computacionales.png",
  },
  {
    title: "Maestría en Sistemas Computacionales",
    text: "Especialízate en el ámbito jurídico empresarial.",
    modalidad: "Presencial" as const,
    turno: "Matutino / Vespertino",
    unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
    image: "/assets/resources/ing-sist-computacionales.png",
  },
  {
    title: "Maestría en Sistemas Computacionales",
    text: "Especialízate en el ámbito jurídico empresarial.",
    modalidad: "Presencial" as const,
    turno: "Matutino / Vespertino",
    unidades: ["Tomatlán", "Zapopan", "Puerto Vallarta"],
    image: "/assets/resources/ing-sist-computacionales.png",
  },
];

export default function OfertaEducativaSection() {
  const [activeTab, setActiveTab] = useState("Todos");

  return (
    <Box sx={{ py: 4, pb: 2 }}>
      <Typography variant="h3" fontWeight="bold" mb={2} textAlign="center">
        Oferta educativa
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        textAlign="center"
        sx={{ maxWidth: 700, mx: "auto", mb: 8 }}
      >
        Conoce todos los programas educativos que tenemos disponibles para ti.
      </Typography>

      <CategoryTabs activeTab={activeTab} onChange={setActiveTab} />

      {(activeTab === "Todos" || activeTab === "Presenciales") && (
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={3}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <SchoolOutlined />
            Carreras presenciales
          </Typography>
          <CarreraCarousel cards={carrerasPresenciales} />
        </Box>
      )}

      {(activeTab === "Todos" || activeTab === "En Línea") && (
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={3}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <ComputerOutlined />
            Carreras en línea
          </Typography>
          <CarreraCarousel cards={carrerasEnLinea} />
        </Box>
      )}

      {(activeTab === "Todos" || activeTab === "Maestrías") && (
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={3}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <WorkspacePremiumOutlined />
            Maestrías
          </Typography>
          <CarreraCarousel cards={maestrias} />
          <PreguntasCard
            title="Preguntas sobre nuestras carreras"
            faqs={[
              {
                question: "¿PUEDO CAMBIAR DE CARRERA UNA VEZ INSCRITO?",
                answer:
                  "Sí, existe un proceso de cambio de carrera sujeto a disponibilidad de lugares y requisitos académicos.",
              },
              {
                question:
                  "¿LAS CARRERAS EN LÍNEA TIENEN EL MISMO VALOR QUE LAS PRESENCIALES?",
                answer:
                  "Sí, todos nuestros programas están reconocidos oficialmente y tienen el mismo valor curricular.",
              },
              {
                question:
                  "¿QUÉ REQUISITOS NECESITO PARA INSCRIBIRME A UNA MAESTRÍA?",
                answer:
                  "Se requiere título de licenciatura, carta de motivos, y en algunos casos examen de admisión específico.",
              },
              {
                question: "¿LAS MAESTRÍAS TIENEN BECA?",
                answer:
                  "Contamos con programas de beca parcial y total según perfil socioeconómico y rendimiento académico.",
              },
            ]}
          />
        </Box>
      )}
    </Box>
  );
}
