import {
  EmailOutlined,
  LocalPhoneOutlined,
  WhatsApp,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import InfoCard from "@/packages/shared/common/card/Genericcard";

export default function ContactoSection() {
  return (
    <Box sx={{ py: 8, pt: 2 }}>
      <Typography variant="h3" fontWeight="bold" mb={2} textAlign="center">
        ¿Tienes dudas? Contáctanos
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        textAlign="center"
        sx={{ maxWidth: 600, mx: "auto", mb: 6 }}
      >
        Estamos aquí para ayudarte en cada paso de tu proceso. Elige el medio
        que prefieras y nuestro equipo de admisiones te atenderá a la brevedad.
      </Typography>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 4 }}>
          <InfoCard
            icon={<LocalPhoneOutlined />}
            title="Llámanos"
            text="Atención telefónica de lunes a viernes de 9:00 a 18:00 hrs."
            actionLabel="+52 (55) 1234-5678"
            actionHref="tel:+52551234567"
            iconVariant="center-circle-link"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <InfoCard
            icon={<WhatsApp />}
            title="WhatsApp"
            text="Envíanos un mensaje rápido para respuestas instantáneas."
            actionLabel="Chatear ahora"
            actionHref="https://wa.me/52551234567"
            iconVariant="center-circle-link"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <InfoCard
            icon={<EmailOutlined />}
            title="Email"
            text="Escríbenos para dudas detalladas sobre planes de estudio."
            actionLabel="admisiones@universidad.edu"
            actionHref="mailto:admisiones@universidad.edu"
            iconVariant="center-circle-link"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
