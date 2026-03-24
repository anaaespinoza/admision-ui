"use client";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Typography, TextField, MenuItem } from "@mui/material";
import { Fragment } from "react";

import type { Question } from "@/app/(site)/types/Question";

type Props = {
  question: Question;
  index: number;
  total: number;
};

export default function QuestionCard({ question, index, total }: Props) {
  const renderComponents = () => {
    const getColumns = () => {
      const hasOther = question.components.some(
        (c) => c.type === "select" && c.allowOther,
      );
      const effectiveLength = question.components.length + (hasOther ? 1 : 0);

      if (effectiveLength === 1) return "minmax(0, 1fr)";
      if (effectiveLength === 2) return "repeat(2, minmax(0, 1fr))";
      return "repeat(3, minmax(0, 1fr))";
    };
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: getColumns(),
          },
          gap: 2,
          alignItems: "end",
        }}
      >
        {question.components.map((comp) => {
          switch (comp.type) {
            case "text":
              return (
                <Box key={`${question.id}-${comp.id}`} sx={{ width: "100%" }}>
                  {comp.label && (
                    <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
                      {comp.label}
                    </Typography>
                  )}
                  <TextField
                    fullWidth
                    size="small"
                    placeholder={comp.placeholder}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "18px",
                      },
                    }}
                  />
                </Box>
              );

            case "select":
              return (
                <Fragment key={`${question.id}-${comp.id}`}>
                  <Box sx={{ width: "100%" }}>
                    {comp.label && (
                      <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
                        {comp.label}
                      </Typography>
                    )}
                    <TextField
                      select
                      fullWidth
                      size="small"
                      SelectProps={{
                        IconComponent: KeyboardArrowDownIcon,
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                        },
                      }}
                    >
                      {comp.options?.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>

                  {comp.allowOther && (
                    <Box sx={{ width: "100%" }}>
                      <Typography
                        sx={{ mb: 0.5, fontWeight: 500, visibility: "hidden" }}
                      >
                        placeholder
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="Especifica..."
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                          },
                        }}
                      />
                    </Box>
                  )}
                </Fragment>
              );
            default:
              return null;
          }
        })}
      </Box>
    );
  };
  return (
    <Box
      sx={{
        border: "1px solid #E0E0E0",
        borderRadius: 3,
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.08)",
        p: 3,
        mb: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: "16px",
            backgroundColor: "#EEF2F6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 2,
          }}
        >
          {question.icon ? (
            <Box sx={{ color: "#3B82F6", fontSize: 28, lineHeight: 0 }}>
              {question.icon}
            </Box>
          ) : (
            <HelpOutlineIcon sx={{ color: "#3B82F6", fontSize: 28 }} />
          )}
        </Box>

        <Box>
          <Typography variant="caption" color="text.secondary">
            Pregunta {index + 1} de {total}
          </Typography>

          <Typography variant="h6" fontWeight="bold">
            {question.title}
          </Typography>
        </Box>
      </Box>
      {renderComponents()}
    </Box>
  );
}
