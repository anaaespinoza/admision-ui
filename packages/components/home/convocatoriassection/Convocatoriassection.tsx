import {
  CampaignOutlined,
  FactCheckOutlined,
  HowToRegOutlined,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import InfoCard from "@/packages/shared/common/card/Genericcard";

export default function ConvocatoriaSection() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight="bold" mb={2} textAlign="center">
        Convocatoria 2026
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        textAlign="center"
        sx={{ maxWidth: 700, mx: "auto", mb: 6 }}
      >
        Sigue los pasos de nuestro proceso institucional para completar tu
        admisión.
      </Typography>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 4 }}>
          <InfoCard
            icon={<HowToRegOutlined />}
            title="1. Registro Online"
            date="Octubre 1 - Noviembre 15"
            text="Crea tu cuenta en el portal de aspirantes y sube tu documentación oficial digitalizada en formato PDF."
            iconVariant="left-square"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <InfoCard
            icon={<FactCheckOutlined />}
            title="2. Examen de Admisión."
            date="Noviembre 20 - Diciembre 5"
            text="Realiza el examen de admisión en línea desde cualquier dispositivo en la fecha asignada."
            iconVariant="left-square"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <InfoCard
            icon={<CampaignOutlined />}
            title="3. Resultados."
            date="Enero 10 - Febrero 1"
            text="Una vez aceptado, completa tu inscripción y prepárate para iniciar tu vida universitaria."
            iconVariant="left-square"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
