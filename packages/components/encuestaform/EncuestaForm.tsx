"use client";

import SendIcon from "@mui/icons-material/Send";
import { Box, Button, Container } from "@mui/material";

import { questions } from "@/packages/components/encuestaform/questions";
import QuestionCard from "@/packages/shared/common/questioncard/Questioncard";

import type { Question } from "@/packages/shared/common/types/question";

export default function EncuestaForm() {
  return (
    <Container maxWidth="xl" disableGutters sx={{ px: 3 }}>
      <Box sx={{ mt: 6 }}>
        {questions.map((q: Question, i: number) => (
          <QuestionCard
            key={q.id}
            question={q}
            index={i}
            total={questions.length}
          />
        ))}
      </Box>
      <Button
        variant="contained"
        sx={{
          display: "flex",
          textTransform: "none",
          backgroundColor: "#373A3A",
          alignItems: "center",
          mx: "auto",
          mt: 2,
          mb: 8,
          px: 16,
          py: 2,
          borderRadius: "12px",
          fontSize: "1.5rem",
        }}
      >
        Finalizar y Enviar
        <SendIcon sx={{ ml: 1 }} />
      </Button>
    </Container>
  );
}
