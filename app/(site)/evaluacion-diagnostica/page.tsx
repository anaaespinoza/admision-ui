import {
  EmojiEvents,
  FactCheckOutlined,
  RocketLaunch,
  TimerOutlined,
  Wifi,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import InstructionsCard from "@/packages/components/instructionscard/Instructionscard";
import LinkCard from "@/packages/components/linkcard/Linkcard";
import Hero from "@/packages/shared/common/hero/Hero";

export default function Page() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          pt: "20px",
          pl: { xs: 2, md: 1 },
          pr: { xs: 2, md: 30 },
        }}
      >
        <Hero
          title="¡Ya puedes realizar tu Evaluación Diagnóstica!"
          subtitle="Esta evaluación es el primer paso fundamental para personlzar tu trayectoria académica y desblloqiear todo tu potencial en el Tecnológico Superior de Jalisco"
          image="/assets/resources/evalucion-diagnostica.jpg"
          chipLabel="Nuevo Proceso"
          icon={
            <EmojiEvents
              sx={{ fontSize: 160, color: "rgba(255,255,255,0.5)" }}
            />
          }
        />

        <Box
          sx={{
            mt: 6,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            alignItems: "stretch",
          }}
        >
          <InstructionsCard
            icon={<FactCheckOutlined sx={{ fontSize: 20, color: "#5b5bd6" }} />}
            title="Consideraciones para el examen"
            subtitle="Prepara tu entorno para la evaluación"
            items={[
              {
                id: "duracion",
                icon: <TimerOutlined sx={{ fontSize: 22, color: "white" }} />,
                iconColor: "var(--blue)",
                title: "Duración de la Evaluación",
                description: "Tiene una duración de 60 minutos cronometrados",
              },
              {
                id: "conectividad",
                icon: <Wifi sx={{ fontSize: 22, color: "white" }} />,
                iconColor: "var(--green)",
                title: "Conectividad",
                description: "Asegúrate de tener conexión a internet estable",
              },
              {
                id: "intento",
                icon: <RocketLaunch sx={{ fontSize: 22, color: "white" }} />,
                iconColor: "var(--red)",
                title: "Un solo intento",
                description:
                  "Una vez iniciado, deberás completarlo en un solo intento.",
              },
            ]}
          />

          <LinkCard
            icon={
              <RocketLaunch sx={{ fontSize: 32, color: "var(--navyBlue)" }} />
            }
            title="¿Todo listo para comenzar?"
            description="Serás redirigido a la plataforma correspondiente para completar el examen."
            buttonText="Ir a Moodle"
            buttonHref="https://moodle.ejemplo.edu.mx"
            secureLabel="Enlace Seguro"
            backgroundColor="#308FFF33"
            buttonColor="var(--navyBlue)"
            buttonHoverColor="#250f7a"
            borderColor="#308FFF33"
          />
        </Box>
      </Container>
    </>
  );
}
