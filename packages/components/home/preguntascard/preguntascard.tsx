import { ContactSupportOutlined, ExpandMore } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface FAQItem {
  question: string;
  answer: string;
}

interface PreguntasCardProps {
  title?: string;
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: "¿QUÉ DOCUMENTOS SON REQUERIDOS?",
    answer:
      "Se requiere identificación oficial, CURP, certificado de estudios y fotografías recientes.",
  },
  {
    question: "¿QUÉ MODALIDADES TIENE EL EXAMEN DE ADMISIÓN?",
    answer:
      "El examen cuenta con modalidad en línea y presencial, según disponibilidad.",
  },
  {
    question: "¿EL EXAMEN DE ADMISIÓN TIENE ALGÚN COSTO?",
    answer:
      "Sí, tiene un costo de registro que se indica en la convocatoria oficial.",
  },
  {
    question: "¿PUEDO CAMBIAR DE MODALIDAD?",
    answer:
      "Los cambios de modalidad están sujetos a disponibilidad y deben solicitarse antes de la fecha límite.",
  },
];

export default function PreguntasCard({
  title = "Preguntas sobre la convocatoria",
  faqs = defaultFaqs,
}: PreguntasCardProps) {
  return (
    <Box sx={{ py: 6 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={4}
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        <ContactSupportOutlined />
        {title}
      </Typography>

      <Grid container spacing={2}>
        {faqs.map((faq) => (
          <Grid key={faq.question} size={{ xs: 12, md: 6 }}>
            <Accordion
              sx={{
                borderRadius: "12px !important",
                boxShadow: "none",
                border: "1px solid",
                borderColor: "grey.200",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="subtitle2" fontWeight="bold">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ minHeight: 72 }}>
                <Typography variant="body2" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
