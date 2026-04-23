import { Box, Container, Typography } from "@mui/material";

import CapacidadesForm from "@/packages/components/capacidadesform/CapacidadesForm";

export default function Page() {
  return (
    <Container maxWidth="xl" disableGutters sx={{ px: 3 }}>
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 1,
          }}
        >
          Encuesta de Capacidades Motrices
        </Typography>

        <Typography
          sx={{
            color: "#6B7280",
          }}
        >
          Esta encuesta tiene como objetivo conocer tus capacidades y
          necesidades para brindarte una mejor atención durante tu proceso.Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </Typography>
      </Box>
      <CapacidadesForm />
    </Container>
  );
}
